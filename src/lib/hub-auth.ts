const DB_KEY = "dmg_hub_users";
const SESSION_KEY = "dmg_hub_session";

export function getUsers() {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(DB_KEY) || "{}"); } catch { return {}; }
}

export function saveUsers(users: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(DB_KEY, JSON.stringify(users));
}

export function getSession() {
  if (typeof window === "undefined") return null;
  try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); } catch { return null; }
}

export function saveSession(user: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
}

export function clearSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}
