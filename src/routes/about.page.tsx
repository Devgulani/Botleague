import { motion } from "motion/react";
import { Target, Eye, BookOpen, Users } from "lucide-react";
import { PageShell, PageHero, Section, SectionTitle } from "@/components/Layout/PageShell";

const stats = [
  { n: "12K+", l: "Athletes" },
  { n: "240", l: "Colleges" },
  { n: "₹50L", l: "Prize Pool" },
  { n: "30", l: "Cities" },
];

const team = [
  { name: "Aarav Mehta", role: "Founder & CEO" },
  { name: "Riya Kapoor", role: "Head of Operations" },
  { name: "Devansh Iyer", role: "Tech Director" },
  { name: "Sana Khan", role: "Community Lead" },
];

const timeline = [
  { y: "2022", t: "BotLeague founded with 3 cities" },
  { y: "2023", t: "First national finals broadcast" },
  { y: "2024", t: "12 colleges become league partners" },
  { y: "2025", t: "Crossed 10,000 registered athletes" },
  { y: "2026", t: "International series launches" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="Building India's Robotics Era."
        subtitle="We're a national league turning passion projects into professional pathways."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            icon={Target}
            title="Mission"
            body="Create a structured, standardized, world-class competitive robotics ecosystem for every Indian builder."
          />
          <Card
            icon={Eye}
            title="Vision"
            body="A future where engineering talent is discovered in the arena and recruited into industry."
          />
        </div>

        <div className="mt-14">
          <SectionTitle eyebrow="By The Numbers" title="Impact So Far" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-hairline bg-surface-1 p-6 text-center transition hover:border-accent/40"
              >
                <div className="font-display text-4xl font-bold text-accent">{s.n}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SectionTitle eyebrow="Journey" title="Our Timeline" />
          <div className="relative">
            <div className="absolute left-3 top-0 h-full w-px bg-hairline md:left-1/2 md:-translate-x-px" />
            <ol className="space-y-6">
              {timeline.map((s, i) => (
                <motion.li
                  key={s.y}
                  initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0`}
                >
                  <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-background text-[10px] font-bold text-accent md:left-1/2 md:-translate-x-1/2">
                    ●
                  </span>
                  <div
                    className={`rounded-xl border border-hairline bg-surface-1 p-4 ${i % 2 ? "md:col-start-2" : ""}`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-accent">
                      {s.y}
                    </div>
                    <div className="mt-1 text-sm font-semibold">{s.t}</div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14">
          <SectionTitle eyebrow="The People" title="Meet The Team" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-hairline bg-surface-1 p-5 text-center transition hover:border-accent/40"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-accent/30 to-cyan/20 font-display text-2xl font-bold">
                  {m.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </div>
                <div className="mt-4 font-display text-base font-bold">{m.name}</div>
                <div className="text-xs text-muted-foreground">{m.role}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Card
            icon={BookOpen}
            title="Open Rulebook"
            body="Every category is judged by published rubrics — transparency by default."
          />
          <Card
            icon={Users}
            title="Community Impact"
            body="40+ student-run clubs activated; 200+ mentorships matched per season."
          />
        </div>
      </Section>
    </PageShell>
  );
}

function Card({ icon: Icon, title, body }: { icon: typeof Target; title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-hairline bg-surface-1 p-6 transition hover:border-accent/40"
    >
      <div className="grid h-10 w-10 place-items-center rounded-md bg-accent/15 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </motion.div>
  );
}
