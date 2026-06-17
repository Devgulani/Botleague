import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SponsorsSkeleton } from "@/components/skeletons/SponsorsSkeleton";

const Page = lazy(() => import("./sponsors.page"));

export const Route = createFileRoute("/sponsors")({
  head: () => ({ meta: [{ title: "Sponsors — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<SponsorsSkeleton />}>
      <Page />
    </Suspense>
  ),
});
