import { motion } from "framer-motion";
import { experience } from "../data/resumeData";

const accentMap = {
  blue: {
    dot: "bg-motor-blue-500",
    text: "text-motor-blue-300",
    border: "border-motor-blue-500/40",
    hoverGlow: "hover:shadow-glow-blue",
  },
  gold: {
    dot: "bg-motor-gold-500",
    text: "text-motor-gold-400",
    border: "border-motor-gold-500/40",
    hoverGlow: "hover:shadow-glow-gold",
  },
  brick: {
    dot: "bg-brick-500",
    text: "text-brick-500",
    border: "border-brick-500/40",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(191,76,55,0.25)]",
  },
};

// Renders a highlight string, bolding a "Label:" prefix if one is present
// (e.g. "Engineering Leadership: Directed a cross-functional team...").
function Highlight({ text }) {
  const match = text.match(/^([^:]+:)\s*(.*)$/s);
  if (!match) return <>{text}</>;
  const [, label, rest] = match;
  return (
    <>
      <strong className="font-semibold text-steel-100">{label}</strong> {rest}
    </>
  );
}

function ExperienceCard({ item, index }) {
  const accent = accentMap[item.accent];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-10 items-start mb-16 last:mb-0"
    >
      {/* timeline node */}
      <span
        className={`absolute left-[14px] md:left-1/2 md:-translate-x-1/2 top-1.5 w-3.5 h-3.5 rounded-full ${accent.dot} ring-4 ring-steel-900 z-10`}
      />

      <div className={isEven ? "md:text-right md:pr-10" : "md:col-start-2 md:pl-10"}>
        <p className={`font-display text-sm uppercase tracking-widest ${accent.text}`}>
          {item.period}
        </p>
        <h3 className="font-display text-2xl font-semibold text-steel-100 mt-1">
          {item.role}
        </h3>
        <p className="text-steel-400 mt-1">
          {item.company} &middot; {item.location}
        </p>
      </div>

      <div
        className={
          isEven
            ? "md:col-start-2 md:pl-10 mt-4 md:mt-0"
            : "md:col-start-1 md:row-start-1 md:pr-10 md:text-right mt-4 md:mt-0"
        }
      >
        <div className={`card-panel rounded-md p-6 border ${accent.border} ${accent.hoverGlow} transition-shadow duration-300`}>
          <ul className={`space-y-2.5 text-steel-300 text-sm leading-relaxed ${isEven ? "" : "md:text-right"}`}>
            {item.highlights.map((h, i) => (
              <li key={i} className={isEven ? "flex gap-2.5" : "md:flex-row-reverse flex gap-2.5"}>
                <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${accent.dot} shrink-0`} />
                <span>
                  <Highlight text={h} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 bg-steel-950">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="font-display uppercase tracking-[0.3em] text-motor-blue-300 text-xs">
            Career Path
          </span>
          <h2 className="section-heading-underline font-display text-3xl sm:text-4xl font-semibold text-steel-100 mt-3">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-steel-700" />
          {experience.map((item, i) => (
            <ExperienceCard item={item} index={i} key={item.company + item.role} />
          ))}
        </div>
      </div>
    </section>
  );
}
