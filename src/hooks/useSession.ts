import { useEffect, useState } from "react";
import { getSession, type Session } from "@/lib/guest";

export function useSession(): Session | null {
  const [s, setS] = useState<Session | null>(null);
  useEffect(() => {
    setS(getSession());
    const handler = () => setS(getSession());
    window.addEventListener("botleague:session", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("botleague:session", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);
  return s;
}
