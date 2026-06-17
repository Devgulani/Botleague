import { motion } from "motion/react";
import { Shield } from "lucide-react";
import { PageShell, PageHero, Section, SectionTitle } from "@/components/Layout/PageShell";

const tiers = [
  {
    tier: "Platinum",
    color: "text-gold",
    border: "border-gold/40",
    names: ["RoboCorp", "NimbusAI"],
  },
  {
    tier: "Gold",
    color: "text-cyan",
    border: "border-cyan/40",
    names: ["IIT Bombay", "Indian BIT", "NIT Delhi"],
  },
  {
    tier: "Silver",
    color: "text-muted-foreground",
    border: "border-hairline",
    names: ["NIT Silchar", "Robo Company", "MotorWorks", "VoltLabs"],
  },
  {
    tier: "Community",
    color: "text-accent",
    border: "border-accent/40",
    names: ["MakerHub", "BotForge", "GearStack", "OpenArena", "Solder.io"],
  },
];

export default function SponsorsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Backed By"
        title="Our Sponsors."
        subtitle="The institutions, brands, and builders powering the national robotics league."
      />
      <Section>
        {tiers.map((t, i) => (
          <div key={t.tier} className={i ? "mt-14" : ""}>
            <SectionTitle eyebrow={t.tier + " Tier"} title={t.tier + " Sponsors"} />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {t.names.map((n, j) => (
                <motion.div
                  key={n + j}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, rotate: -0.5 }}
                  transition={{ delay: j * 0.05 }}
                  className={`flex flex-col items-center gap-3 rounded-2xl border bg-surface-1 p-6 text-center transition hover:bg-surface-2 ${t.border}`}
                >
                  <motion.div
                    animate={{ rotate: [0, 8, 0, -8, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: j * 0.2,
                    }}
                  >
                    <Shield className={`h-10 w-10 ${t.color}`} strokeWidth={1.4} />
                  </motion.div>
                  <span className="text-sm font-semibold tracking-wide">{n}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/20 via-surface-1 to-background p-10 text-center glow-red-sm"
        >
          <h3 className="font-display text-3xl font-bold md:text-4xl">Become a Sponsor</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Put your brand at the center of India's fastest-growing robotics movement.
          </p>
          <button
            onClick={() => {}}
            className="mt-6 rounded-md bg-accent px-6 py-3 text-xs font-bold tracking-wider text-accent-foreground transition hover:brightness-110"
          >
            REQUEST SPONSORSHIP DECK
          </button>
        </motion.div>
      </Section>
    </PageShell>
  );
}
