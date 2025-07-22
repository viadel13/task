import React, { useState, useEffect } from "react";

export const useResponsiveBubbleSize = (baseSize = 100, baseWidth = 1440) => {
  const [bubbleSize, setBubbleSize] = useState(
    () => (window.innerWidth / baseWidth) * baseSize,
  );

  useEffect(() => {
    const handleResize = () => {
      setBubbleSize((window.innerWidth / baseWidth) * baseSize);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [baseSize, baseWidth]);

  return bubbleSize;
};
