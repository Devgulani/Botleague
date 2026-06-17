import { Suspense, lazy } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ContactSkeleton } from "@/components/skeletons/ContactSkeleton";

const Page = lazy(() => import("./contact.page"));

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — BotLeague" }] }),
  component: () => (
    <Suspense fallback={<ContactSkeleton />}>
      <Page />
    </Suspense>
  ),
});
