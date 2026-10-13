import type { CSSProperties } from "react";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

function Bird({ x, flip, d }: { x: number; flip: boolean; d: number }) {
  return (
    <g transform={`translate(${x} 70) scale(${flip ? -1 : 1} 1)`}>
      <g className="hop" style={delay(d)}>
        <path d="M-34 4 L-58 -18 M-34 6 L-62 -4 M-34 8 L-60 12" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
        <path d="M-36 6 C-26 -18 14 -22 24 -6 C16 14 -16 18 -36 6Z" fill="var(--red)" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M-20 0 l6 6 M-10 -4 l6 6 M0 -6 l6 6" stroke="var(--ink)" strokeWidth="2" />
        <path d="M22 -8 C24 -22 30 -30 38 -30" fill="none" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="40" cy="-32" r="6" fill="var(--red)" stroke="var(--ink)" strokeWidth="2" />
        <path d="M46 -32 l8 2" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M-8 14 L-12 34 M6 12 L8 34" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round" />
      </g>
    </g>
  );
}

function Spiral({ x }: { x: number }) {
  return (
    <path
      transform={`translate(${x} 66)`}
      d="M0 0 C0 -8 10 -8 10 0 C10 12 -8 12 -8 0 C-8 -16 16 -16 16 0"
      fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round"
    />
  );
}

export function MezenFrieze() {
  const birds = [90, 230, 370, 510];
  return (
    <svg viewBox="0 0 600 130" className="frieze" aria-hidden="true">
      <line x1="0" x2="600" y1="112" y2="112" stroke="var(--ink)" strokeWidth="3" />
      <line x1="0" x2="600" y1="120" y2="120" stroke="var(--red)" strokeWidth="3" />
      {birds.map((x, i) => (
        <Bird key={x} x={x} flip={i % 2 === 1} d={0.2 + i * 0.15} />
      ))}
      {[160, 300, 440].map((x) => (
        <Spiral key={x} x={x} />
      ))}
    </svg>
  );
}

export function LozengeBand() {
  return (
    <svg className="lozenges" width="100%" height="28" aria-hidden="true">
      <defs>
        <pattern id="mz-loz" width="40" height="28" patternUnits="userSpaceOnUse">
          <path d="M20 3 L36 14 L20 25 L4 14Z" fill="var(--red)" stroke="var(--ink)" strokeWidth="2" />
          <path d="M20 10 L26 14 L20 18 L14 14Z" fill="var(--ink)" />
          <path d="M0 14 L4 14 M36 14 L40 14" stroke="var(--ink)" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="28" fill="url(#mz-loz)" />
    </svg>
  );
}

export function CrossBullet() {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M8 1 V15 M1 8 H15" stroke="var(--red)" strokeWidth="3" />
      <rect x="5.5" y="5.5" width="5" height="5" fill="var(--ink)" transform="rotate(45 8 8)" />
    </svg>
  );
}
