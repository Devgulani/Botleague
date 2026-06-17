import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CategoriesSkeleton } from "@/components/skeletons/CategoriesSkeleton";

const Page = lazy(() => import("./categories.index.page"));

export const Route = createFileRoute("/categories/")({
  head: () => ({ meta: [{ title: "Categories — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<CategoriesSkeleton />}>
      <Page />
    </Suspense>
  ),
});
