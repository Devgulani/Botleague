import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Eye, EyeOff, ArrowRight, Code as Github, Globe as Chrome } from "lucide-react";
import { AuthShell, inputCls } from "@/components/Auth/AuthShell";
import { setGuestSession, setUserSession } from "@/lib/guest";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Login — BotLeague" }] }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setUserSession(email.split("@")[0] || "Player", email);
    navigate({ to: "/" });
  };

  const onGuest = () => {
    setGuestSession();
    navigate({ to: "/" });
  };

  return (
    <AuthShell
      title="Welcome back."
      subtitle="Step back into the arena."
      footer={<>New here? <Link to="/signup" className="font-semibold text-accent">Create an account</Link></>}
    >
      <form onSubmit={onSubmit} className="space-y-4">
        <Field label="Email">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@arena.com" className={inputCls} required />
        </Field>
        <Field label="Password">
          <div className="relative">
            <input value={pwd} onChange={(e) => setPwd(e.target.value)} type={show ? "text" : "password"} placeholder="••••••••" className={inputCls + " pr-10"} required />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </Field>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-muted-foreground">
            <input type="checkbox" className="accent-[--color-accent]" /> Remember me
          </label>
          <Link to="/forgot-password" className="font-semibold text-accent">Forgot?</Link>
        </div>

        <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
          type="submit"
          className="w-full rounded-md bg-accent py-2.5 text-xs font-bold tracking-wider text-accent-foreground glow-red-sm transition hover:brightness-110"
        >
          LOG IN
        </motion.button>

        <Divider />

        <div className="grid grid-cols-2 gap-3">
          <SocialBtn icon={Chrome} label="Google" />
          <SocialBtn icon={Github} label="GitHub" />
        </div>

        <button
          type="button"
          onClick={onGuest}
          className="group mt-2 flex w-full items-center justify-center gap-2 rounded-md border-2 border-dashed border-foreground/30 bg-transparent py-3 text-sm font-bold tracking-wide text-foreground transition hover:border-accent hover:bg-accent/10 hover:text-accent"
        >
          Skip Sign In → Continue as Guest
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </button>
      </form>
    </AuthShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Divider() {
  return (
    <div className="my-2 flex items-center gap-3 text-[10px] uppercase tracking-wider text-muted-foreground">
      <span className="h-px flex-1 bg-hairline" /> or <span className="h-px flex-1 bg-hairline" />
    </div>
  );
}

function SocialBtn({ icon: Icon, label }: { icon: typeof Chrome; label: string }) {
  return (
    <button type="button" className="flex items-center justify-center gap-2 rounded-md border border-hairline bg-surface-2 py-2.5 text-xs font-semibold hover:border-foreground/40">
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}
