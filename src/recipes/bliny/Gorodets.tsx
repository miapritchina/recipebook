/* generated-by: Claude | source: Блины тонкие recipe page | purpose: Gorodets-painting art — kupavka flowers and a stack of blini */
import type { CSSProperties } from "react";

const style = (vars: Record<string, string>) => vars as CSSProperties;

export function Kupavka({ x = 0, y = 0, r = 30, petal = "var(--red)", core = "var(--blue)" }) {
  const petals = Array.from({ length: 10 }, (_, i) => (i * 360) / 10);
  return (
    <g transform={`translate(${x} ${y})`}>
      {petals.map((a) => (
        <circle key={a} cx={0} cy={-r * 0.78} r={r * 0.32} fill={petal} transform={`rotate(${a})`} />
      ))}
      <circle r={r * 0.72} fill={petal} />
      <circle r={r * 0.5} fill={core} />
      <path d={`M${-r * 0.3} ${r * 0.05} a${r * 0.3} ${r * 0.3} 0 0 1 ${r * 0.6} 0`} fill="none" stroke="var(--white)" strokeWidth={r * 0.07} strokeLinecap="round" />
      <circle r={r * 0.12} fill="var(--white)" />
      {petals.map((a) => (
        <path
          key={`o${a}`}
          d={`M${-r * 0.16} ${-r * 0.74} q${r * 0.16} ${-r * 0.18} ${r * 0.32} 0`}
          fill="none"
          stroke="var(--white)"
          strokeWidth={r * 0.05}
          strokeLinecap="round"
          transform={`rotate(${a})`}
        />
      ))}
    </g>
  );
}

function Leaf({ x, y, a, s = 1 }: { x: number; y: number; a: number; s?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${a}) scale(${s})`}>
      <path d="M0 0 C10 -10 30 -12 44 0 C30 12 10 10 0 0Z" fill="var(--green)" />
      <path d="M8 0 Q24 -5 38 0" fill="none" stroke="var(--white)" strokeWidth="1.6" strokeLinecap="round" />
    </g>
  );
}

const BLINI = 7;

export function BlinStack() {
  return (
    <svg viewBox="0 145 600 158" className="blin-stack" aria-hidden="true">
      <defs>
        <radialGradient id="bl-gold" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0" stopColor="#ffe7a3" />
          <stop offset="0.6" stopColor="#f6c35c" />
          <stop offset="1" stopColor="#d98a2b" />
        </radialGradient>
        <pattern id="bl-lace" width="18" height="9" patternUnits="userSpaceOnUse">
          <ellipse cx="4" cy="3" rx="2.2" ry="1" fill="#c9762099" />
          <ellipse cx="13" cy="7" rx="1.5" ry="0.7" fill="#c9762077" />
        </pattern>
      </defs>
      <Leaf x={78} y={226} a={-160} s={1.1} />
      <Leaf x={522} y={226} a={-20} s={1.1} />
      <Kupavka x={70} y={200} r={42} />
      <Kupavka x={530} y={200} r={42} />
      <ellipse cx="300" cy="262" rx="215" ry="34" fill="var(--blue)" />
      <ellipse cx="300" cy="258" rx="188" ry="26" fill="none" stroke="var(--white)" strokeWidth="2" strokeDasharray="1 9" strokeLinecap="round" />
      {Array.from({ length: BLINI }, (_, i) => {
        const cy = 248 - i * 9;
        return (
          <g key={i} className="blin" style={style({ "--d": `${0.25 + i * 0.16}s` })}>
            <ellipse cx="300" cy={cy + 3} rx="158" ry="30" fill="#b8661c" />
            <ellipse cx="300" cy={cy} rx="156" ry="29" fill="url(#bl-gold)" />
            <ellipse cx="300" cy={cy} rx="150" ry="26" fill="url(#bl-lace)" />
          </g>
        );
      })}
      <g className="butter" style={style({ "--d": `${0.35 + BLINI * 0.16}s` })}>
        <path d={`M268 ${180} l32 -10 l32 10 l-32 10Z`} fill="#fff4b8" stroke="#e7c24c" strokeWidth="1.5" />
        <path d={`M268 ${180} l0 7 l32 10 l32 -10 l0 -7 l-32 10Z`} fill="#f6dd78" />
      </g>
    </svg>
  );
}

export function GorodetsBand() {
  return (
    <svg className="gorodets-band" width="100%" height="60" aria-hidden="true">
      <defs>
        <pattern id="gd-band" width="120" height="60" patternUnits="userSpaceOnUse">
          <path d="M0 30 Q30 12 60 30 T120 30" fill="none" stroke="var(--green)" strokeWidth="3" />
          <Leaf x={34} y={22} a={-30} s={0.5} />
          <Leaf x={86} y={38} a={150} s={0.5} />
          <Kupavka x={0} y={30} r={16} />
          <Kupavka x={60} y={30} r={14} petal="var(--blue)" core="var(--red)" />
          <Kupavka x={120} y={30} r={16} />
        </pattern>
      </defs>
      <rect width="100%" height="60" fill="url(#gd-band)" />
    </svg>
  );
}

export function KupavkaBullet() {
  return (
    <svg viewBox="-20 -20 40 40">
      <Kupavka r={14} />
    </svg>
  );
}
