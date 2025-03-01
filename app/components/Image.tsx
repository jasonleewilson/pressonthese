"use client";

import { FC } from "react";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  onClick?: () => void;
};

const Image: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  onClick,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onClick={onClick}
    />
  );
};

export default Image;
