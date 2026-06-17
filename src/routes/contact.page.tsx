import { useState } from "react";
import { motion } from "motion/react";
import { z } from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageShell, PageHero, Section, SectionTitle } from "@/components/Layout/PageShell";

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  subject: z.string().trim().min(2, "Subject required").max(120),
  message: z.string().trim().min(10, "Message too short").max(1000),
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const set =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <PageShell>
      <PageHero
        eyebrow="Get In Touch"
        title="Talk To The League."
        subtitle="Press, partnerships, support — we read everything."
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <InfoCard
              icon={Mail}
              label="Email"
              value="hello@botleague.in"
              href="mailto:hello@botleague.in"
            />
            <InfoCard
              icon={Phone}
              label="Phone"
              value="+91 80 4567 8901"
              href="tel:+918045678901"
            />
            <InfoCard icon={MapPin} label="HQ" value="Indiranagar, Bengaluru, India" />
            <div className="aspect-video overflow-hidden rounded-2xl border border-hairline bg-surface-1">
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_50%,rgba(255,45,45,0.18),transparent_60%)] text-xs text-muted-foreground">
                Google Map Placeholder
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-hairline bg-surface-1 p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input
                  value={form.name}
                  onChange={set("name")}
                  maxLength={80}
                  className={input}
                  placeholder="Ada Lovelace"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  value={form.email}
                  onChange={set("email")}
                  maxLength={160}
                  className={input}
                  placeholder="you@arena.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Subject" error={errors.subject}>
                <input
                  value={form.subject}
                  onChange={set("subject")}
                  maxLength={120}
                  className={input}
                  placeholder="What's this about?"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Message" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  maxLength={1000}
                  rows={6}
                  className={`${input} resize-none`}
                  placeholder="Tell us more..."
                />
              </Field>
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-xs font-bold tracking-wider text-accent-foreground glow-red-sm transition hover:brightness-110"
            >
              <Send className="h-3.5 w-3.5" /> {sent ? "MESSAGE SENT" : "SEND MESSAGE"}
            </button>
            {sent && (
              <p className="mt-3 text-xs text-cyan">Thanks — we'll reply within 48 hours.</p>
            )}
          </motion.form>
        </div>

        <div className="mt-14">
          <SectionTitle eyebrow="Quick Answers" title="FAQs" />
          <div className="grid gap-3 md:grid-cols-2">
            {[
              ["Where do I report a bug?", "Email hello@botleague.in with the steps."],
              ["How do I become a judge?", "Apply on the Ecosystem page under Mentors."],
              ["Are events insured?", "Yes — all national events carry team insurance."],
              ["Can I host a regional?", "Yes — colleges can apply via the Ecosystem page."],
            ].map(([q, a]) => (
              <div
                key={q}
                className="rounded-xl border border-hairline bg-surface-1 p-4 transition hover:border-accent/40"
              >
                <div className="font-semibold">{q}</div>
                <p className="mt-1 text-sm text-muted-foreground">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}

const input =
  "w-full rounded-md border border-hairline bg-surface-2 px-3 py-2.5 text-sm placeholder:text-muted-foreground/70 focus:border-accent/60 focus:outline-none";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-accent">{error}</span>}
    </label>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  href: link,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const valCls = link
    ? "text-sm font-semibold text-accent hover:underline"
    : "text-sm font-semibold";
  const card = (
    <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface-1 p-5 transition hover:border-accent/40">
      <div className="grid h-10 w-10 place-items-center rounded-md bg-accent/15 text-accent">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className={valCls}>{value}</div>
      </div>
    </div>
  );
  if (link)
    return (
      <a href={link} className="block">
        {card}
      </a>
    );
  return card;
}
