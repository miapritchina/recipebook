import type { CSSProperties } from "react";

const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function Rose({ x, y, s, d = 0 }: { x: number; y: number; s: number; d?: number }) {
  const outer = Array.from({ length: 6 }, (_, i) => i * 60 + 15);
  const inner = Array.from({ length: 5 }, (_, i) => i * 72 - 10);
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="bloom" style={delay(d)}>
        {outer.map((a) => (
          <g key={a} transform={`rotate(${a})`}>
            <ellipse cx={0} cy={-s * 0.3} rx={s * 0.3} ry={s * 0.24} fill="var(--rose-pale)" stroke="var(--rose-mid)" strokeWidth={s * 0.012} />
            <path d={`M${-s * 0.17} ${-s * 0.46} Q0 ${-s * 0.55} ${s * 0.17} ${-s * 0.46}`} fill="none" stroke="var(--rose-light)" strokeWidth={s * 0.016} strokeLinecap="round" />
          </g>
        ))}
        {inner.map((a) => (
          <ellipse key={a} cx={0} cy={-s * 0.16} rx={s * 0.22} ry={s * 0.17} fill="var(--rose-mid)" transform={`rotate(${a})`} />
        ))}
        <circle r={s * 0.17} fill="var(--rose-deep)" />
        <path
          d={`M${-s * 0.13} ${s * 0.07} A${s * 0.14} ${s * 0.14} 0 0 1 ${s * 0.03} ${-s * 0.13}`}
          fill="none" stroke="var(--rose-light)" strokeWidth={s * 0.02} strokeLinecap="round"
        />
      </g>
    </g>
  );
}

function Leaf({ x, y, rot, s }: { x: number; y: number; rot: number; s: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${s})`}>
      <path d="M0 0 C18 -12 22 -40 0 -64 C-22 -40 -18 -12 0 0Z" fill="var(--leaf-dark)" />
      <path d="M0 0 C18 -12 22 -40 0 -64 Z" fill="var(--leaf)" />
      <path d="M0 -4 L0 -58" stroke="var(--leaf-light)" strokeWidth="1.4" />
    </g>
  );
}

function Forget({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <circle key={a} cx={0} cy={-6} r={5} fill="var(--blue)" transform={`rotate(${a})`} />
      ))}
      <circle r={3} fill="var(--gold)" />
    </g>
  );
}

export function ShawlBouquet() {
  return (
    <svg viewBox="0 0 600 360" className="bouquet" aria-hidden="true">
      <Leaf x={150} y={210} rot={-70} s={1.3} />
      <Leaf x={450} y={210} rot={70} s={1.3} />
      <Leaf x={250} y={120} rot={-30} s={1.1} />
      <Leaf x={350} y={120} rot={30} s={1.1} />
      <Leaf x={220} y={300} rot={-150} s={1.1} />
      <Leaf x={380} y={300} rot={150} s={1.1} />
      <Leaf x={300} y={310} rot={180} s={1} />
      <Rose x={170} y={220} s={120} d={0.5} />
      <Rose x={430} y={220} s={120} d={0.65} />
      <Rose x={300} y={185} s={190} d={0.2} />
      {[[110, 140], [490, 140], [205, 92], [395, 92], [120, 300], [480, 300], [300, 50]].map(([x, y], i) => (
        <Forget key={i} x={x} y={y} />
      ))}
    </svg>
  );
}

export function RoseBullet() {
  return (
    <svg viewBox="-12 -12 24 24">
      <circle r="10" fill="var(--rose-mid)" />
      <circle r="5" fill="var(--rose-deep)" />
      <path d="M-6 3 a7 5 0 0 0 12 0" fill="none" stroke="var(--rose-light)" strokeWidth="1.6" />
    </svg>
  );
}
