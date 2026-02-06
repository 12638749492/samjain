'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden rounded-[32px] bg-hero-gradient px-6 py-16 md:px-12 md:py-24">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(124,92,255,0.35),_transparent_60%)]" />
      <div className="relative z-10 max-w-3xl">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-300"
        >
          VisionCut Digital Marketing Agency
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-4xl md:text-6xl font-semibold"
        >
          We Design. We Market. We <span className="gradient-text">Grow Brands.</span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300"
        >
          VisionCut is a premium creative studio in Karnataka empowering businesses, creators, and educational institutions
          with cinematic storytelling, design systems, and performance marketing that scale.
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/services"
            className="inline-flex items-center rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-white shadow-glow btn-ripple"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
