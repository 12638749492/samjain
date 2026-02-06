"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="section-padding py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-vision-cyan">About Us</p>
        <h1 className="mt-4 text-4xl font-semibold">Built in Karnataka. Designed for the world.</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          VisionCut is a creative digital marketing agency blending design, technology,
          and performance marketing. We partner with entrepreneurs, creators, and
          educational institutions to craft modern brand experiences.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {[
          {
            title: "Our Vision",
            text: "To build future-ready brands that connect deeply with audiences across Karnataka and beyond."
          },
          {
            title: "Our Mission",
            text: "Deliver premium creative systems, SEO, and marketing execution that unlocks measurable growth."
          },
          {
            title: "Core Values",
            text: "Craft, clarity, and collaboration. We believe in data-driven creativity and ethical growth."
          }
        ].map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl p-6"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 glass rounded-3xl p-10">
        <h2 className="text-2xl font-semibold">Founder & Creative Director</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          VisionCut is led by a multidisciplinary strategist focused on helping Karnataka
          businesses and institutions scale with high-impact visual systems, ad
          performance, and growth storytelling.
        </p>
      </div>
    </div>
  );
}
