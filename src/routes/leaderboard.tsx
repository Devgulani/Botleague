import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LeaderboardSkeleton } from "@/components/skeletons/LeaderboardSkeleton";

const Page = lazy(() => import("./leaderboard.page"));

export const Route = createFileRoute("/leaderboard")({
  head: () => ({ meta: [{ title: "Leaderboard — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<LeaderboardSkeleton />}>
      <Page />
    </Suspense>
  ),
});
