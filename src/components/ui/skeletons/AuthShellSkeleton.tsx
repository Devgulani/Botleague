import { Skeleton } from "@/components/ui/skeleton";

export function AuthShellSkeleton() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-md flex-col px-5 py-10">
        <div className="flex items-center gap-2">
          <Skeleton className="h-7 w-7 rounded-md" />
          <Skeleton className="h-5 w-40" />
        </div>
        <div className="mt-12 rounded-2xl border border-hairline bg-surface-1/80 p-7 backdrop-blur-xl">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="mt-2 h-4 w-1/2" />
          <div className="mt-6 space-y-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
            <div className="flex items-center gap-3">
              <Skeleton className="h-px flex-1" />
              <Skeleton className="h-3 w-6" />
              <Skeleton className="h-px flex-1" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Skeleton className="h-10 w-full rounded-md" />
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
            <Skeleton className="h-12 w-full rounded-md" />
          </div>
        </div>
        <Skeleton className="mx-auto mt-6 h-4 w-48" />
      </div>
    </div>
  );
}
