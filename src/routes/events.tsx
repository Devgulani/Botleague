import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { EventsSkeleton } from "@/components/skeletons/EventsSkeleton";

const Page = lazy(() => import("./events.page"));

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — BotLeague" },
      {
        name: "description",
        content: "Upcoming, live, and past robotics competitions across India.",
      },
    ],
  }),
  component: () => (
    <Suspense fallback={<EventsSkeleton />}>
      <Page />
    </Suspense>
  ),
});
