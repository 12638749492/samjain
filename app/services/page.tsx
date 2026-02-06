"use client";

import { motion, useReducedMotion } from "framer-motion";
import { serviceCategories } from "../../data/services";
import Link from "next/link";

export default function ServicesPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="section-padding py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-vision-cyan">Services</p>
        <h1 className="mt-4 text-4xl font-semibold">Premium services crafted for growth</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Explore our full-stack creative and marketing services designed for businesses,
          creators, and educational institutions across Karnataka.
        </p>
      </div>

      <div className="mt-10 grid gap-6">
        {serviceCategories.map((category, index) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{category.description}</p>
              </div>
              <Link
                href="/contact"
                className="text-sm font-semibold text-vision-cyan focus-outline"
              >
                Get a quote →
              </Link>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.items.map((item) => (
                <li key={item.name} className="glass rounded-2xl p-4">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{item.kn}</p>
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
