import type { CSSProperties } from "react";

const C = 300;
const R = 196;
const MOTIFS = 8;

const pt = (r: number, a: number) => [C + r * Math.cos(a), C + r * Math.sin(a)] as const;
const deg = (a: number) => (a * 180) / Math.PI;
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function spiral(cx: number, cy: number, r0: number, start: number, dir: 1 | -1) {
  let d = "";
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    const r = r0 * (1 - 0.82 * t);
    const a = start + dir * t * 1.7 * 2 * Math.PI;
    d += `${i ? "L" : "M"}${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)}`;
  }
  return d;
}

export const LEAF = "M0 0 C9 -10 10 -26 0 -38 C-10 -26 -9 -10 0 0Z";

export function Berry({ x, y, r = 9, d = 0 }: { x: number; y: number; r?: number; d?: number }) {
  return (
    <g className="pop" style={delay(d)}>
      <circle cx={x} cy={y} r={r} fill="var(--cinnabar)" stroke="#5a0d08" strokeWidth={1.2} />
      <circle cx={x - r * 0.35} cy={y - r * 0.35} r={r * 0.22} fill="var(--gold-hi)" />
    </g>
  );
}

function Motif({ i }: { i: number }) {
  const a = (i / MOTIFS) * 2 * Math.PI - Math.PI / 2;
  const d = 0.6 + i * 0.12;
  const leaves = [
    { a: a - 0.2, rot: deg(a) + 90 - 35, r: R + 2 },
    { a: a + 0.2, rot: deg(a) + 90 + 35, r: R + 2 },
    { a: a - 0.17, rot: deg(a) - 90 + 40, r: R - 2 },
    { a: a + 0.17, rot: deg(a) - 90 - 40, r: R - 2 },
  ];
  const berries = [
    pt(R + 13, a),
    pt(R - 1, a - 0.065),
    pt(R - 1, a + 0.065),
    pt(R - 15, a),
  ];
  const mid = a + Math.PI / MOTIFS;
  const [ox, oy] = pt(R + 20, mid);
  const [ix, iy] = pt(R - 20, mid);
  return (
    <g>
      <path className="draw" style={delay(d)} pathLength={1} d={spiral(ox, oy, 20, mid + Math.PI, 1)} />
      <path className="draw" style={delay(d + 0.1)} pathLength={1} d={spiral(ix, iy, 20, mid, -1)} />
      {leaves.map((l, k) => {
        const [x, y] = pt(l.r, l.a);
        return (
          <g key={k} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${l.rot.toFixed(1)})`}>
            <path className="pop leaf" style={delay(d + 0.5 + k * 0.05)} d={LEAF} />
          </g>
        );
      })}
      {berries.map(([x, y], k) => (
        <Berry key={k} x={x} y={y} d={d + 0.8 + k * 0.06} />
      ))}
    </g>
  );
}

export function KhokhlomaPlate() {
  const dots = Array.from({ length: 72 }, (_, i) => pt(267, (i / 72) * 2 * Math.PI));
  return (
    <svg viewBox="0 0 600 600" className="plate-art" aria-hidden="true">
      <defs>
        <radialGradient id="kh-gold" cx="35%" cy="30%" r="80%">
          <stop offset="0" stopColor="#ffe39a" />
          <stop offset="0.45" stopColor="#d9a23a" />
          <stop offset="1" stopColor="#7a4c0e" />
        </radialGradient>
        <radialGradient id="kh-lacquer" cx="40%" cy="35%" r="75%">
          <stop offset="0" stopColor="#2a1f16" />
          <stop offset="1" stopColor="#0b0806" />
        </radialGradient>
      </defs>
      <circle cx={C} cy={C} r={294} fill="url(#kh-gold)" />
      <circle cx={C} cy={C} r={281} fill="url(#kh-lacquer)" />
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.6} fill="var(--gold)" />
      ))}
      <circle cx={C} cy={C} r={254} fill="none" stroke="var(--cinnabar)" strokeWidth={3} />
      <g className="travka">
        <circle className="draw" style={delay(0.2)} pathLength={1} cx={C} cy={C} r={R} transform={`rotate(-90 ${C} ${C})`} />
        {Array.from({ length: MOTIFS }, (_, i) => (
          <Motif key={i} i={i} />
        ))}
      </g>
    </svg>
  );
}

export function TravkaDivider() {
  return (
    <svg viewBox="0 0 320 60" className="travka-divider" aria-hidden="true">
      <g className="travka">
        <path d="M10 30 C60 5 100 55 160 30 S260 5 310 30" />
        <path d={spiral(70, 14, 10, Math.PI / 2, 1)} />
        <path d={spiral(250, 46, 10, -Math.PI / 2, -1)} />
      </g>
      <g transform="translate(130 26) rotate(-60)"><path className="leaf" d={LEAF} transform="scale(.6)" /></g>
      <g transform="translate(190 34) rotate(120)"><path className="leaf" d={LEAF} transform="scale(.6)" /></g>
      <Berry x={152} y={24} r={7} />
      <Berry x={166} y={24} r={7} />
      <Berry x={159} y={36} r={7} />
    </svg>
  );
}
