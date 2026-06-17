import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

export function LeaderboardSkeleton() {
  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        {/* Podium cards */}
        <div className="grid gap-5 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-hairline bg-surface-1 p-6"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-3 w-12" />
                <Skeleton className="h-6 w-6" />
              </div>
              <Skeleton className="mt-6 h-7 w-3/4" />
              <Skeleton className="mt-1 h-4 w-1/2" />
              <Skeleton className="mt-5 h-9 w-full" />
              <div className="mt-3 flex gap-4">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          ))}
        </div>

        {/* Search + sort */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
          <div className="flex items-center gap-1 rounded-md border border-hairline bg-surface-1 p-1">
            <Skeleton className="h-3 w-4 ml-2" />
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-7 w-14 rounded" />
            ))}
          </div>
        </div>

        {/* Table header */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-hairline">
          <div className="grid grid-cols-[60px_1.6fr_1.4fr_1fr_0.8fr_0.8fr] gap-2 border-b border-hairline bg-surface-2 px-4 py-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-3" />
            ))}
          </div>

          {/* Table rows */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_1.6fr_1.4fr_1fr_0.8fr_0.8fr] gap-2 border-b border-hairline bg-surface-1 px-4 py-3 last:border-b-0"
            >
              {Array.from({ length: 6 }).map((_, j) => (
                <Skeleton key={j} className="h-4" />
              ))}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <Skeleton className="h-4 w-32" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-16 rounded" />
            <Skeleton className="h-8 w-16 rounded" />
          </div>
        </div>
      </section>
    </PageShellSkeleton>
  );
}
