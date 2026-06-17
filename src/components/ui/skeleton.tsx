import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "surface-1" | "surface-2" | "surface-3";
}

function Skeleton({ className, variant = "surface-1", ...props }: SkeletonProps) {
  const bgMap = {
    "surface-1": "bg-surface-1",
    "surface-2": "bg-surface-2",
    "surface-3": "bg-surface-3",
  };

  return (
    <div
      className={cn("skeleton-shimmer rounded-md", bgMap[variant], className)}
      aria-hidden="true"
      {...props}
    />
  );
}

export { Skeleton };
