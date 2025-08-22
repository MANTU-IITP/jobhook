export function getUser() {
  try { return JSON.parse(localStorage.getItem('jp_user')); } catch { return null; }
}
export function setUser(user) { localStorage.setItem('jp_user', JSON.stringify(user)); }
export function clearUser() { localStorage.removeItem('jp_user'); }
