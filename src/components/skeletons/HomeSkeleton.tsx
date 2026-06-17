import { Skeleton } from "@/components/ui/skeleton";
import { NavbarSkeleton } from "@/components/ui/skeletons/NavbarSkeleton";
import { FooterSkeleton } from "@/components/ui/skeletons/FooterSkeleton";

function SectionSkeleton() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Skeleton className="h-5 w-48" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-hairline bg-surface-1 p-5">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="mt-4 h-5 w-3/4" />
              <Skeleton className="mt-2 h-4 w-full" />
              <Skeleton className="mt-2 h-4 w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarSkeleton />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-hairline">
              <Skeleton className="h-[420px] w-full rounded-none sm:h-[480px] md:h-[560px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-end p-6 md:items-center md:p-12">
                <div className="max-w-xl">
                  <Skeleton className="h-16 w-full md:h-24" />
                  <Skeleton className="mt-4 h-5 w-3/4" />
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Skeleton className="h-10 w-36 rounded-md" />
                    <Skeleton className="h-10 w-36 rounded-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EventsSection */}
        <SectionSkeleton />

        {/* JourneySection */}
        <section className="border-y border-hairline bg-surface-1/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 text-center lg:px-8">
            <Skeleton className="mx-auto h-3 w-24" />
            <Skeleton className="mx-auto mt-2 h-8 w-64" />
            <Skeleton className="mx-auto mt-2 h-4 w-80" />
            <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <Skeleton className="mt-4 h-3 w-16" />
                  <Skeleton className="mt-2 h-4 w-24" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatIsBotLeague */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Skeleton className="h-8 w-56" />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-6 w-8" />
                    <Skeleton className="mt-1 h-5 w-3/4" />
                    <Skeleton className="mt-2 h-4 w-full" />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-20" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CategoriesSection */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Skeleton className="h-8 w-40" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-2xl border border-hairline bg-surface-1 p-5">
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="mt-8 h-10 w-24" />
                  <Skeleton className="mt-2 h-4 w-full" />
                  <Skeleton className="mt-6 h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DisciplinesSection */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-2 h-8 w-64" />
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-hairline bg-surface-1">
                  <Skeleton className="aspect-[4/3] w-full rounded-none rounded-t-xl" />
                  <div className="p-3">
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AdvantageSection */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="mt-2 h-8 w-64" />
            <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div className="space-y-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <Skeleton className="h-10 w-10 rounded-md" />
                    <div className="min-w-0 flex-1">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="mt-1 h-4 w-full" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-hairline bg-surface-1 p-5">
                <Skeleton className="mx-auto h-4 w-32" />
                <Skeleton className="mt-5 h-16 w-full rounded-xl" />
                <div className="mt-3 space-y-1.5">
                  {Array.from({ length: 7 }).map((_, i) => (
                    <Skeleton key={i} className="h-8 w-full rounded-md" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EcosystemSection */}
        <SectionSkeleton />

        {/* SponsorsSection */}
        <section className="border-t border-hairline py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Skeleton className="h-7 w-32" />
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <Skeleton className="h-5 w-28" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSkeleton />
    </div>
  );
}
