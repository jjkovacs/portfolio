import { motion } from "framer-motion";
import { education } from "../data/resumeData";
import BlockM from "./BlockM";

export default function Education() {
  return (
    <section id="education" className="relative py-28 bg-steel-950 overflow-hidden">
      <div className="absolute inset-0 bg-blueprint opacity-30" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display uppercase tracking-[0.3em] text-motor-blue-300 text-xs">
            Foundation
          </span>
          <h2 className="section-heading-underline font-display text-3xl sm:text-4xl font-semibold text-steel-100 mt-3 mb-12">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ y: -6 }}
          transition={{ duration: 0.6 }}
          className="card-panel rounded-lg p-10 inline-flex flex-col items-center gap-3 border border-motor-gold-500/20"
        >
          <div className="w-16 h-16 rounded-full bg-steel-800 border border-motor-gold-500/30 flex items-center justify-center p-2.5 shadow-glow-gold">
            <BlockM className="w-full h-full" />
          </div>
          <h3 className="font-display text-2xl font-semibold text-steel-100 mt-2">
            {education.school}
          </h3>
          <p className="text-motor-gold-400 font-medium">{education.degree}</p>
          <p className="text-steel-400 text-sm">
            {education.location} &middot; {education.date}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
