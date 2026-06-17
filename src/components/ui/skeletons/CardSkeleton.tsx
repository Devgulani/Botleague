import { Skeleton } from "@/components/ui/skeleton";

interface CardSkeletonProps {
  image?: boolean;
  lines?: number;
  buttons?: number;
  tags?: boolean;
  className?: string;
}

export function CardSkeleton({
  image,
  lines = 2,
  buttons = 0,
  tags,
  className = "",
}: CardSkeletonProps) {
  return (
    <div className={`rounded-2xl border border-hairline bg-surface-1 p-5 ${className}`}>
      {image && <Skeleton className="aspect-[4/3] w-full rounded-xl" />}
      {tags && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      )}
      <div className={image || tags ? "mt-4 space-y-2" : "space-y-2"}>
        <Skeleton className="h-5 w-3/4" />
        {Array.from({ length: lines }).map((_, i) => (
          <Skeleton key={i} className={`h-4 ${i === lines - 1 ? "w-1/2" : "w-full"}`} />
        ))}
      </div>
      {buttons > 0 && (
        <div className="mt-4 flex gap-2">
          {Array.from({ length: buttons }).map((_, i) => (
            <Skeleton key={i} className="h-9 flex-1 rounded-md" />
          ))}
        </div>
      )}
    </div>
  );
}
