import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

export function AboutSkeleton() {
  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        {/* Mission/Vision */}
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-hairline bg-surface-1 p-6">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="mt-4 h-6 w-1/2" />
              <Skeleton className="mt-2 h-4 w-full" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-14">
          <div className="mb-10">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-2 h-8 w-40" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface-1 p-6 text-center"
              >
                <Skeleton className="mx-auto h-9 w-20" />
                <Skeleton className="mx-auto mt-1 h-4 w-16" />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-14">
          <div className="mb-10">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="mt-2 h-8 w-40" />
          </div>
          <div className="relative space-y-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
                <Skeleton className="absolute left-0 top-1 h-6 w-6 rounded-full md:left-1/2 md:-translate-x-1/2" />
                <div className="rounded-xl border border-hairline bg-surface-1 p-4">
                  <Skeleton className="h-3 w-12" />
                  <Skeleton className="mt-1 h-5 w-3/4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mt-14">
          <div className="mb-10">
            <Skeleton className="h-3 w-20" />
            <Skeleton className="mt-2 h-8 w-48" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-hairline bg-surface-1 p-5 text-center"
              >
                <Skeleton className="mx-auto h-20 w-20 rounded-full" />
                <Skeleton className="mx-auto mt-4 h-5 w-28" />
                <Skeleton className="mx-auto mt-1 h-4 w-24" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-hairline bg-surface-1 p-6">
              <Skeleton className="h-10 w-10 rounded-md" />
              <Skeleton className="mt-4 h-6 w-1/2" />
              <Skeleton className="mt-2 h-4 w-full" />
            </div>
          ))}
        </div>
      </section>
    </PageShellSkeleton>
  );
}
