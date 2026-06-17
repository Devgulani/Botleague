import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface AvatarSkeletonProps {
  size?: number;
  className?: string;
}

export function AvatarSkeleton({ size = 10, className }: AvatarSkeletonProps) {
  return (
    <Skeleton
      className={cn("rounded-full", className)}
      style={{ width: `${size * 4}px`, height: `${size * 4}px` }}
    />
  );
}
