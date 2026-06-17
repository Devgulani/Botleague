import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,45,45,0.22),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_50%_40%,black,transparent_70%)]" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 animate-pulse rounded-full bg-accent/20 blur-3xl" />
      <div className="relative max-w-lg text-center">
        <div className="font-display text-[140px] font-bold leading-none tracking-tighter text-foreground drop-shadow-[0_0_30px_rgba(255,45,45,0.55)] md:text-[200px]">
          404
        </div>
        <div className="mx-auto mt-2 grid h-16 w-16 place-items-center rounded-2xl border border-accent/40 bg-surface-1 glow-red-sm">
          <svg viewBox="0 0 24 24" className="h-8 w-8 text-accent" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="5" y="8" width="14" height="10" rx="2" /><circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" />
            <path d="M12 4v4M8 18v2M16 18v2" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-bold tracking-tight">Signal lost. Page not found.</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
          This corridor of the arena doesn't exist. Let's get you back to the action.
        </p>
        <Link to="/" className="mt-7 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-xs font-bold tracking-wider text-accent-foreground glow-red-sm transition hover:brightness-110">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BotLeague — India's Ultimate Robotics Arena" },
      { name: "description", content: "Build. Compete. Rank. The national ecosystem for robotics arena competitions." },
      { property: "og:title", content: "BotLeague — India's Ultimate Robotics Arena" },
      { property: "og:description", content: "Build. Compete. Rank. The national ecosystem for robotics arena competitions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
