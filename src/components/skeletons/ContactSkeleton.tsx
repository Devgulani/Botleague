import { Skeleton } from "@/components/ui/skeleton";
import { PageShellSkeleton } from "@/components/ui/skeletons/PageShellSkeleton";
import { PageHeroSkeleton } from "@/components/ui/skeletons/PageHeroSkeleton";

export function ContactSkeleton() {
  return (
    <PageShellSkeleton>
      <PageHeroSkeleton />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info cards + map */}
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface-1 p-5"
              >
                <Skeleton className="h-10 w-10 rounded-md" />
                <div>
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="mt-1 h-4 w-40" />
                </div>
              </div>
            ))}
            <Skeleton className="aspect-video w-full rounded-2xl" />
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-hairline bg-surface-1 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Skeleton className="h-3 w-16" />
                <Skeleton className="mt-1 h-10 w-full rounded-md" />
              </div>
              <div>
                <Skeleton className="h-3 w-16" />
                <Skeleton className="mt-1 h-10 w-full rounded-md" />
              </div>
            </div>
            <div className="mt-4">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="mt-1 h-10 w-full rounded-md" />
            </div>
            <div className="mt-4">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="mt-1 h-32 w-full rounded-md" />
            </div>
            <Skeleton className="mt-5 h-10 w-40 rounded-md" />
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-14">
          <div className="mb-10">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="mt-2 h-8 w-24" />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-hairline bg-surface-1 p-4">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="mt-1 h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShellSkeleton>
  );
}
