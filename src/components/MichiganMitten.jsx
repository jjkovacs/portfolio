// Lower Peninsula "mitten" silhouette (adapted from the Pinhead icon library's
// michigan_lower_peninsula icon, CC0: https://commons.wikimedia.org/wiki/File:Michigan_lower_peninsula_Pinhead_icon.svg)
// with a pin marking the Metro Detroit / Dearborn area — a nod to native Michigander pride.
export default function MichiganMitten({ className = "" }) {
  return (
    <svg
      viewBox="0 0 210 210"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M27.0 205.0 L97.0 205.0 L97.0 210.0 L149.5 210.0 L159.6 187.5 L169.5 175.0
           L172.1 160.0 L184.5 162.5 L187.0 145.0 L179.6 100.0 L172.1 87.5 L157.1 92.5
           L142.1 114.9 L129.5 110.0 L134.5 92.5 L147.0 90.0 L147.0 77.6 L154.6 75.0
           L157.1 47.5 L149.5 42.6 L149.5 35.0 L157.1 37.5 L152.0 22.5 L137.1 17.5
           L124.6 15.0 L119.6 5.0 L112.0 5.0 L102.1 0.0 L94.5 0.0 L87.1 7.6 L87.1 15.0
           L97.0 17.5 L84.6 20.0 L74.6 27.4 L74.6 47.5 L67.1 50.0 L67.1 30.0 L49.6 47.5
           L49.6 55.0 L44.5 55.0 L42.0 75.0 L34.6 90.0 L39.6 102.5 L34.6 110.0 L47.0 145.0
           L44.5 165.1 L39.6 184.9 Z"
        fill="currentColor"
        opacity="0.9"
      />
      {/* pin marking Metro Detroit / Dearborn, southeast lower peninsula,
          just south of the Thumb region */}
      <g transform="translate(153, 180)">
        <path
          d="M0 0 C 8 0 14 6 14 14 C 14 24 0 40 0 40 C 0 40 -14 24 -14 14 C -14 6 -8 0 0 0 Z"
          fill="#d9a521"
          stroke="#0e1013"
          strokeWidth="2"
        />
        <circle cx="0" cy="13" r="5" fill="#0e1013" />
      </g>
    </svg>
  );
}
