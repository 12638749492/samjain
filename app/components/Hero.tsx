"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section-padding pt-20 pb-16">
      <div className="glass rounded-3xl p-10 lg:p-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-vision-cyan"
          >
            VisionCut Agency
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
          >
            <span className="gradient-text">We Design.</span> We Market. We Grow Brands.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
            className="mt-6 text-base text-slate-600 dark:text-slate-300"
          >
            VisionCut is a premium creative digital marketing agency in Karnataka, India.
            We help businesses, creators, and educational institutions scale with
            conversion-first design, SEO, and content.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="ripple-button focus-outline rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-semibold"
            >
              View Services
            </Link>
            <Link
              href="/contact"
              className="ripple-button focus-outline rounded-full border border-white/30 px-6 py-3 text-sm font-semibold"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-vision-purple/40 blur-3xl animate-glow" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-vision-cyan/40 blur-3xl animate-glow" />
          <div className="glass rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-300">Featured</p>
            <h2 className="mt-3 text-2xl font-semibold">Instagram Project Showcase</h2>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Explore our latest campaign with interactive reels, carousel storytelling,
              and lead-gen ads for a Karnataka education brand.
            </p>
            <Link
              href="/portfolio"
              className="mt-6 inline-flex items-center text-sm font-semibold text-vision-cyan focus-outline"
            >
              View Portfolio →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
