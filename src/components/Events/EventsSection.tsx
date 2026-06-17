import { motion } from "motion/react";

const past = ["Bengaluru Regionals", "Bengaluru Regionals", "Bengaluru Regionals"];

export function EventsSection() {
  return (
    <section id="events" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          COMPETITIONS &amp; EVENTS
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {/* Live Now */}
          <Panel>
            <Pill className="text-accent">LIVE NOW</Pill>
            <div className="mt-4 flex items-start justify-between">
              <div>
                <div className="font-semibold">Bengaluru Regionals</div>
                <div className="text-xs text-muted-foreground">Lorem Ipsum</div>
              </div>
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                Ongoing
              </span>
            </div>
            <Bracket />
          </Panel>

          {/* Upcoming */}
          <Panel>
            <Pill>UPCOMING</Pill>
            <EventCard city="Mumbai" />
            <div className="my-4 h-px bg-hairline" />
            <EventCard city="Delhi" />
          </Panel>

          {/* Past Results */}
          <Panel>
            <Pill>PAST RESULTS</Pill>
            <div className="mt-4 space-y-3">
              {past.map((p, i) => (
                <div key={i} className="rounded-lg border border-hairline bg-surface-2/60 p-3.5">
                  <div className="text-sm font-semibold">{p}</div>
                  <div className="text-xs text-muted-foreground">Lorem Ipsum</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </section>
  );
}

function Panel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-hairline bg-surface-1 p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
    >
      {children}
    </motion.div>
  );
}

function Pill({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

function EventCard({ city }: { city: string }) {
  return (
    <div className="mt-4">
      <div className="text-sm font-semibold">Event in {city}</div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
        <Field label="Date" value="11/11/25" />
        <Field label="Location" value="BKC" />
        <Field label="Category" value="Lorem" />
      </div>
      <button className="mt-3 w-full rounded-md bg-accent py-2 text-xs font-bold tracking-wider text-accent-foreground transition hover:brightness-110">
        REGISTER
      </button>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-hairline bg-surface-2/60 px-2 py-1.5">
      <div className="text-[9px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="text-foreground">{value}</div>
    </div>
  );
}

function Bracket() {
  return (
    <svg viewBox="0 0 280 160" className="mt-5 w-full" aria-hidden>
      {[20, 60, 100, 140].map((y) => (
        <rect key={`l${y}`} x="4" y={y} width="60" height="14" rx="2" className="fill-surface-2 stroke-hairline" />
      ))}
      {[40, 120].map((y) => (
        <rect key={`m${y}`} x="110" y={y} width="60" height="14" rx="2" className="fill-surface-2 stroke-hairline" />
      ))}
      <rect x="216" y="80" width="60" height="14" rx="2" className="fill-surface-2 stroke-hairline" />
      {/* connectors */}
      <path d="M64 27 H88 V47 H110 M64 67 H88 V47 M64 107 H88 V127 H110 M64 147 H88 V127" className="stroke-hairline" fill="none" strokeWidth="1" />
      <path d="M170 47 H194 V87 H216 M170 127 H194 V87" className="stroke-hairline" fill="none" strokeWidth="1" />
    </svg>
  );
}
