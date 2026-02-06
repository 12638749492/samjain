"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems } from "../../data/portfolio";
import PortfolioCard from "../components/PortfolioCard";

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [items, setItems] = useState(portfolioItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/portfolio");
        if (!response.ok) return;
        const payload = await response.json();
        if (payload?.data?.length) {
          setItems(payload.data);
        }
      } catch {
        setItems(portfolioItems);
      }
    };

    fetchItems();
  }, []);

  const categories = ["All", ...new Set(items.map((item) => item.category))];

  const filtered =
    active === "All" ? items : items.filter((item) => item.category === active);

  return (
    <div className="section-padding py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-vision-cyan">Portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold">Instagram-style creative grid</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Explore signature campaigns, thumbnails, and growth visuals built for Karnataka
          brands and creators.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`focus-outline rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${
              active === category
                ? "bg-vision-cyan text-slate-900"
                : "glass text-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
