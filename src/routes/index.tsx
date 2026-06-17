import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HomeSkeleton } from "@/components/skeletons/HomeSkeleton";

const Page = lazy(() => import("./index.page"));

export const Route = createFileRoute("/")({
  component: () => (
    <Suspense fallback={<HomeSkeleton />}>
      <Page />
    </Suspense>
  ),
});
