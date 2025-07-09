// SmartImage.js
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Stack } from "@mui/material";

export default function SmartImage({
  src,
  alt,
  width,
  height,
  placeholder,
  srcSet,
  sizes,
  className,
  style,
}) {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Stack
      ref={ref}
      className={`relative overflow-hidden ${className || ""}`}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "blur(20px)",
            transition: "opacity 0.3s ease",
            opacity: loaded ? 0 : 1,
          }}
        />
      )}

      {inView && (
        <img
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.3s ease",
            opacity: loaded ? 1 : 0,
          }}
        />
      )}
    </Stack>
  );
}
