import { motion } from "motion/react";
import { ShieldCheck, Gavel, Briefcase, Zap, Trophy, User } from "lucide-react";

const rows = [
  { icon: ShieldCheck, title: "NATIONAL RECOGNITION", desc: "" },
  { icon: Gavel, title: "FAIR JUDGING", desc: "" },
  { icon: Briefcase, title: "CAREER OPS", desc: "“Bridge the gap between arena victories and top-tier tech placements.”" },
  { icon: Zap, title: "HIGH - ENERGY ECO", desc: "“Join a nationwide community of elite innovators and robotics athletes.”" },
];

const board = [
  { rank: "01", name: "Player Name", score: 22000, color: "cyan" },
  { rank: "03", name: "Player Name", score: 20030, color: "cyan" },
  { rank: "04", name: "Player Name", score: 19500, color: "cyan" },
  { rank: "05", name: "Player Name", score: 15060, color: "cyan" },
  { rank: "06", name: "Player Name", score: 13865, color: "cyan" },
  { rank: "07", name: "Player Name", score: 10954, color: "cyan" },
  { rank: "08", name: "Player Name", score: 9057, color: "cyan" },
];

export function AdvantageSection() {
  return (
    <section id="rankings" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Why Register ?</div>
        <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
          THE LEAGUE ADVANTAGE
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-8">
            {rows.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
                  <r.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-base font-bold tracking-wide">{r.title}</div>
                  {r.desc && <p className="mt-1 text-xs text-muted-foreground">{r.desc}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-hairline bg-gradient-to-b from-surface-1 to-background p-5 shadow-[0_30px_80px_-30px_rgba(42,215,255,0.25)]"
          >
            <div className="absolute -inset-px -z-10 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(42,215,255,0.18),transparent_60%)]" />
            <div className="text-center font-display text-sm font-bold tracking-[0.3em] text-foreground">
              LEADERBOARD
            </div>

            {/* Top entry */}
            <div className="mt-5 rounded-xl border border-gold/40 bg-gradient-to-r from-gold/15 to-transparent p-3">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-md bg-gold/20 text-gold">
                  <Trophy className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-wider text-gold">#01 · Player Name</div>
                  <div className="font-display text-2xl font-bold tabular-nums">508754</div>
                </div>
              </div>
            </div>

            <div className="mt-3 space-y-1.5">
              {board.map((b, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-md border border-hairline bg-surface-2/40 px-3 py-1.5 text-xs"
                >
                  <span className="w-6 font-mono text-muted-foreground">{b.rank}</span>
                  <span className="grid h-5 w-5 place-items-center rounded-sm bg-cyan/15 text-cyan">
                    <User className="h-3 w-3" />
                  </span>
                  <span className="flex-1 text-foreground">{b.name}</span>
                  <span className="font-mono tabular-nums text-muted-foreground">{b.score}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
