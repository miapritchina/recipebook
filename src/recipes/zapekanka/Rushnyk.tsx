const CELL = 9;
const SIZE = 15;

type Thread = "r" | "k" | null;

function star(x: number, y: number): Thread {
  const ax = Math.abs(x);
  const ay = Math.abs(y);
  const s = ax + ay;
  if (s <= 1) return "r";
  if (s === 2 && (x === 0 || y === 0)) return "k";
  if (ax === ay && ax === 2) return "k";
  if ((x === 0 || y === 0) && s >= 4 && s <= 6) return "r";
  if (ax === ay && ax >= 3 && ax <= 4) return "r";
  if (s === 5 && ax >= 1 && ay >= 1 && ax !== ay) return "k";
  return null;
}

function cells(): { x: number; y: number; t: "r" | "k" }[] {
  const out: { x: number; y: number; t: "r" | "k" }[] = [];
  const h = Math.floor(SIZE / 2);
  for (let y = -h; y <= h; y++) {
    for (let x = -h; x <= h; x++) {
      const t = star(x, y);
      if (t) out.push({ x: x + h, y: y + h, t });
    }
  }
  return out;
}

function Stitch({ x, y, t }: { x: number; y: number; t: "r" | "k" }) {
  const px = x * CELL + 1.5;
  const py = y * CELL + 1.5;
  const e = CELL - 3;
  return (
    <path
      className={`st st-${t}`}
      d={`M${px} ${py}l${e} ${e}M${px + e} ${py}l${-e} ${e}`}
    />
  );
}

const MOTIF = cells();
const BAND_H = (SIZE + 7) * CELL;

export function RushnykBand({ id }: { id: string }) {
  const w = (SIZE + 2) * CELL;
  return (
    <svg className="rushnyk" width="100%" height={BAND_H} aria-hidden="true">
      <defs>
        <pattern id={`${id}-m`} y={CELL * 3} width={w} height={SIZE * CELL} patternUnits="userSpaceOnUse">
          <g transform={`translate(${CELL} 0)`}>
            {MOTIF.map((c, i) => (
              <Stitch key={i} {...c} />
            ))}
          </g>
        </pattern>
        <pattern id={`${id}-z`} width={CELL * 4} height={CELL * 2} patternUnits="userSpaceOnUse">
          <Stitch x={0} y={1} t="r" />
          <Stitch x={1} y={0} t="r" />
          <Stitch x={2} y={1} t="r" />
          <Stitch x={3} y={0} t="k" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height={CELL * 2} fill={`url(#${id}-z)`} />
      <rect x="0" y={CELL * 3} width="100%" height={SIZE * CELL} fill={`url(#${id}-m)`} />
      <rect x="0" y={CELL * (SIZE + 5)} width="100%" height={CELL * 2} fill={`url(#${id}-z)`} />
    </svg>
  );
}

export function StitchBullet() {
  return (
    <svg viewBox="0 0 18 18">
      <path className="st st-r" d="M3 3l12 12M15 3L3 15" />
    </svg>
  );
}

export function StarMark() {
  return (
    <svg viewBox={`0 0 ${SIZE * CELL} ${SIZE * CELL}`}>
      {MOTIF.map((c, i) => (
        <Stitch key={i} {...c} />
      ))}
    </svg>
  );
}
