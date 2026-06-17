import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

export function CategoriesDetailSkeleton() {
  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <div>
            <Skeleton className="h-7 w-40" />
            <div className="mt-4 space-y-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-surface-1 p-4"
                >
                  <Skeleton className="mt-0.5 h-4 w-4 shrink-0" />
                  <Skeleton className="h-4 flex-1" />
                </div>
              ))}
            </div>
            <Skeleton className="mt-6 h-11 w-56 rounded-md" />
          </div>
        </div>
      </section>
    </PageShellSkeleton>
  );
}
