import { motion } from "framer-motion";
import DetroitSkyline from "./DetroitSkyline";
import { profile } from "../data/resumeData";

function MailIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-steel-900 pt-28 pb-10 overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brick-600 via-motor-gold-500 to-motor-blue-500" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display uppercase tracking-[0.3em] text-motor-gold-400 text-xs"
        >
          Let's Connect
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl font-semibold text-steel-100 mt-3 mb-8"
        >
          Always open to a conversation
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
        >
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title={profile.email}
            className="w-14 h-14 rounded-full border border-steel-500 text-steel-100 flex items-center justify-center hover:border-motor-gold-400 hover:text-motor-gold-400 transition-all duration-300"
          >
            <MailIcon className="w-6 h-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="w-14 h-14 rounded-full border border-steel-500 text-steel-100 flex items-center justify-center hover:border-motor-gold-400 hover:text-motor-gold-400 transition-all duration-300"
          >
            <LinkedInIcon className="w-6 h-6" />
          </a>
        </motion.div>

        <p className="text-steel-500 text-sm mb-14 text-center">
          {profile.location}
        </p>
      </div>

      {/* skyline anchoring the footer, brick/gold gradient tone */}
      <div className="absolute bottom-0 inset-x-0 h-28 sm:h-36 text-brick-700/70">
        <DetroitSkyline className="w-full h-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 border-t border-steel-700/60 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-steel-500">
        <span>&copy; {new Date().getFullYear()} James Kovacs. Made right here in the Motor City.</span>
      </div>
    </footer>
  );
}
