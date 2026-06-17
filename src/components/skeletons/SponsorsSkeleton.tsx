import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

export function SponsorsSkeleton() {
  const tiers = [
    { count: 2, grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
    { count: 3, grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
    { count: 4, grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
    { count: 5, grid: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" },
  ];

  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        {tiers.map((tier, idx) => (
          <div key={idx} className={idx ? "mt-14" : ""}>
            <div className="mb-10">
              <Skeleton className="h-3 w-24" />
              <Skeleton className="mt-2 h-8 w-48" />
            </div>
            <div className={`grid gap-4 ${tier.grid}`}>
              {Array.from({ length: tier.count }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-surface-1 p-6 text-center"
                >
                  <Skeleton className="h-10 w-10" />
                  <Skeleton className="h-5 w-24" />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-hairline bg-surface-1 p-10 text-center">
          <Skeleton className="mx-auto h-9 w-64" />
          <Skeleton className="mx-auto mt-3 h-4 w-96 max-w-full" />
          <Skeleton className="mx-auto mt-6 h-11 w-52 rounded-md" />
        </div>
      </section>
    </PageShellSkeleton>
  );
}
