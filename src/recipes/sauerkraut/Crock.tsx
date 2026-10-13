const SHREDS = Array.from({ length: 7 }, (_, i) => 222 + i * 13);
const CARROTS = [
  [252, 230], [292, 247], [334, 226], [270, 262], [318, 276], [346, 258], [258, 290], [300, 300], [336, 296],
];
const SPECKS = [[268, 120], [312, 112], [334, 132], [286, 146], [252, 138], [322, 150]];

export function CrockScene() {
  return (
    <svg viewBox="0 80 600 320" className="crock-scene" aria-hidden="true">
      <defs>
        <linearGradient id="sk-stone" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#c3c8cc" />
          <stop offset="1" stopColor="#5b6168" />
        </linearGradient>
        <linearGradient id="sk-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d8ccae" />
          <stop offset="0.35" stopColor="#f6efdc" />
          <stop offset="1" stopColor="#cbbd9a" />
        </linearGradient>
        <clipPath id="sk-window">
          <rect x="240" y="212" width="120" height="100" rx="16" />
        </clipPath>
      </defs>

      <ellipse cx="300" cy="338" rx="110" ry="10" fill="rgba(0,0,0,.25)" />
      <path d="M222 336 C200 300 196 222 212 176 L388 176 C404 222 400 300 378 336 Z" fill="url(#sk-body)" />
      <path d="M212 176 L388 176 C392 188 394 198 395 208 L205 208 C206 198 208 188 212 176Z" fill="#7a4a22" />
      <path d="M205 208 C230 216 260 202 300 212 C340 222 372 204 395 208" fill="none" stroke="#7a4a22" strokeWidth="6" strokeLinecap="round" />

      <g clipPath="url(#sk-window)">
        <rect x="240" y="212" width="120" height="100" fill="#e6eec4" />
        {SHREDS.map((y) => (
          <path key={y} d={`M236 ${y} q12 -6 24 0 t24 0 t24 0 t24 0 t24 0 t24 0`} fill="none" stroke="#9cbf5a" strokeWidth="3" />
        ))}
        {CARROTS.map(([x, y], i) => (
          <path key={i} d={`M${x} ${y} l9 -3`} stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" />
        ))}
        <rect className="juice" x="240" y="262" width="120" height="50" fill="#d9b44a" opacity="0.45" />
      </g>
      <rect x="240" y="212" width="120" height="100" rx="16" fill="none" stroke="#7a4a22" strokeWidth="3" />

      <ellipse cx="300" cy="176" rx="94" ry="13" fill="#5a3418" />
      <ellipse cx="300" cy="170" rx="78" ry="9" fill="#b07a3f" />

      <g className="stone">
        <path
          d="M232 160 C226 128 252 102 296 100 C344 98 372 118 370 146 C368 166 336 172 300 172 C262 172 236 172 232 160Z"
          fill="url(#sk-stone)"
        />
        <path d="M252 122 C272 108 300 106 322 110" fill="none" stroke="#e3e6e8" strokeWidth="4" strokeLinecap="round" opacity="0.7" />
        {SPECKS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2" fill="#4a4f55" opacity="0.6" />
        ))}
      </g>
    </svg>
  );
}

export function RhombBullet() {
  return (
    <svg viewBox="0 0 16 16">
      <path d="M8 1 L15 8 L8 15 L1 8Z" fill="var(--yellow)" />
      <path d="M8 5 L11 8 L8 11 L5 8Z" fill="var(--red)" />
    </svg>
  );
}
