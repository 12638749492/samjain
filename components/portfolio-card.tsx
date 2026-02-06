'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  instagramUrl: string;
  alt: string;
}

export default function PortfolioCard({ title, category, image, instagramUrl, alt }: PortfolioCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noreferrer"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/10"
    >
      <div
        className="h-60 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-xs uppercase tracking-wide">{category}</p>
        <p className="text-base font-semibold">{title}</p>
      </div>
    </motion.a>
  );
}
