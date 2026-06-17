import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface ButtonSkeletonProps {
  className?: string;
}

export function ButtonSkeleton({ className }: ButtonSkeletonProps) {
  return <Skeleton className={cn("h-9 rounded-md", className)} />;
}
