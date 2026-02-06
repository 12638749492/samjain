'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface ServiceItem {
  name: string;
  translation: string;
}

interface ServiceCardProps {
  icon: string;
  title: string;
  summary: string;
  items: ServiceItem[];
}

export default function ServiceCard({ icon, title, summary, items }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 30 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="glass p-6 rounded-3xl flex flex-col gap-4 hover:-translate-y-2 transition-transform"
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{summary}</p>
      </div>
      <ul className="space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.name} className="flex items-start gap-2">
            <span className="text-aurora">•</span>
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.translation}</p>
            </div>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
