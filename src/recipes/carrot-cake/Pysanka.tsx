const EGG = "M150 18 C232 18 282 170 282 252 C282 334 222 388 150 388 C78 388 18 334 18 252 C18 170 68 18 150 18Z";

function wave(y: number, amp: number, period: number) {
  let d = `M-10 ${y}`;
  for (let x = -10; x < 310; x += period) {
    d += ` q${period / 4} ${-amp} ${period / 2} 0 t${period / 2} 0`;
  }
  return d;
}

function teeth(y0: number, y1: number, n: number, up: boolean) {
  const w = 300 / n;
  return Array.from({ length: n }, (_, i) => {
    const x = i * w;
    return up
      ? `M${x} ${y1} L${x + w / 2} ${y0} L${x + w} ${y1}Z`
      : `M${x} ${y0} L${x + w / 2} ${y1} L${x + w} ${y0}Z`;
  }).join(" ");
}

export function PysankaEgg() {
  const star = Array.from({ length: 8 }, (_, i) => i * 45);
  return (
    <svg viewBox="0 0 300 400" className="pysanka" aria-hidden="true">
      <defs>
        <clipPath id="ps-egg"><path d={EGG} /></clipPath>
        <radialGradient id="ps-shade" cx="35%" cy="30%" r="80%">
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.35" />
        </radialGradient>
      </defs>
      <g clipPath="url(#ps-egg)">
        <rect width="300" height="400" fill="var(--red)" />
        <g transform="translate(150 70)">
          {star.map((a) => (
            <path key={a} d="M0 0 L9 -22 L0 -44 L-9 -22Z" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="2" transform={`rotate(${a})`} />
          ))}
          <circle r="8" fill="var(--ink)" />
        </g>
        <rect y="118" width="300" height="56" fill="var(--yellow)" />
        <path d={teeth(118, 174, 7, true)} fill="var(--ink)" />
        <rect y="174" width="300" height="70" fill="var(--ink)" />
        <path d={wave(209, 22, 60)} fill="none" stroke="var(--yellow)" strokeWidth="6" />
        {[30, 90, 150, 210, 270].map((x) => (
          <circle key={x} cx={x} cy={192} r="4" fill="#fff8e6" />
        ))}
        {[60, 120, 180, 240].map((x) => (
          <circle key={x} cx={x} cy={228} r="4" fill="#fff8e6" />
        ))}
        <rect y="244" width="300" height="56" fill="var(--yellow)" />
        <path d={teeth(244, 300, 7, false)} fill="var(--ink)" />
        <rect y="300" width="300" height="100" fill="var(--orange)" />
        {[60, 105, 150, 195, 240].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 ? 330 : 350} r="6" fill="var(--yellow)" stroke="var(--ink)" strokeWidth="2" />
        ))}
        {[118, 174, 244, 300].map((y) => (
          <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#fff8e6" strokeWidth="3" />
        ))}
        <rect width="300" height="400" fill="url(#ps-shade)" />
      </g>
      <path d={EGG} fill="none" stroke="var(--ink)" strokeWidth="3" />
    </svg>
  );
}

export function TriangleBullet() {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M8 2 L15 14 L1 14Z" fill="var(--red)" stroke="var(--ink)" strokeWidth="1.5" />
    </svg>
  );
}
