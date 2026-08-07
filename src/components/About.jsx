import { motion } from "framer-motion";
import { profile } from "../data/resumeData";

const stats = [
  { label: "Years Building Software", value: "15+" },
  { label: "Years Leading Engineering Teams", value: "6+" },
  { label: "Vehicle Installs Reached", value: "13M+" },
  { label: "Vehicle Brands Reached", value: "6" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-steel-900">
      <div className="absolute inset-0 bg-rivets opacity-40" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-display uppercase tracking-[0.3em] text-motor-blue-300 text-xs">
            About
          </span>
          <h2 className="section-heading-underline font-display text-3xl sm:text-4xl font-semibold text-steel-100 mt-3 mb-10">
            Engineering leadership, forged in the Motor City
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-5">
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-steel-300 leading-relaxed text-lg"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="card-panel rounded-md p-5 text-center"
              >
                <div className="font-display text-3xl font-semibold text-motor-gold-400">
                  {s.value}
                </div>
                <div className="text-xs text-steel-400 mt-2 uppercase tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
