"use client";

import { useEffect, useMemo, useState } from "react";
import { blogSeeds } from "../../data/blogs";
import BlogCard from "../components/BlogCard";

interface BlogItem {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  publishedAt?: string;
}

export default function BlogPage() {
  const [active, setActive] = useState("All");
  const [blogs, setBlogs] = useState<BlogItem[]>(blogSeeds);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs");
        if (!response.ok) return;
        const payload = await response.json();
        if (payload?.data?.length) {
          setBlogs(
            payload.data.map((blog: BlogItem) => ({
              ...blog,
              readTime: blog.readTime || "5 min read",
              date: blog.publishedAt
                ? new Date(blog.publishedAt).toISOString().slice(0, 10)
                : blog.date
            }))
          );
        }
      } catch {
        setBlogs(blogSeeds);
      }
    };

    fetchBlogs();
  }, []);
  const categories = useMemo(
    () => ["All", ...new Set(blogs.map((blog) => blog.category))],
    [blogs]
  );

  const filtered =
    active === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === active);

  return (
    <div className="section-padding py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-vision-cyan">Blog</p>
        <h1 className="mt-4 text-4xl font-semibold">Insights for modern marketers</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Practical strategies, SEO guidance, and creative playbooks tailored for Karnataka
          brands. Discover ideas and scale your digital presence.
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
                ? "bg-vision-purple text-white"
                : "glass text-slate-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {filtered.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </div>
  );
}
