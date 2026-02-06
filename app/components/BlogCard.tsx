"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  category,
  author,
  date,
  readTime
}: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="glass rounded-2xl overflow-hidden group"
    >
      <div className="h-40 bg-gradient-to-br from-vision-purple/60 to-vision-cyan/40 group-hover:scale-105 transition-transform duration-300" />
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-vision-cyan">
          {category}
        </p>
        <Link href={`/blog/${slug}`} className="focus-outline">
          <h3 className="mt-3 text-lg font-semibold">{title}</h3>
        </Link>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {excerpt}
        </p>
        <div className="mt-4 text-xs text-slate-400 flex items-center gap-3">
          <span>{author}</span>
          <span>{date}</span>
          <span>{readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}
