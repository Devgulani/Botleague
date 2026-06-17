import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ForgotPasswordSkeleton } from "@/components/skeletons/ForgotPasswordSkeleton";

const Page = lazy(() => import("./forgot-password.page"));

export const Route = createFileRoute("/forgot-password")({
  head: () => ({ meta: [{ title: "Forgot Password — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<ForgotPasswordSkeleton />}>
      <Page />
    </Suspense>
  ),
});
