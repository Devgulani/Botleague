import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DisciplinesSkeleton } from "@/components/skeletons/DisciplinesSkeleton";

const Page = lazy(() => import("./disciplines.page"));

export const Route = createFileRoute("/disciplines")({
  head: () => ({ meta: [{ title: "Disciplines — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<DisciplinesSkeleton />}>
      <Page />
    </Suspense>
  ),
});
