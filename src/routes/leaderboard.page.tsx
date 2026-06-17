import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Search, ArrowUpDown, Trophy, Medal, Award } from "lucide-react";
import { PageShell, PageHero, Section } from "@/components/Layout/PageShell";

type Row = {
  rank: number;
  team: string;
  college: string;
  points: number;
  wins: number;
  badges: number;
};

const SEED: Omit<Row, "rank">[] = [
  { team: "Apex Circuits", college: "IIT Bombay", points: 508754, wins: 42, badges: 18 },
  { team: "Nimbus Drift", college: "NIT Delhi", points: 482010, wins: 39, badges: 16 },
  { team: "Mecha Vipers", college: "BITS Pilani", points: 460230, wins: 37, badges: 14 },
  { team: "Iron Pulse", college: "NIT Silchar", points: 421877, wins: 35, badges: 13 },
  { team: "Volt Reapers", college: "IIT Madras", points: 405112, wins: 33, badges: 12 },
  { team: "Quantum Forge", college: "VIT Vellore", points: 392088, wins: 31, badges: 11 },
  { team: "Carbon Halo", college: "IIIT Hyderabad", points: 370445, wins: 29, badges: 10 },
  { team: "Astra Tread", college: "DTU Delhi", points: 354112, wins: 28, badges: 9 },
  { team: "Synth Falcons", college: "Manipal IT", points: 342775, wins: 27, badges: 8 },
  { team: "Echo Spark", college: "PES Bangalore", points: 320014, wins: 25, badges: 7 },
  { team: "Helix Bots", college: "IIT Kanpur", points: 308122, wins: 24, badges: 6 },
  { team: "Riftwave", college: "IIT Roorkee", points: 287901, wins: 22, badges: 6 },
  { team: "Tritan Core", college: "NIT Trichy", points: 274556, wins: 21, badges: 5 },
  { team: "Black Aperture", college: "IIIT Bangalore", points: 261203, wins: 19, badges: 5 },
  { team: "Glow Foundry", college: "SRM Chennai", points: 247889, wins: 18, badges: 4 },
];

const PAGE = 8;

export default function LeaderboardPage() {
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<keyof Omit<Row, "team" | "college" | "rank">>("points");
  const [page, setPage] = useState(0);

  const ranked: Row[] = useMemo(() => {
    return [...SEED].sort((a, b) => b.points - a.points).map((r, i) => ({ ...r, rank: i + 1 }));
  }, []);

  const filtered = useMemo(() => {
    const f = ranked.filter((r) => (r.team + r.college).toLowerCase().includes(q.toLowerCase()));
    return f.sort((a, b) => (b[sort] as number) - (a[sort] as number));
  }, [ranked, q, sort]);

  const top3 = ranked.slice(0, 3);
  const rest = filtered.filter((r) => r.rank > 3);
  const pages = Math.max(1, Math.ceil(rest.length / PAGE));
  const slice = rest.slice(page * PAGE, page * PAGE + PAGE);

  return (
    <PageShell>
      <PageHero
        eyebrow="Rankings"
        title="National Leaderboard"
        subtitle="Live standings across every BotLeague event of the season."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-3">
          {top3.map((r, i) => (
            <PodiumCard key={r.team} row={r} place={i} />
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(0);
              }}
              placeholder="Search team or college"
              className="w-full rounded-md border border-hairline bg-surface-1 py-2.5 pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:border-accent/60 focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-1 rounded-md border border-hairline bg-surface-1 p-1 text-xs">
            <ArrowUpDown className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
            {(["points", "wins", "badges"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSort(s)}
                className={`rounded px-3 py-1 font-semibold capitalize ${sort === s ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-hairline">
          <div className="grid grid-cols-[60px_1.6fr_1.4fr_1fr_0.8fr_0.8fr] gap-2 border-b border-hairline bg-surface-2 px-4 py-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            <span>Rank</span>
            <span>Team</span>
            <span>College</span>
            <span>Points</span>
            <span>Wins</span>
            <span>Badges</span>
          </div>
          {slice.map((r, i) => (
            <motion.div
              key={r.team}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              className="grid grid-cols-[60px_1.6fr_1.4fr_1fr_0.8fr_0.8fr] gap-2 border-b border-hairline bg-surface-1 px-4 py-3 text-sm last:border-b-0 hover:bg-surface-2"
            >
              <span className="font-mono text-muted-foreground">#{r.rank}</span>
              <span className="font-semibold">{r.team}</span>
              <span className="text-muted-foreground">{r.college}</span>
              <span className="tabular-nums">{r.points.toLocaleString()}</span>
              <span className="tabular-nums">{r.wins}</span>
              <span className="tabular-nums">{r.badges}</span>
            </motion.div>
          ))}
          {slice.length === 0 && (
            <div className="bg-surface-1 p-8 text-center text-sm text-muted-foreground">
              No teams match.
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            Page {page + 1} of {pages}
          </span>
          <div className="flex gap-2">
            <button
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
              className="rounded border border-hairline bg-surface-1 px-3 py-1.5 font-semibold disabled:opacity-40"
            >
              Prev
            </button>
            <button
              disabled={page >= pages - 1}
              onClick={() => setPage((p) => p + 1)}
              className="rounded border border-hairline bg-surface-1 px-3 py-1.5 font-semibold disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

function PodiumCard({ row, place }: { row: Row; place: number }) {
  const accents = [
    {
      ring: "border-gold/60",
      glow: "shadow-[0_30px_80px_-30px_rgba(245,196,81,0.55)]",
      icon: Trophy,
      color: "text-gold",
      label: "1ST",
    },
    {
      ring: "border-cyan/50",
      glow: "shadow-[0_30px_80px_-30px_rgba(42,215,255,0.45)]",
      icon: Medal,
      color: "text-cyan",
      label: "2ND",
    },
    {
      ring: "border-accent/50",
      glow: "shadow-[0_30px_80px_-30px_rgba(255,45,45,0.45)]",
      icon: Award,
      color: "text-accent",
      label: "3RD",
    },
  ][place];
  const Icon = accents.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ delay: place * 0.08 }}
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-b from-surface-1 to-background p-6 ${accents.ring} ${accents.glow}`}
    >
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${
          place === 0 ? "bg-gold/30" : place === 1 ? "bg-cyan/25" : "bg-accent/25"
        }`}
      />
      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold uppercase tracking-[0.25em] ${accents.color}`}>
          {accents.label}
        </span>
        <Icon className={`h-6 w-6 ${accents.color}`} />
      </div>
      <div className="mt-6 font-display text-2xl font-bold">{row.team}</div>
      <div className="text-xs text-muted-foreground">{row.college}</div>
      <div className="mt-5 font-display text-4xl font-bold tabular-nums">
        {row.points.toLocaleString()}
      </div>
      <div className="mt-3 flex gap-4 text-xs text-muted-foreground">
        <span>{row.wins} wins</span>
        <span>{row.badges} badges</span>
      </div>
    </motion.div>
  );
}
