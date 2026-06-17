import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  aspectRatio?: string;
  className?: string;
}

export function ImageSkeleton({ aspectRatio = "4/3", className = "" }: ImageSkeletonProps) {
  return (
    <div className={cn("overflow-hidden", className)} style={{ aspectRatio }}>
      <Skeleton className="h-full w-full rounded-none" />
    </div>
  );
}
