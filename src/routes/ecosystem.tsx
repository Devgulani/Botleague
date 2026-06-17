import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { GraduationCap, UserCog, Landmark, Building2, Rocket, Users, ArrowRight } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/Layout/PageShell";

export const Route = createFileRoute("/ecosystem")({
  head: () => ({ meta: [{ title: "Ecosystem — BotLeague" }] }),
  component: EcosystemPage,
});

const groups = [
  { icon: GraduationCap, title: "Students", desc: "Compete, learn, and build your robotics portfolio.", cta: "Join as Student" },
  { icon: UserCog, title: "Mentors", desc: "Coach the next generation of engineers.", cta: "Become a Mentor" },
  { icon: Landmark, title: "Colleges", desc: "Host regional events and earn institutional badges.", cta: "Partner College" },
  { icon: Building2, title: "Companies", desc: "Recruit verified talent from the arena.", cta: "Hire Talent" },
  { icon: Rocket, title: "Startups", desc: "Source hardware founders and prototype teams.", cta: "Connect Now" },
  { icon: Users, title: "Communities", desc: "Bring your maker collective into the league.", cta: "Affiliate Us" },
];

function EcosystemPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Network"
        title="Built By An Ecosystem."
        subtitle="Students, mentors, colleges, companies, startups, and community builders — all on one rail."
      />
      <Section>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              transition={{ delay: (i % 3) * 0.06 }}
              className="group rounded-2xl border border-hairline bg-surface-1 p-6 transition hover:border-accent/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15 text-accent">
                <g.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              <button className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                {g.cta} <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
