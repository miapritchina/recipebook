import type { CSSProperties } from "react";

const N = 13;
const MID = (N - 1) / 2;
const GAP = 21;
const BASE = 262;
const SPREAD = 5.5;

const slices = Array.from({ length: N }, (_, i) => {
  const k = (i - MID) / (MID + 1.2);
  return { x: 300 + (i - MID) * GAP, h: 150 * Math.sqrt(1 - k * k), a: (i - MID) * SPREAD };
});

const style = (vars: Record<string, string>) => vars as CSSProperties;

export function GarmoshkaPotato() {
  return (
    <svg viewBox="0 40 600 260" className="garmoshka" aria-hidden="true">
      <defs>
        <linearGradient id="hb-slice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a8571a" />
          <stop offset="0.12" stopColor="#e2a43c" />
          <stop offset="0.45" stopColor="#f7d77e" />
          <stop offset="1" stopColor="#f2c661" />
        </linearGradient>
      </defs>
      <ellipse cx="300" cy={BASE + 8} rx="210" ry="14" fill="rgba(0,0,0,.12)" />
      {slices.slice(0, -1).map((s, i) => {
        const n = slices[i + 1];
        const a = (s.a + n.a) / 2;
        const h = Math.min(s.h, n.h);
        const cx = (s.x + n.x) / 2;
        const bacon = i % 2 === 0;
        return (
          <g key={`f${i}`} transform={`rotate(${a.toFixed(2)} ${cx} ${BASE})`}>
            <rect
              className="filling"
              style={style({ "--d": `${1.6 + i * 0.06}s` })}
              x={cx - 4}
              y={BASE - h * 0.95}
              width={8}
              height={h * 0.55}
              rx={2}
              fill={bacon ? "var(--bacon)" : "var(--cheese)"}
              stroke={bacon ? "#fff1ec" : "#e2a400"}
              strokeWidth={bacon ? 2 : 1}
              strokeDasharray={bacon ? "6 5" : undefined}
            />
          </g>
        );
      })}
      {slices.map((s, i) => (
        <rect
          key={i}
          className="slice"
          style={style({ "--a": `${s.a}deg`, "--d": `${0.3 + Math.abs(i - MID) * 0.04}s` })}
          x={s.x - GAP / 2 + 1}
          y={BASE - s.h}
          width={GAP - 2}
          height={s.h}
          rx={9}
          fill="url(#hb-slice)"
          stroke="#9a5418"
          strokeWidth={1.2}
        />
      ))}
    </svg>
  );
}

export function DymkovoBand() {
  return (
    <svg className="dymkovo" width="100%" height="56" aria-hidden="true">
      <defs>
        <pattern id="dm-band" width="96" height="56" patternUnits="userSpaceOnUse">
          <path d="M0 6 q12 -8 24 0 t24 0 t24 0 t24 0" fill="none" stroke="var(--blue)" strokeWidth="3" />
          <circle cx="24" cy="30" r="13" fill="var(--red)" />
          <circle cx="24" cy="30" r="5" fill="var(--yellow)" />
          <circle cx="72" cy="30" r="13" fill="var(--blue)" />
          <circle cx="72" cy="30" r="5" fill="var(--orange)" />
          <circle cx="48" cy="30" r="4" fill="var(--green)" />
          <circle cx="0" cy="30" r="4" fill="var(--green)" />
          <circle cx="96" cy="30" r="4" fill="var(--green)" />
          <path d="M0 52 q12 8 24 0 t24 0 t24 0 t24 0" fill="none" stroke="var(--red)" strokeWidth="3" />
        </pattern>
      </defs>
      <rect width="100%" height="56" fill="url(#dm-band)" />
    </svg>
  );
}

export function DotBullet() {
  return (
    <svg viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="var(--red)" />
      <circle cx="10" cy="10" r="3.5" fill="var(--yellow)" />
    </svg>
  );
}
