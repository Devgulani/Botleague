import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, MapPin, Trophy, ChevronDown } from "lucide-react";
import { PageShell, PageHero, Section, SectionTitle } from "@/components/Layout/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — BotLeague" },
      { name: "description", content: "Upcoming, live, and past robotics competitions across India." },
    ],
  }),
  component: EventsPage,
});

const FILTERS = ["All", "Online", "Offline", "Regional", "National", "International"] as const;

const events = [
  { name: "Bengaluru Regionals", city: "Bengaluru", date: "Nov 11, 2025", type: "Regional", status: "Live", prize: "₹5L" },
  { name: "Mumbai Open", city: "Mumbai", date: "Dec 02, 2025", type: "National", status: "Upcoming", prize: "₹12L" },
  { name: "Delhi Robotics Cup", city: "Delhi", date: "Dec 18, 2025", type: "National", status: "Upcoming", prize: "₹10L" },
  { name: "Online Qualifiers", city: "Virtual", date: "Jan 09, 2026", type: "Online", status: "Upcoming", prize: "₹2L" },
  { name: "Chennai Showdown", city: "Chennai", date: "Aug 14, 2025", type: "Regional", status: "Past", prize: "₹4L" },
  { name: "World Bot Series", city: "Tokyo", date: "Mar 22, 2026", type: "International", status: "Upcoming", prize: "$50K" },
  { name: "Hyderabad Clash", city: "Hyderabad", date: "Jul 02, 2025", type: "Offline", status: "Past", prize: "₹3L" },
  { name: "Pan-India Finals", city: "Mumbai", date: "Feb 20, 2026", type: "National", status: "Upcoming", prize: "₹25L" },
];

const faqs = [
  { q: "Who can register for BotLeague events?", a: "Any student or builder aged 10+ with a registered team can compete in age-appropriate categories." },
  { q: "What is the entry fee?", a: "Most regional events are free to enter; nationals carry a small platform fee covering insurance and judging." },
  { q: "How are events judged?", a: "Expert-led panels using standardized rubrics published in our public rulebook before each season." },
  { q: "Are international events live-streamed?", a: "Yes — every national and international round streams on the BotLeague Network." },
];

function EventsPage() {
  const [f, setF] = useState<(typeof FILTERS)[number]>("All");
  const filtered = events.filter((e) => f === "All" || e.type === f);
  const live = filtered.filter((e) => e.status === "Live");
  const upcoming = filtered.filter((e) => e.status === "Upcoming");
  const past = filtered.filter((e) => e.status === "Past");

  return (
    <PageShell>
      <PageHero
        eyebrow="Compete"
        title="Every Event. One Arena."
        subtitle="Live brackets, qualifiers, and championships across the country — pick your battlefield."
      />

      <Section>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide transition ${
                f === x
                  ? "border-accent bg-accent text-accent-foreground glow-red-sm"
                  : "border-hairline bg-surface-1 text-muted-foreground hover:border-foreground/40"
              }`}
            >
              {x}
            </button>
          ))}
        </div>

        {live.length > 0 && (
          <div className="mt-12">
            <SectionTitle eyebrow="On Air" title="Live Now" />
            <CardGrid items={live} live />
          </div>
        )}

        <div className="mt-12">
          <SectionTitle eyebrow="Coming Up" title="Upcoming Competitions" />
          <CardGrid items={upcoming} />
        </div>

        <div className="mt-12">
          <SectionTitle eyebrow="Archive" title="Previous Events" />
          <CardGrid items={past} muted />
        </div>
      </Section>

      <Section className="!py-10">
        <SectionTitle eyebrow="Roadmap" title="Season Timeline" />
        <Timeline />
      </Section>

      <Section>
        <SectionTitle eyebrow="Rewards" title="Prize Pool" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { tier: "Regional", amount: "₹5L+", desc: "Per regional cup, paid to top 8 teams." },
            { tier: "National", amount: "₹50L", desc: "Combined across all national rounds." },
            { tier: "Global", amount: "$100K", desc: "International series + sponsor bonuses." },
          ].map((p, i) => (
            <motion.div
              key={p.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-hairline bg-surface-1 p-6 text-center shadow-[0_24px_60px_-30px_rgba(255,45,45,0.4)]"
            >
              <Trophy className="mx-auto h-8 w-8 text-accent" />
              <div className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">{p.tier}</div>
              <div className="mt-2 font-display text-4xl font-bold">{p.amount}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle eyebrow="Help" title="Frequently Asked" />
        <div className="space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
        </div>
      </Section>
    </PageShell>
  );
}

function CardGrid({ items, live, muted }: { items: typeof events; live?: boolean; muted?: boolean }) {
  if (items.length === 0) return <p className="text-sm text-muted-foreground">No events match this filter.</p>;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((e, i) => (
        <motion.div
          key={e.name + i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ delay: (i % 6) * 0.04 }}
          className={`group rounded-2xl border bg-surface-1 p-5 transition ${
            live ? "border-accent/50 glow-red-sm" : "border-hairline hover:border-accent/40"
          } ${muted ? "opacity-90" : ""}`}
        >
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-surface-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {e.type}
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-wider ${
              live ? "text-accent" : muted ? "text-muted-foreground" : "text-cyan"
            }`}>
              {e.status}
            </span>
          </div>
          <h3 className="mt-4 font-display text-lg font-bold">{e.name}</h3>
          <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5" />{e.date}</div>
            <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5" />{e.city}</div>
            <div className="flex items-center gap-2"><Trophy className="h-3.5 w-3.5 text-accent" />Prize {e.prize}</div>
          </div>
          <button className="mt-5 w-full rounded-md bg-accent py-2 text-xs font-bold tracking-wider text-accent-foreground transition hover:brightness-110">
            {muted ? "VIEW RESULTS" : "REGISTER"}
          </button>
        </motion.div>
      ))}
    </div>
  );
}

function Timeline() {
  const steps = [
    { m: "Sep", t: "Open Registrations" },
    { m: "Oct", t: "Online Qualifiers" },
    { m: "Nov", t: "Regional Cups" },
    { m: "Dec", t: "National Semis" },
    { m: "Feb", t: "Grand Finals" },
    { m: "Mar", t: "International Series" },
  ];
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 h-full w-px bg-hairline md:left-1/2 md:-translate-x-px" />
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <motion.li
            key={s.m}
            initial={{ opacity: 0, x: i % 2 ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative pl-10 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${i % 2 ? "md:rtl" : ""}`}
          >
            <span className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full border-2 border-accent bg-background text-[10px] font-bold text-accent md:left-1/2 md:-translate-x-1/2">
              {i + 1}
            </span>
            <div className={`rounded-xl border border-hairline bg-surface-1 p-4 ${i % 2 ? "md:col-start-2 md:ltr" : ""}`}>
              <div className="text-xs font-bold uppercase tracking-wider text-accent">{s.m}</div>
              <div className="mt-1 font-semibold">{s.t}</div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-hairline bg-surface-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold"
      >
        {q}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180 text-accent" : "text-muted-foreground"}`} />
      </button>
      {open && <p className="px-4 pb-4 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
