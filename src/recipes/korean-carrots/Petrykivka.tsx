import type { CSSProperties } from "react";

type P = readonly [number, number];
const P0: P = [30, 320];
const P1: P = [300, 20];
const P2: P = [570, 320];

const bez = (t: number): P => [
  (1 - t) ** 2 * P0[0] + 2 * (1 - t) * t * P1[0] + t * t * P2[0],
  (1 - t) ** 2 * P0[1] + 2 * (1 - t) * t * P1[1] + t * t * P2[1],
];
const tangent = (t: number) =>
  Math.atan2(
    2 * (1 - t) * (P1[1] - P0[1]) + 2 * t * (P2[1] - P1[1]),
    2 * (1 - t) * (P1[0] - P0[0]) + 2 * t * (P2[0] - P1[0]),
  );
const delay = (s: number) => ({ "--d": `${s}s` }) as CSSProperties;

export function seed(len: number, w: number) {
  return `M0 0 C${w * 0.2} ${-len * 0.5} ${w} ${-len * 0.7} ${w} ${-len * 0.85} A${w} ${w} 0 0 0 ${-w} ${-len * 0.85} C${-w} ${-len * 0.7} ${-w * 0.2} ${-len * 0.5} 0 0Z`;
}

function Flower({ x, y, size, petals, d }: { x: number; y: number; size: number; petals: number; d: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="bloom" style={delay(d)}>
        {Array.from({ length: petals }, (_, i) => {
          const rot = -90 + ((i - (petals - 1) / 2) * 200) / petals;
          return (
            <g key={i} transform={`rotate(${rot + 90})`}>
              <path d={seed(size, size * 0.3)} fill="url(#pk-petal)" />
              <path d={seed(size * 0.55, size * 0.14)} fill="var(--red)" transform={`translate(0 ${-size * 0.3})`} />
            </g>
          );
        })}
        <circle r={size * 0.32} fill="var(--red)" />
        <circle r={size * 0.32} fill="none" stroke="var(--yellow)" strokeWidth={2} strokeDasharray="2 5" />
        {[[-0.1, -0.08], [0.1, -0.06], [0, 0.1]].map(([dx, dy], i) => (
          <circle key={i} cx={dx * size} cy={dy * size} r={size * 0.05} fill="var(--yellow)" />
        ))}
      </g>
    </g>
  );
}

function feathers() {
  const out: { x: number; y: number; rot: number; green: boolean }[] = [];
  const skip = [0.22, 0.5, 0.78];
  for (let t = 0.04; t < 0.97; t += 0.035) {
    if (skip.some((s) => Math.abs(t - s) < (s === 0.5 ? 0.09 : 0.06))) continue;
    const [x, y] = bez(t);
    const a = (tangent(t) * 180) / Math.PI;
    out.push({ x, y, rot: a - 50, green: true });
    out.push({ x, y, rot: a - 130, green: false });
  }
  return out;
}

export function PetrykivkaGarland() {
  const f = feathers();
  const [mx, my] = bez(0.5);
  const [lx, ly] = bez(0.22);
  const [rx, ry] = bez(0.78);
  return (
    <svg viewBox="0 90 600 250" className="garland" aria-hidden="true">
      <defs>
        <linearGradient id="pk-petal" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#ffd23f" />
          <stop offset="0.6" stopColor="#ff8a1e" />
          <stop offset="1" stopColor="#f2541b" />
        </linearGradient>
      </defs>
      <path className="stem" d={`M${P0} Q${P1} ${P2}`} pathLength={1} />
      {f.map((s, i) => (
        <g key={i} transform={`translate(${s.x.toFixed(1)} ${s.y.toFixed(1)}) rotate(${(s.rot + 90).toFixed(1)})`}>
          <path
            className="feather"
            style={delay(0.3 + i * 0.012)}
            d={seed(28, 5.5)}
            fill={s.green ? "var(--leaf)" : "var(--yellow)"}
          />
        </g>
      ))}
      <Flower x={lx} y={ly} size={46} petals={7} d={0.9} />
      <Flower x={rx} y={ry} size={46} petals={7} d={1.0} />
      <Flower x={mx} y={my} size={78} petals={9} d={1.2} />
    </svg>
  );
}

export function SeedBullet() {
  return (
    <svg viewBox="-8 -24 16 26">
      <path d={seed(22, 6)} fill="var(--orange)" transform="rotate(25)" />
    </svg>
  );
}
