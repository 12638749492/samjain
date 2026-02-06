'use client';

import AnimatedCounter from './animated-counter';
import { motion, useReducedMotion } from 'framer-motion';

interface Stat {
  label: string;
  value: number;
}

export default function Stats({ stats }: { stats: Stat[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid gap-4 md:grid-cols-4"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="glass rounded-3xl p-6">
          <AnimatedCounter value={stat.value} />
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
