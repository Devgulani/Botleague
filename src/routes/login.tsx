import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LoginSkeleton } from "@/components/skeletons/LoginSkeleton";

const Page = lazy(() => import("./login.page"));

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<LoginSkeleton />}>
      <Page />
    </Suspense>
  ),
});
