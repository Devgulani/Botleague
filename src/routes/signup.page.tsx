import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Code as Github, Globe as Chrome } from "lucide-react";
import { AuthShell, inputCls } from "@/components/Auth/AuthShell";
import { setGuestSession, setUserSession } from "@/lib/guest";

export default function SignupPage() {
  const [f, setF] = useState({ name: "", email: "", pwd: "", cpwd: "", org: "", terms: false });
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name || !f.email) return setErr("Name and email required.");
    if (f.pwd.length < 8) return setErr("Password must be at least 8 characters.");
    if (f.pwd !== f.cpwd) return setErr("Passwords don't match.");
    if (!f.terms) return setErr("Please accept the terms.");
    setUserSession(f.name, f.email);
    navigate({ to: "/" });
  };

  const onGuest = () => {
    setGuestSession();
    navigate({ to: "/" });
  };
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setF((p) => ({ ...p, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  return (
    <AuthShell
      title="Join the league."
      subtitle="Build your profile in under a minute."
      footer={
        <>
          Already in?{" "}
          <Link to="/login" className="font-semibold text-accent">
            Log in
          </Link>
        </>
      }
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Full Name">
          <input
            value={f.name}
            onChange={set("name")}
            className={inputCls}
            placeholder="Ada Lovelace"
            required
          />
        </Field>
        <Field label="Email">
          <input
            value={f.email}
            onChange={set("email")}
            type="email"
            className={inputCls}
            placeholder="you@arena.com"
            required
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Password">
            <input
              value={f.pwd}
              onChange={set("pwd")}
              type="password"
              className={inputCls}
              placeholder="••••••••"
              required
            />
          </Field>
          <Field label="Confirm">
            <input
              value={f.cpwd}
              onChange={set("cpwd")}
              type="password"
              className={inputCls}
              placeholder="••••••••"
              required
            />
          </Field>
        </div>
        <Field label="College / Organization">
          <input
            value={f.org}
            onChange={set("org")}
            className={inputCls}
            placeholder="IIT Bombay"
          />
        </Field>

        <label className="flex items-start gap-2 text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={f.terms}
            onChange={set("terms")}
            className="mt-0.5 accent-[--color-accent]"
          />
          <span>
            I agree to the <a className="text-accent cursor-pointer hover:underline">Terms</a> and{" "}
            <a className="text-accent cursor-pointer hover:underline">Privacy Policy</a>.
          </span>
        </label>

        {err && <p className="text-xs text-accent">{err}</p>}

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full rounded-md bg-accent py-2.5 text-xs font-bold tracking-wider text-accent-foreground glow-red-sm transition hover:brightness-110"
        >
          CREATE ACCOUNT
        </motion.button>

        <div className="my-2 flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
          <span className="h-px flex-1 bg-hairline" /> or{" "}
          <span className="h-px flex-1 bg-hairline" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SocialBtn icon={Chrome} label="Google" />
          <SocialBtn icon={Github} label="GitHub" />
        </div>

        <button
          type="button"
          onClick={onGuest}
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-md border-2 border-dashed border-foreground/30 py-3 text-sm font-bold tracking-wide transition hover:border-accent hover:bg-accent/10 hover:text-accent"
        >
          Skip Sign Up → Continue as Guest
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </form>
    </AuthShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function SocialBtn({ icon: Icon, label }: { icon: typeof Chrome; label: string }) {
  return (
    <button
      type="button"
      aria-label={`Sign up with ${label}`}
      className="flex items-center justify-center gap-2 rounded-md border border-hairline bg-surface-2 py-2.5 text-xs font-semibold transition hover:border-accent/60 hover:text-accent"
    >
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}
