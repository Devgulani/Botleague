import { Skeleton } from "@/components/ui/skeleton";

export function PageHeroSkeleton() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="mt-3 h-12 w-3/4 md:h-16" />
        <Skeleton className="mt-4 h-5 w-1/2" />
      </div>
    </section>
  );
}
