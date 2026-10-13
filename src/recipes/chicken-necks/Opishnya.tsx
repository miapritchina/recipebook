/* generated-by: Claude | source: Куриные шейки recipe page | purpose: Opishnya-pottery art — a makitra bowl with stitched necks */
export function Makitra() {
  return (
    <svg viewBox="0 20 600 280" className="makitra" aria-hidden="true">
      <defs>
        <mask id="op-sew">
          <path className="sew" d="M150 128 Q300 92 450 128" pathLength={1} fill="none" stroke="#fff" strokeWidth="20" />
        </mask>
      </defs>
      {[230, 300, 370].map((x, i) => (
        <path
          key={x}
          className="steam"
          style={{ animationDelay: `${i * 0.7}s` }}
          d={`M${x} 95 q-14 -18 0 -36 t0 -36`}
          fill="none"
          stroke="var(--brown)"
          strokeOpacity="0.35"
          strokeWidth="5"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="300" cy="170" rx="212" ry="34" fill="var(--brown)" />
      <ellipse cx="300" cy="172" rx="196" ry="26" fill="#c98a3c" />
      <path d="M190 168 Q300 148 420 170" fill="none" stroke="#a8603a" strokeWidth="44" strokeLinecap="round" />
      <path d="M190 168 Q300 148 420 170" fill="none" stroke="var(--skin)" strokeWidth="40" strokeLinecap="round" />
      <path d="M150 140 Q300 104 450 140" fill="none" stroke="#a8603a" strokeWidth="56" strokeLinecap="round" />
      <path d="M150 140 Q300 104 450 140" fill="none" stroke="var(--skin)" strokeWidth="52" strokeLinecap="round" />
      <path d="M170 146 Q300 116 430 146" fill="none" stroke="#fff4e4" strokeOpacity="0.45" strokeWidth="8" strokeLinecap="round" />
      <path
        d="M150 128 Q300 92 450 128"
        fill="none"
        stroke="var(--brown)"
        strokeWidth="2.5"
        strokeDasharray="4 9"
        mask="url(#op-sew)"
      />
      {[
        [132, 140],
        [468, 140],
      ].map(([x, y]) => (
        <path key={x} d={`M${x - 5} ${y - 14} l10 28 M${x + 5} ${y - 14} l-10 28`} stroke="var(--brown)" strokeWidth="2.5" strokeLinecap="round" />
      ))}
      <path d="M86 170 C96 262 180 296 300 296 C420 296 504 262 514 170 Q300 214 86 170Z" fill="var(--terra)" />
      <path d="M100 200 q25 -14 50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0 t50 0" fill="none" stroke="var(--engobe)" strokeWidth="5" strokeLinecap="round" />
      {[150, 250, 350, 450].map((x) => (
        <g key={x}>
          <circle cx={x} cy="240" r="15" fill="var(--engobe)" />
          <path d={`M${x} 240 m-7 0 a7 7 0 1 1 7 7 a4 4 0 1 1 -3 -5`} fill="none" stroke="var(--brown)" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      ))}
      {[200, 300, 400].map((x) => (
        <circle key={x} cx={x} cy="246" r="6" fill="var(--green)" />
      ))}
    </svg>
  );
}

export function OpishnyaBand() {
  return (
    <svg className="opishnya-band" width="100%" height="40" aria-hidden="true">
      <defs>
        <pattern id="op-band" width="80" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 q20 -16 40 0 t40 0" fill="none" stroke="var(--brown)" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="20" cy="27" r="4.5" fill="var(--green)" />
          <circle cx="60" cy="13" r="4.5" fill="var(--terra)" />
          <circle cx="40" cy="20" r="2.5" fill="var(--brown)" />
        </pattern>
      </defs>
      <rect width="100%" height="40" fill="url(#op-band)" />
    </svg>
  );
}

export function SpiralBullet() {
  return (
    <svg viewBox="-10 -10 20 20">
      <circle r="9" fill="var(--terra)" />
      <path d="M0 0 m-4 0 a4 4 0 1 1 4 4 a2.4 2.4 0 1 1 -2 -3" fill="none" stroke="var(--engobe)" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
