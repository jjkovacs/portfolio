import { motion } from "framer-motion";
import DetroitSkyline from "./DetroitSkyline";
import MichiganMitten from "./MichiganMitten";
import { profile } from "../data/resumeData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden bg-steel-950"
    >
      {/* blueprint grid backdrop */}
      <div className="absolute inset-0 bg-blueprint" />
      {/* soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,104,171,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(217,165,33,0.12),transparent_55%)]" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-48 w-full">
        <motion.p
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display uppercase tracking-[0.35em] text-motor-gold-400 text-xs sm:text-sm mb-6 flex items-center gap-3"
        >
          <span className="inline-block w-8 h-px bg-motor-gold-500" />
          Metro Detroit, Michigan
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-display font-semibold text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-steel-100"
        >
          James Joseph
          <br />
          <span className="text-gradient-gold">Kovacs</span>
        </motion.h1>

        <motion.h2
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 text-xl sm:text-2xl text-steel-300 font-light max-w-2xl"
        >
          {profile.title} — engineering connected&nbsp;vehicle software at
          American automotive scale.
        </motion.h2>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-5 text-steel-400 max-w-xl leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#experience"
            className="px-7 py-3 rounded-sm bg-motor-gold-500 text-steel-950 font-display uppercase tracking-wider text-sm font-medium hover:bg-motor-gold-400 hover:shadow-glow-gold transition-all duration-300"
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-sm border border-steel-500 text-steel-100 font-display uppercase tracking-wider text-sm font-medium hover:border-motor-gold-400 hover:text-motor-gold-400 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-14 flex items-center gap-3 text-steel-500"
        >
          <MichiganMitten className="w-7 h-7 text-steel-500" />
          <span className="text-xs tracking-widest uppercase font-display">
            Born &amp; Built in the Mitten
          </span>
        </motion.div>
      </div>

      {/* Detroit skyline silhouette anchoring the hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-0 inset-x-0 h-40 sm:h-56 md:h-64 text-steel-800"
      >
        <DetroitSkyline className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-steel-950 via-steel-950/10 to-transparent" />
      </motion.div>
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-motor-blue-500 via-motor-gold-500 to-brick-600" />
    </section>
  );
}
