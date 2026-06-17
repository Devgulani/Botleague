import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="pt-24"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_0%,rgba(255,45,45,0.15),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_40%,rgba(42,215,255,0.08),transparent_50%)]" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-accent"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base"
          >
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`mx-auto max-w-7xl px-5 py-16 lg:px-8 md:py-24 ${className}`}>
      {children}
    </section>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="mb-10">
      {eyebrow && <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">{eyebrow}</div>}
      <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
    </div>
  );
}
