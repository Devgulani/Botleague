import { useState, useCallback, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface ProgressiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: string;
  containerClassName?: string;
}

export function ProgressiveImage({
  src,
  alt,
  aspectRatio,
  containerClassName,
  className,
  ...props
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  const onError = useCallback(() => {
    setError(true);
    setLoaded(true);
  }, []);

  return (
    <div
      className={cn("relative overflow-hidden", containerClassName)}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {!loaded && (
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" aria-hidden="true" />
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-1 text-xs text-muted-foreground">
          Failed to load image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={onLoad}
          onError={onError}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-500",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
          {...props}
        />
      )}
    </div>
  );
}
