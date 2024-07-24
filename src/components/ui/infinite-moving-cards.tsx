"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils"; // Ensure this utility is defined or replace with a classnames utility

export const InfiniteMovingImages = ({
  imageUrls,
  direction = "down",
  speed = "fast",
  pauseOnHover = false,
  width = "100%", // Default width
  height = "100vh", // Default height to fit the viewport
  borderRadius = "8px", // Default border radius
  className,
}: {
  imageUrls: string[];
  direction?: "up" | "down";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const duplicatedContent = scrollerRef.current.cloneNode(true) as HTMLDivElement;
      containerRef.current.appendChild(duplicatedContent);
      setStart(true);
    }
  }, []);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "down") {
        containerRef.current.style.setProperty("--animation-direction", "normal");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  useEffect(() => {
    getDirection();
    getSpeed();
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden",
        className
      )}
      style={{
        height: typeof height === "string" ? height : `${height}px`,
      }}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex flex-col shrink-0",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {imageUrls.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            style={{ width, height, borderRadius }}
            alt={`Scrolling Image ${index + 1}`}
            className="object-cover mb-4"
          />
        ))}
      </div>
    </div>
  );
};