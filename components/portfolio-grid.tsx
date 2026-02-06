'use client';

import { useMemo, useState } from 'react';
import PortfolioCard from './portfolio-card';

interface Portfolio {
  title: string;
  category: string;
  image: string;
  instagramUrl: string;
  alt: string;
}

export default function PortfolioGrid({ items }: { items: Portfolio[] }) {
  const categories = useMemo(() => ['All', ...new Set(items.map((item) => item.category))], [items]);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = items.filter((item) => activeCategory === 'All' || item.category === activeCategory);

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
        {filtered.map((item) => (
          <PortfolioCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
