import type { ReactNode } from "react";
import { NavbarSkeleton } from "@/components/ui/skeletons/NavbarSkeleton";
import { FooterSkeleton } from "@/components/ui/skeletons/FooterSkeleton";

export function PageShellSkeleton({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavbarSkeleton />
      <main className="pt-24">{children}</main>
      <FooterSkeleton />
    </div>
  );
}
