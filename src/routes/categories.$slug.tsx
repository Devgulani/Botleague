import { Suspense, lazy } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CategoriesDetailSkeleton } from "@/components/skeletons/CategoriesDetailSkeleton";
import { CATEGORIES } from "./categories.index.page";

const Page = lazy(() => import("./categories.$slug.page"));

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        <h1 className="font-display text-3xl font-bold">Category not found</h1>
        <Link to="/categories" className="mt-4 inline-block text-accent">
          ← Back to all categories
        </Link>
      </section>
    </div>
  ),
  component: () => (
    <Suspense fallback={<CategoriesDetailSkeleton />}>
      <Page />
    </Suspense>
  ),
});
