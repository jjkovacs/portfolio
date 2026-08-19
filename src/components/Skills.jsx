import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "../data/resumeData";

const accentMap = {
  gold: {
    dot: "bg-motor-gold-500",
    text: "text-motor-gold-400",
    border: "border-motor-gold-500/40",
    ring: "ring-motor-gold-400",
    glow: "shadow-glow-gold",
    hex: "#d9a521",
  },
  blue: {
    dot: "bg-motor-blue-500",
    text: "text-motor-blue-300",
    border: "border-motor-blue-500/40",
    ring: "ring-motor-blue-400",
    glow: "shadow-glow-blue",
    hex: "#2568ab",
  },
  brick: {
    dot: "bg-brick-500",
    text: "text-brick-500",
    border: "border-brick-500/40",
    ring: "ring-brick-500",
    glow: "shadow-[0_0_40px_rgba(191,76,55,0.25)]",
    hex: "#bf4c37",
  },
};

// Six nodes positioned like clock faces at 12/2/4/6/8/10, expressed as
// { angle in degrees, label direction relative to the node }.
const NODE_LAYOUT = [
  { angle: -90, dir: "top" },
  { angle: -30, dir: "right" },
  { angle: 30, dir: "right" },
  { angle: 90, dir: "bottom" },
  { angle: 150, dir: "left" },
  { angle: 210, dir: "left" },
];

const HUB_RADIUS = 33; // percent of container

function nodePosition(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: 50 + HUB_RADIUS * Math.cos(rad),
    y: 50 + HUB_RADIUS * Math.sin(rad),
  };
}

function SkillTile({ skill, i, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: i * 0.03 }}
      className={`relative border border-l-2 border-steel-600/40 bg-steel-800/40 rounded-sm px-3 py-2.5 text-xs sm:text-sm text-steel-200 font-display tracking-wide transition-colors duration-200`}
      style={{ borderLeftColor: accent.hex }}
    >
      <span
        className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: accent.hex }}
      />
      {skill}
    </motion.div>
  );
}

function RadialDiagram({ activeIndex, setActiveIndex }) {
  const active = skills[activeIndex];
  const activeAccent = accentMap[active.accent];

  return (
    <div className="hidden lg:block">
      <p className="text-center text-steel-500 text-xs uppercase tracking-[0.25em] font-display mb-8">
        Select a system to inspect its components
      </p>

      <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 xl:gap-16 items-center">
        {/* Radial hub-and-spoke diagram */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            {skills.map((cluster, i) => {
              const { x, y } = nodePosition(NODE_LAYOUT[i].angle);
              const isActive = i === activeIndex;
              const hex = accentMap[cluster.accent].hex;
              return (
                <line
                  key={cluster.id}
                  x1={50}
                  y1={50}
                  x2={x}
                  y2={y}
                  stroke={hex}
                  strokeWidth={isActive ? 2 : 1.25}
                  strokeOpacity={isActive ? 0.9 : 0.4}
                  strokeDasharray={isActive ? "none" : "3 3"}
                  vectorEffect="non-scaling-stroke"
                  style={{ transition: "stroke-width 0.3s ease, stroke-opacity 0.3s ease" }}
                />
              );
            })}
          </svg>

          {/* Hub */}
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full card-panel border-2 ${activeAccent.border} flex flex-col items-center justify-center text-center z-10 transition-shadow duration-300`}
          >
            <span className="font-display uppercase tracking-widest text-[9px] text-steel-500">
              Core
            </span>
            <span className="font-display font-semibold text-steel-100 text-sm px-2 leading-tight mt-0.5">
              Skillset
            </span>
          </div>

          {/* Category nodes */}
          {skills.map((cluster, i) => {
            const { x, y } = nodePosition(NODE_LAYOUT[i].angle);
            const { dir } = NODE_LAYOUT[i];
            const accent = accentMap[cluster.accent];
            const isActive = i === activeIndex;

            const labelPositionClasses = {
              top: "bottom-full left-1/2 -translate-x-1/2 mb-2 text-center whitespace-nowrap",
              bottom: "top-full left-1/2 -translate-x-1/2 mt-2 text-center whitespace-nowrap",
              left: "right-full top-1/2 -translate-y-1/2 mr-2 text-right max-w-[6.5rem] xl:max-w-none xl:whitespace-nowrap",
              right: "left-full top-1/2 -translate-y-1/2 ml-2 text-left max-w-[6.5rem] xl:max-w-none xl:whitespace-nowrap",
            }[dir];

            return (
              // Wrapper is centered exactly on the node's (x, y) coordinate
              // and sized to match the circle, so spoke lines always
              // terminate at the circle's true center regardless of which
              // side the label sits on.
              <div
                key={cluster.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 xl:w-20 xl:h-20"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  aria-label={`Show ${cluster.label} skills`}
                  className={`relative w-full h-full rounded-full flex items-center justify-center border-2 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? `${accent.border} ${accent.glow} bg-steel-800 scale-110`
                      : "border-steel-600/50 bg-steel-800/60 hover:border-steel-400 hover:scale-105"
                  }`}
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${accent.dot} ${
                      isActive ? "" : "opacity-60"
                    }`}
                  />
                  <span
                    className={`absolute -bottom-1 -right-1 min-w-[1.25rem] h-5 px-1 rounded-full text-[10px] font-display flex items-center justify-center border ${
                      isActive
                        ? `${accent.border} bg-steel-900 ${accent.text}`
                        : "border-steel-600/50 bg-steel-900 text-steel-500"
                    }`}
                  >
                    {cluster.items.length}
                  </span>
                </button>

                <span
                  className={`absolute font-display text-xs sm:text-sm uppercase tracking-wide leading-tight transition-colors duration-300 ${labelPositionClasses} ${
                    isActive ? accent.text : "text-steel-400"
                  }`}
                >
                  {cluster.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.3 }}
            className={`card-panel rounded-md p-6 border ${activeAccent.border}`}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: activeAccent.hex }}
              />
              <h3 className="font-display uppercase tracking-widest text-sm text-steel-100">
                {active.label}
              </h3>
              <span className="text-steel-500 text-xs ml-auto">
                {active.items.length} skills
              </span>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
              {active.items.map((skill, i) => (
                <SkillTile
                  key={skill}
                  skill={skill}
                  i={i}
                  accent={activeAccent}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function StackedClusters() {
  return (
    <div className="lg:hidden space-y-10">
      {skills.map((cluster, gi) => {
        const accent = accentMap[cluster.accent];
        return (
          <motion.div
            key={cluster.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: gi * 0.08 }}
          >
            <h3
              className={`font-display uppercase tracking-widest text-sm mb-4 inline-flex items-center gap-2 border-b pb-2 ${accent.text} ${accent.border}`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: accent.hex }}
              />
              {cluster.label}
              <span className="text-steel-500 normal-case tracking-normal text-xs">
                ({cluster.items.length})
              </span>
            </h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
              {cluster.items.map((skill, i) => (
                <SkillTile key={skill} skill={skill} i={i} accent={accent} />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="skills" className="relative py-28 bg-steel-900">
      <div className="absolute inset-0 bg-rivets opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-display uppercase tracking-[0.3em] text-motor-blue-300 text-xs">
            Toolbox
          </span>
          <h2 className="section-heading-underline font-display text-3xl sm:text-4xl font-semibold text-steel-100 mt-3">
            Skills &amp; Expertise
          </h2>
        </motion.div>

        <RadialDiagram activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        <StackedClusters />
      </div>
    </section>
  );
}
