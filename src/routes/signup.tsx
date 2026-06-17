import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SignupSkeleton } from "@/components/skeletons/SignupSkeleton";

const Page = lazy(() => import("./signup.page"));

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign Up — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<SignupSkeleton />}>
      <Page />
    </Suspense>
  ),
});
