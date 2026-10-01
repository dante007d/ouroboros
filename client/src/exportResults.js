// Build a CSV of every soul in rank order and hand it to the browser as a
// download. Opens directly in Excel, Numbers or Google Sheets.

const COLUMNS = [
  ['Rank', (p, i) => i + 1],
  ['Name', p => p.name],
  ['Year', p => p.year ?? ''],
  ['Level Reached', p => p.maxLv],
  ['Riddles Solved', p => p.solved ?? 0],
  ['Time To Level (s)', p => Number(p.time || 0).toFixed(3)],
  ['Fails', p => p.fails ?? 0],
  ['Hints Used', p => p.hintsUsed ?? 0],
  ['Checkpoints', p => p.cps ?? 0],
  ['Cheat Strikes', p => p.cheats ?? 0],
  ['Status', p => p.status],
  ['Connected At Export', p => (p.online ? 'YES' : 'NO')],
];

const cell = (v) => {
  let s = String(v ?? '');
  // Stop a name like "=HYPERLINK(...)" from running as a spreadsheet formula
  if (/^[=+\-@\t\r]/.test(s)) s = `'${s}`;
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function downloadResults(players) {
  const rows = [COLUMNS.map(([h]) => h).join(',')];
  players.forEach((p, i) => rows.push(COLUMNS.map(([, get]) => cell(get(p, i))).join(',')));
  // BOM so Excel reads names in UTF-8 correctly
  const blob = new Blob(['﻿' + rows.join('\r\n')], { type: 'text/csv;charset=utf-8' });
  const stamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, '-');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `ouroboros-results-${stamp}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
