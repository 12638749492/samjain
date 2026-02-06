"use client";

import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    title: "Brand Design",
    description: "Bold identities and social templates built for conversion."
  },
  {
    title: "Video Editing",
    description: "Scroll-stopping edits for reels, YouTube, and ads."
  },
  {
    title: "Growth Marketing",
    description: "SEO, ads, and lead generation strategies for scale."
  }
];

export default function ServicePreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
          className="glass rounded-2xl p-6 hover:-translate-y-2 transition-transform duration-300"
        >
          <p className="text-lg font-semibold">{service.title}</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            {service.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
