import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EcosystemSkeleton } from "@/components/skeletons/EcosystemSkeleton";

const Page = lazy(() => import("./ecosystem.page"));

export const Route = createFileRoute("/ecosystem")({
  head: () => ({ meta: [{ title: "Ecosystem — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<EcosystemSkeleton />}>
      <Page />
    </Suspense>
  ),
});
