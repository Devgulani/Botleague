import { Skeleton } from "@/components/ui/skeleton";

export function FooterSkeleton() {
  return (
    <footer className="border-t border-hairline bg-surface-1/60 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 lg:px-8">
        <div>
          <Skeleton className="mb-1 h-3 w-28" />
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-24" />
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-24" />
            ))}
          </div>
        </div>
        <div className="md:text-right">
          <Skeleton className="mb-1 ml-auto h-3 w-28" />
          <div className="mt-5 flex gap-3 md:justify-end">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-10 w-10 rounded-full" />
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-5 lg:px-8">
        <Skeleton className="h-3 w-64" />
      </div>
    </footer>
  );
}
