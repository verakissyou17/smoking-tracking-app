const KEY = 'entries';

export function loadEntries() {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveEntries(data) {
  localStorage.setItem(KEY, JSON.stringify(data));
}
