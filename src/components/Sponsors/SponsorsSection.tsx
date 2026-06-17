import { Shield } from "lucide-react";

const sponsors = [
  "NIT DELHI",
  "INDIAN BIT",
  "NIT SILCHAR",
  "ROBO COMPANY",
  "IIT BOMBAY",
  "ROBO COMPANY",
];

export function SponsorsSection() {
  return (
    <section className="border-t border-hairline py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">SPONSORS</h2>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {sponsors.map((s, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-hairline bg-surface-2">
                <Shield className="h-6 w-6" strokeWidth={1.4} />
              </div>
              <span className="text-sm font-semibold tracking-wider text-foreground">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
