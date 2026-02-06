'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
}

export default function BlogCard({ title, slug, excerpt, featuredImage, category, author, readTime, date }: BlogCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="group rounded-3xl overflow-hidden border border-white/10 bg-white/70 dark:bg-white/5 shadow-soft hover:-translate-y-2 transition"
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${featuredImage})` }}
          role="img"
          aria-label={title}
        />
        <div className="absolute top-4 left-4 rounded-full bg-black/60 text-white text-xs px-3 py-1">
          {category}
        </div>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">{excerpt}</p>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-3">
          <span>{author}</span>
          <span>•</span>
          <span>{readTime}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}`} className="text-sm font-semibold text-aurora">
          Read article →
        </Link>
      </div>
    </motion.article>
  );
}
