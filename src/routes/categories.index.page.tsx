import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Boxes, Lightbulb, UserCog, Bitcoin, ArrowRight } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/Layout/PageShell";

export const CATEGORIES = [
  {
    slug: "mini-makers",
    icon: Boxes,
    title: "Mini Makers",
    blurb: "Where creativity meets logic.",
    difficulty: "Beginner",
    eligibility: "Ages 10–13",
    rules: ["Teams of 2–4 builders", "Pre-built kits allowed", "30-minute timed runs"],
  },
  {
    slug: "junior-innovators",
    icon: Lightbulb,
    title: "Junior Innovators",
    blurb: "Engineering & strategy fundamentals.",
    difficulty: "Intermediate",
    eligibility: "Ages 14–16",
    rules: ["Original chassis required", "Open electronics", "60-minute matches"],
  },
  {
    slug: "young-engineers",
    icon: UserCog,
    title: "Young Engineers",
    blurb: "Advanced wireless & autonomous control.",
    difficulty: "Advanced",
    eligibility: "Ages 17–21",
    rules: ["Autonomous round mandatory", "Sensor fusion encouraged", "Best-of-3 finals"],
  },
  {
    slug: "robo-minds",
    icon: Bitcoin,
    title: "Robo Minds",
    blurb: "Elite professional sports & robotics.",
    difficulty: "Pro",
    eligibility: "21+ / Pro teams",
    rules: ["Custom hardware", "Power class up to 1.5kW", "Single-elim bracket"],
  },
];

export default function CategoriesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Compete by tier"
        title="Pick Your Category."
        subtitle="Four tiers, four arenas — engineered for every builder, from first solder to championship class."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.06 }}
              className="group relative flex flex-col rounded-2xl border border-hairline bg-surface-1 p-5 transition hover:border-accent/40 hover:shadow-[0_22px_60px_-22px_rgba(255,45,45,0.4)]"
            >
              <div className="aspect-[5/3] overflow-hidden rounded-xl bg-gradient-to-br from-accent/20 via-surface-2 to-cyan/10">
                <div className="flex h-full items-center justify-center">
                  <c.icon
                    className="h-14 w-14 text-gold transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.2}
                  />
                </div>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{c.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
                <Stat label="Difficulty" value={c.difficulty} />
                <Stat label="Eligibility" value={c.eligibility} />
              </div>
              <Link
                to="/categories/$slug"
                params={{ slug: c.slug }}
                className="mt-5 inline-flex items-center justify-center gap-1 rounded-md bg-accent py-2 text-xs font-bold tracking-wider text-accent-foreground transition hover:brightness-110"
              >
                EXPLORE <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-hairline bg-surface-2 px-2 py-1.5">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}
