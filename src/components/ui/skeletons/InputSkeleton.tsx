import { Skeleton } from "@/components/ui/skeleton";

interface InputSkeletonProps {
  label?: boolean;
  className?: string;
}

export function InputSkeleton({ label, className = "" }: InputSkeletonProps) {
  return (
    <div className={className}>
      {label && <Skeleton className="mb-1.5 h-3 w-20" />}
      <Skeleton className="h-10 w-full rounded-md" />
    </div>
  );
}
