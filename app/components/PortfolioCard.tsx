"use client";

import { motion } from "framer-motion";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

export default function PortfolioCard({
  title,
  category,
  image,
  link,
  description
}: PortfolioCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative overflow-hidden rounded-2xl glass"
      whileHover={{ scale: 1.02 }}
    >
      <div
        className="h-56 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs uppercase tracking-[0.2em] text-vision-cyan">
          {category}
        </p>
        <p className="mt-2 text-lg font-semibold">{title}</p>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
      </div>
    </motion.a>
  );
}
