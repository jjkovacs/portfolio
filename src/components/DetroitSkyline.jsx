// A stylized, abstract silhouette evoking the Detroit riverfront skyline —
// the cylindrical Renaissance Center towers flanked by varied high-rises.
export default function DetroitSkyline({ className = "", tone = "steel" }) {
  const fill = {
    steel: "currentColor",
    gold: "url(#skylineGoldGradient)",
  }[tone];

  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="skylineGoldGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8bd4e" />
          <stop offset="100%" stopColor="#a13d2d" />
        </linearGradient>
      </defs>
      <g fill={fill}>
        {/* far background low buildings */}
        <rect x="0" y="230" width="60" height="90" opacity="0.5" />
        <rect x="65" y="210" width="40" height="110" opacity="0.5" />
        <rect x="110" y="245" width="70" height="75" opacity="0.5" />
        <rect x="1330" y="220" width="50" height="100" opacity="0.5" />
        <rect x="1385" y="240" width="55" height="80" opacity="0.5" />

        {/* Penobscot-esque tower with antenna */}
        <rect x="230" y="130" width="46" height="190" />
        <rect x="248" y="90" width="10" height="45" />
        <rect x="251" y="70" width="4" height="24" />

        {/* mid buildings */}
        <rect x="290" y="170" width="54" height="150" />
        <rect x="350" y="150" width="36" height="170" />
        <rect x="392" y="190" width="60" height="130" />

        {/* One Detroit Center-esque stepped tower */}
        <polygon points="470,320 470,150 500,150 500,120 530,120 530,90 560,90 560,320" />

        {/* Renaissance Center cluster — central hero towers */}
        <rect x="610" y="60" width="26" height="260" rx="2" />
        <rect x="645" y="30" width="34" height="290" rx="2" />
        <rect x="688" y="5" width="42" height="315" rx="2" />
        <rect x="739" y="30" width="34" height="290" rx="2" />
        <rect x="782" y="60" width="26" height="260" rx="2" />

        {/* right side mixed buildings */}
        <rect x="840" y="200" width="58" height="120" />
        <rect x="905" y="160" width="40" height="160" />
        <polygon points="955,320 955,140 985,140 985,170 1015,170 1015,320" />
        <rect x="1030" y="185" width="50" height="135" />
        <rect x="1090" y="220" width="40" height="100" />

        {/* far tower with spire */}
        <rect x="1150" y="140" width="44" height="180" />
        <rect x="1167" y="110" width="10" height="34" />

        <rect x="1210" y="200" width="60" height="120" />
        <rect x="1280" y="230" width="45" height="90" />
      </g>
    </svg>
  );
}
