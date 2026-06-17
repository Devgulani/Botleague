import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

export function CategoriesSkeleton() {
  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-hairline bg-surface-1 p-5">
              <div className="aspect-[5/3] rounded-xl bg-surface-2">
                <Skeleton className="h-full w-full rounded-xl" />
              </div>
              <Skeleton className="mt-5 h-6 w-3/4" />
              <Skeleton className="mt-1 h-4 w-full" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Skeleton className="h-10 rounded-md" />
                <Skeleton className="h-10 rounded-md" />
              </div>
              <Skeleton className="mt-5 h-9 w-full rounded-md" />
            </div>
          ))}
        </div>
      </section>
    </PageShellSkeleton>
  );
}
