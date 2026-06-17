import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/Layout/PageShell";
import roborace from "@/assets/disc-roborace.jpg";
import linefollower from "@/assets/disc-linefollower.jpg";
import rcracing from "@/assets/disc-rcracing.jpg";
import drone from "@/assets/disc-drone.jpg";
import hockey from "@/assets/disc-hockey.jpg";
import robowar from "@/assets/disc-robowar.jpg";

export const Route = createFileRoute("/disciplines")({
  head: () => ({ meta: [{ title: "Disciplines — BotLeague" }] }),
  component: DisciplinesPage,
});

const DISC = [
  { img: roborace, title: "Robo Race", desc: "Humanoid sprint over modular obstacle tracks.", tech: ["Gait control", "PID balance", "Computer vision"], careers: ["Robotics engineer", "Mechatronics", "Motion control"] },
  { img: linefollower, title: "Line Follower", desc: "Speed-and-precision pursuit of optical paths.", tech: ["IR sensors", "PID", "PCB design"], careers: ["Embedded engineer", "Firmware", "Hardware design"] },
  { img: rcracing, title: "RC Racing", desc: "High-speed remote vehicles on technical circuits.", tech: ["Brushless drives", "Telemetry", "Aerodynamics"], careers: ["Automotive R&D", "Motorsport eng.", "Telemetry analyst"] },
  { img: drone, title: "FPV Drone Racing", desc: "First-person racing & freestyle aeromodelling.", tech: ["Flight controllers", "Video TX", "Battery science"], careers: ["UAV engineer", "Aerospace", "Computer vision"] },
  { img: hockey, title: "Robo Hockey", desc: "Teams of bots compete in puck-based matches.", tech: ["Multi-agent AI", "Vision", "RF comms"], careers: ["AI engineer", "Game theory", "Control systems"] },
  { img: robowar, title: "Robo War", desc: "Combat bots in armored, weight-class battles.", tech: ["Material science", "Power electronics", "Weaponry"], careers: ["Mech engineer", "Defense R&D", "Industrial design"] },
];

function DisciplinesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Sports"
        title="Six Disciplines. One League."
        subtitle="Each arena tests a different stack of skills — from autonomous navigation to combat engineering."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DISC.map((d, i) => (
            <motion.article
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: (i % 3) * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-hairline bg-surface-1 transition hover:border-accent/40 hover:shadow-[0_24px_60px_-24px_rgba(255,45,45,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={d.img} alt={d.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 font-display text-xl font-bold">{d.title}</div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{d.desc}</p>
                <Tags label="Tech" items={d.tech} accent="cyan" />
                <Tags label="Careers" items={d.careers} accent="gold" />
                <button className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-accent">
                  Learn More <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

function Tags({ label, items, accent }: { label: string; items: string[]; accent: "cyan" | "gold" }) {
  return (
    <div className="mt-4">
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((t) => (
          <span
            key={t}
            className={`rounded-full border px-2 py-0.5 text-[10px] ${
              accent === "cyan" ? "border-cyan/30 text-cyan" : "border-gold/30 text-gold"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
