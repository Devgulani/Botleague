import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/Layout/PageShell";
import { Route } from "./categories.$slug";

export default function CategoryDetail() {
  const { cat } = Route.useLoaderData();
  const Icon = cat.icon;
  return (
    <PageShell>
      <PageHero
        eyebrow={cat.difficulty + " · " + cat.eligibility}
        title={cat.title}
        subtitle={cat.blurb}
      >
        <Link
          to="/categories"
          className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> All categories
        </Link>
      </PageHero>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-square overflow-hidden rounded-2xl border border-hairline bg-gradient-to-br from-accent/15 via-surface-1 to-cyan/10"
          >
            <div className="flex h-full items-center justify-center">
              <Icon className="h-40 w-40 text-gold" strokeWidth={1} />
            </div>
          </motion.div>
          <div>
            <h2 className="font-display text-2xl font-bold">Official Rules</h2>
            <ul id="dummy" className="mt-4 space-y-3">
              {cat.rules.map((r: string) => (
                <li
                  key={r}
                  className="flex items-start gap-3 rounded-xl border border-hairline bg-surface-1 p-4 text-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => {}}
              className="mt-6 rounded-md bg-accent px-6 py-3 text-xs font-bold tracking-wider text-accent-foreground glow-red-sm transition hover:brightness-110"
            >
              REGISTER FOR {cat.title.toUpperCase()}
            </button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
