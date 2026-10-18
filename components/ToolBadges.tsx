/**
 * App badges for Photoshop, Illustrator and CorelDRAW, drawn as inline SVG in the same
 * "document with folded corner" style used on the original cover slide.
 * To use the official artwork instead, replace each <svg> with <Image src="/images/tools/….svg" />.
 */
const TOOLS = [
  { code: "Ps", name: "Adobe Photoshop", color: "#31A8FF", size: 19 },
  { code: "Ai", name: "Adobe Illustrator", color: "#FF9A00", size: 19 },
  { code: "CDR", name: "CorelDRAW", color: "#3DBE53", size: 12 },
];

export default function ToolBadges() {
  return (
    <ul className="tools" aria-label="Software I use">
      {TOOLS.map((t) => (
        <li key={t.code} className="tools__item">
          <svg viewBox="0 0 48 48" role="img" aria-label={t.name} className="tools__icon">
            <path
              d="M10 5h20l9 9v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"
              fill={t.color}
              fillOpacity="0.14"
              stroke={t.color}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d="M30 5v9h9" fill="none" stroke={t.color} strokeWidth="2.5" strokeLinejoin="round" />
            <text
              x="23.5"
              y="34"
              textAnchor="middle"
              fontSize={t.size}
              fontWeight="700"
              fill={t.color}
              fontFamily="Axiforma, Helvetica, Arial, sans-serif"
            >
              {t.code}
            </text>
          </svg>
          <span className="tools__name">{t.name}</span>
        </li>
      ))}
    </ul>
  );
}
