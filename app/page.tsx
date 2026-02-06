import Hero from "./components/Hero";
import ServicePreview from "./components/ServicePreview";
import StatsCounter from "./components/StatsCounter";
import BlogCard from "./components/BlogCard";
import { getFeaturedBlogs } from "../lib/content";
import Link from "next/link";

export default async function HomePage() {
  const blogs = await getFeaturedBlogs(3);

  return (
    <div>
      <Hero />

      <section className="section-padding py-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="text-3xl font-semibold">Services Preview</h2>
            <Link
              href="/services"
              className="text-sm font-semibold text-vision-cyan focus-outline"
            >
              Explore All Services →
            </Link>
          </div>
          <ServicePreview />
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="grid gap-6 lg:grid-cols-4">
          <StatsCounter label="Campaigns Delivered" value={320} />
          <StatsCounter label="Creative Assets Produced" value={2400} />
          <StatsCounter label="Brands Supported" value={85} />
          <StatsCounter label="Average ROAS Lift" value={4} suffix="x" />
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="glass rounded-3xl p-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-3xl font-semibold">Trusted by growth-focused teams</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              VisionCut partners with founders, creators, and academic institutions to
              deliver premium design systems, high-converting content, and full-funnel
              marketing. We focus on performance, not vanity metrics.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-slate-400">
              <span className="glass px-4 py-2 rounded-full">SEO Growth</span>
              <span className="glass px-4 py-2 rounded-full">Performance Ads</span>
              <span className="glass px-4 py-2 rounded-full">Creative Direction</span>
              <span className="glass px-4 py-2 rounded-full">Content Systems</span>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-slate-600 dark:text-slate-300">Client success rate</p>
              <p className="text-4xl font-semibold gradient-text">98%</p>
            </div>
            <div className="glass rounded-2xl p-6">
              <p className="text-sm text-slate-600 dark:text-slate-300">Average lead growth</p>
              <p className="text-4xl font-semibold gradient-text">3.6x</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding py-16">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h2 className="text-3xl font-semibold">Latest Insights</h2>
          <Link href="/blog" className="text-sm font-semibold text-vision-cyan">
            View All Blogs →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </section>
    </div>
  );
}
