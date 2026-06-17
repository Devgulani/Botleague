import { Skeleton } from "@/components/ui/skeleton";

export function NavbarSkeleton() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <div className="flex shrink-0 items-center gap-2">
          <Skeleton className="h-7 w-7 rounded-md" />
          <Skeleton className="h-5 w-32" />
        </div>
        <nav className="hidden items-center gap-6 lg:flex">
          {Array.from({ length: 9 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Skeleton className="h-8 w-20 rounded-md" />
          <Skeleton className="h-8 w-20 rounded-md" />
        </div>
        <Skeleton className="h-9 w-9 rounded-md lg:hidden" />
      </div>
    </header>
  );
}
