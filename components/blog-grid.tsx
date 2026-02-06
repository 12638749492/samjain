'use client';

import { useMemo, useState } from 'react';
import BlogCard from './blog-card';

interface Blog {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  readTime: string;
  createdAt?: string;
}

export default function BlogGrid({ posts }: { posts: Blog[] }) {
  const categories = useMemo(() => ['All', ...new Set(posts.map((post) => post.category))], [posts]);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = posts.filter((post) => activeCategory === 'All' || post.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm border transition ${
              activeCategory === category
                ? 'bg-aurora text-white border-aurora'
                : 'border-white/20 text-slate-600 dark:text-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((post) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            slug={post.slug}
            excerpt={post.excerpt}
            featuredImage={post.featuredImage}
            category={post.category}
            author={post.author}
            readTime={post.readTime}
            date={post.createdAt ? new Date(post.createdAt).toLocaleDateString('en-IN') : 'Just now'}
          />
        ))}
      </div>
    </div>
  );
}
