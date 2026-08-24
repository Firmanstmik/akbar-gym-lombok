"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type MediaImageProps = Omit<ImageProps, "onLoad" | "onError" | "onLoadingComplete"> & {
  /** Soft silver shimmer + bubble while the image decodes */
  showLoader?: boolean;
};

export function MediaImage({
  className = "",
  showLoader = true,
  fill,
  alt,
  ...props
}: MediaImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span
      className={`media-frame${fill ? " media-frame-fill" : ""}${loaded ? " is-loaded" : ""}`}
    >
      {showLoader && !loaded ? (
        <span className="media-skeleton" aria-hidden>
          <span className="media-shimmer" />
          <span className="media-bubble" />
        </span>
      ) : null}
      <Image
        alt={alt}
        fill={fill}
        {...props}
        className={`media-img ${className}`.trim()}
        onLoadingComplete={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </span>
  );
}
