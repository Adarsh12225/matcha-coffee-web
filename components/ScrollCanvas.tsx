"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useSpring } from "framer-motion";

interface ScrollCanvasProps {
  frameCount: number;
}

export default function ScrollCanvas({ frameCount }: ScrollCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress (buttery smoothness)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Preload images
  useEffect(() => {
    let isMounted = true;
    const loadImages = () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `/sequence/frame_${i}.jpg`;
        img.onload = () => {
          if (!isMounted) return;
          loadedCount++;
          setImagesLoaded(loadedCount);
          if (loadedCount === frameCount) {
            setIsLoading(false);
          }
        };
        img.onerror = () => {
            if (!isMounted) return;
            console.error(`Failed to load image: /sequence/frame_${i}.jpg`);
            loadedCount++; // Still count it to avoid blocking loading UI if one fails
            setImagesLoaded(loadedCount);
            if (loadedCount === frameCount) {
              setIsLoading(false);
            }
        }
        loadedImages[i] = img;
      }
      imagesRef.current = loadedImages;
    };

    loadImages();
    return () => { isMounted = false; };
  }, [frameCount]);

  // Canvas drawing logic
  useEffect(() => {
    if (isLoading || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;

    const render = () => {
      const progress = smoothProgress.get();
      // Ensure index is within bounds [0, frameCount - 1]
      const frameIndex = Math.min(
        frameCount - 1,
        Math.floor(progress * frameCount)
      );

      const img = imagesRef.current[frameIndex];
      if (img && img.complete) {
        // Clear canvas with the specific theme color
        context.fillStyle = "#050505";
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Fit logic (contain)
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasAspect > imgAspect) {
          drawHeight = canvas.height;
          drawWidth = drawHeight * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = drawWidth / imgAspect;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Use a simpler approach: update on progress change
    const unsubscribe = smoothProgress.on("change", render);
    
    // Initial render
    render();

    return () => unsubscribe();
  }, [frameCount, isLoading, smoothProgress]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        // Set display size (css pixels).
        canvasRef.current.style.width = "100%";
        canvasRef.current.style.height = "100%";
        // Set actual size in memory (scaled to account for extra pixel density).
        const scale = window.devicePixelRatio;
        canvasRef.current.width = Math.floor(window.innerWidth * scale);
        canvasRef.current.height = Math.floor(window.innerHeight * scale);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
      {isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050505]">
          <div className="h-[1px] w-48 overflow-hidden bg-white/10">
            <div 
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
            />
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Initializing {Math.round((imagesLoaded / frameCount) * 100)}%
          </p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="h-full w-full"
      />
    </div>
  );
}
