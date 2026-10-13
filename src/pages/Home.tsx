import { LangToggle, useLang } from "../lang";
import { recipes } from "../recipes";
import { Berry } from "../recipes/sharlotka/Khokhloma";
import { StarMark } from "../recipes/zapekanka/Rushnyk";
import { seed } from "../recipes/korean-carrots/Petrykivka";
import "./home.css";

const COPY = {
  title: { ru: "Семейные рецепты", en: "Family recipes" },
  lede: {
    ru: "Москва · Светловодск · Дон",
    en: "Moscow · Svitlovodsk · the Don",
  },
};

const PETAL = "M-1 0 A1 1.15 0 0 1 1 0 A0.82 0.62 0 0 0 -1 0Z";

function GzhelRose() {
  const ring = (n: number, r: number, w: number, offset: number) =>
    Array.from({ length: n }, (_, i) => {
      const a = offset + (i * 360) / n;
      return <path key={`${r}-${i}`} d={PETAL} fill="url(#gz-stroke)" transform={`rotate(${a}) translate(0 ${-r}) scale(${w})`} />;
    });
  const leaves = [-135, -45, 45, 135];
  return (
    <svg viewBox="-100 -100 200 200" className="gzhel-rose" aria-hidden="true">
      <defs>
        <linearGradient id="gz-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#102a7c" />
          <stop offset="0.45" stopColor="#2b52c4" />
          <stop offset="1" stopColor="#7d97e0" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      {leaves.map((a) => (
        <g key={a} transform={`rotate(${a})`}>
          <path d="M0 -58 C10 -70 12 -86 0 -96 C-12 -86 -10 -70 0 -58Z" fill="url(#gz-stroke)" />
          <path d="M0 -58 L0 -92" stroke="#f4f7fe" strokeWidth="1.5" />
        </g>
      ))}
      {ring(8, 50, 21, 22.5)}
      {ring(6, 30, 17, 0)}
      {ring(4, 13, 11, 45)}
      <circle r="7" fill="#102a7c" />
    </svg>
  );
}

const MARKS: Record<string, JSX.Element> = {
  sharlotka: (
    <svg viewBox="0 0 40 40">
      <Berry x={14} y={22} r={8} />
      <Berry x={27} y={22} r={8} />
      <Berry x={20} y={11} r={8} />
    </svg>
  ),
  zapekanka: <StarMark />,
  "red-velvet": (
    <svg viewBox="-12 -12 24 24">
      <circle r="11" fill="#ff9fb2" />
      <circle r="7" fill="#e2335a" />
      <circle r="3.5" fill="#8e0b28" />
    </svg>
  ),
  "carrot-cake": (
    <svg viewBox="0 0 30 40">
      <path d="M15 1 C25 1 29 20 29 26 C29 34 23 39 15 39 C7 39 1 34 1 26 C1 20 5 1 15 1Z" fill="#c9201c" stroke="#1a1410" strokeWidth="1.5" />
      <rect x="1" y="17" width="28" height="8" fill="#1a1410" />
      <path d="M1 21 q4 -4 7 0 t7 0 t7 0 t7 0" fill="none" stroke="#ffe066" strokeWidth="1.5" />
    </svg>
  ),
  sauerkraut: (
    <svg viewBox="0 0 30 30">
      <rect y="3" width="30" height="8" fill="#173f8a" stroke="#f2c200" strokeWidth="1" />
      <rect y="11" width="30" height="8" fill="#f2c200" />
      <rect y="19" width="30" height="8" fill="#d21f2b" />
    </svg>
  ),
  "korean-carrots": (
    <svg viewBox="-20 -36 40 40">
      {[-40, 0, 40].map((r) => (
        <path key={r} d={seed(32, 7)} fill={r ? "#ffd23f" : "#ff7a1a"} transform={`rotate(${r})`} />
      ))}
    </svg>
  ),
};

export function Home() {
  const { lang } = useLang();
  return (
    <main className="home">
      <header className="home-top">
        <LangToggle />
      </header>
      <section className="home-hero">
        <GzhelRose />
        <h1>{COPY.title[lang]}</h1>
        <p>{COPY.lede[lang]}</p>
      </section>
      <ul className="tiles">
        {recipes.map((r) => (
          <li key={r.slug}>
            <a className={`tile tile--${r.slug}`} href={`#/${r.slug}`}>
              <span className="tile-mark" aria-hidden="true">{MARKS[r.slug]}</span>
              <span className="tile-title">{r.title[lang]}</span>
              {r.subtitle[lang] && <span className="tile-sub">{r.subtitle[lang]}</span>}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
