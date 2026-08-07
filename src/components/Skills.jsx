import { motion } from "framer-motion";
import { skills } from "../data/resumeData";

const groupAccent = {
  Technologies: "text-motor-gold-400 border-motor-gold-500/30",
  "Tools & Practices": "text-brick-500 border-brick-500/30",
};

export default function Skills() {
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

        <div className="space-y-12">
          {Object.entries(skills).map(([group, items], gi) => (
            <motion.div
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <h3
                className={`font-display uppercase tracking-widest text-sm mb-4 inline-block border-b pb-2 ${groupAccent[group]}`}
              >
                {group}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.035 }}
                    className="chip rounded-full px-4 py-2 text-sm text-steel-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
