#!/usr/bin/env node
/**
 * WCAG contrast gate (brief §6a): verifies every approved text/background
 * token pairing meets AA before `astro build` runs. Owner and developer are
 * partly colorblind — contrast is a tested number here, never a judgment call.
 */
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

const tokens = {};
for (const m of css.matchAll(/--color-([a-z]+):\s*#([0-9a-fA-F]{6})/g)) tokens[m[1]] = m[2];

const required = ['cream', 'navy', 'royal', 'amber', 'gold', 'white'];
for (const t of required) {
  if (!tokens[t]) {
    console.error(`Missing token --color-${t} in tokens.css`);
    process.exit(1);
  }
}

const srgb = (hex) =>
  [0, 2, 4]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
const luminance = (hex) => {
  const [r, g, b] = srgb(hex);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// Approved pairings (text on background) — AA normal text, ≥ 4.5:1
const pairs = [
  ['navy', 'cream', 'Navy text on page background'],
  ['white', 'navy', 'White text on dark navy header & footer'],
  ['white', 'royal', 'White text on primary CTA (Royal Navy)'],
  ['white', 'amber', 'White text on secondary button (Golden Amber)'],
  ['royal', 'cream', 'Royal Navy links on page background'],
];

const AA = 4.5;
let failed = false;
console.log('WCAG AA contrast gate (normal text, threshold 4.5:1)\n');
for (const [fg, bg, label] of pairs) {
  const r = ratio(tokens[fg], tokens[bg]);
  if (r < AA) failed = true;
  console.log(
    `  ${r >= AA ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1  ${label} (#${tokens[fg]} on #${tokens[bg]})`
  );
}
console.log(
  `\n  info  ${ratio(tokens.gold, tokens.navy).toFixed(2)}:1  School Gold on Navy header — active accents & badges`
);

if (failed) {
  console.error('Contrast gate FAILED — fix tokens or pairings before shipping.');
  process.exit(1);
}
console.log('Contrast gate passed.');
