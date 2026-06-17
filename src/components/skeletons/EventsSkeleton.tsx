import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

function SectionTitleSkeleton() {
  return (
    <div className="mb-10">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="mt-2 h-8 w-48" />
    </div>
  );
}

export function EventsSkeleton() {
  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        {/* Filter chips */}
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-24 rounded-full" />
          ))}
        </div>

        {/* Event cards */}
        <div className="mt-12">
          <SectionTitleSkeleton />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-hairline bg-surface-1 p-5">
                <div className="flex items-start justify-between">
                  <Skeleton className="h-5 w-20 rounded-full" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="mt-4 h-6 w-3/4" />
                <div className="mt-3 space-y-1.5">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="mt-5 h-9 w-full rounded-md" />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="!py-10">
          <SectionTitleSkeleton />
          <div className="relative space-y-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                <Skeleton className="absolute left-0 top-1 h-6 w-6 rounded-full md:left-1/2 md:-translate-x-1/2" />
                <div className="rounded-xl border border-hairline bg-surface-1 p-4">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="mt-1 h-5 w-40" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prize cards */}
        <div className="mt-14">
          <SectionTitleSkeleton />
          <div className="grid gap-5 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface-1 p-6 text-center"
              >
                <Skeleton className="mx-auto h-8 w-8" />
                <Skeleton className="mx-auto mt-3 h-3 w-20" />
                <Skeleton className="mx-auto mt-2 h-10 w-32" />
                <Skeleton className="mx-auto mt-2 h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <SectionTitleSkeleton />
          <div className="space-y-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-hairline bg-surface-1 p-4">
                <Skeleton className="h-5 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShellSkeleton>
  );
}
