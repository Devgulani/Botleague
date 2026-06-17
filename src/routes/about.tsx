import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AboutSkeleton } from "@/components/skeletons/AboutSkeleton";

const Page = lazy(() => import("./about.page"));

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<AboutSkeleton />}>
      <Page />
    </Suspense>
  ),
});
