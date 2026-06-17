const KEY = "botleague_session";

export type Session =
  | { kind: "guest"; name: "Guest User" }
  | { kind: "user"; name: string; email: string };

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

export function setGuestSession() {
  localStorage.setItem(KEY, JSON.stringify({ kind: "guest", name: "Guest User" }));
  window.dispatchEvent(new Event("botleague:session"));
}

export function setUserSession(name: string, email: string) {
  localStorage.setItem(KEY, JSON.stringify({ kind: "user", name, email }));
  window.dispatchEvent(new Event("botleague:session"));
}

export function clearSession() {
  localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("botleague:session"));
}
