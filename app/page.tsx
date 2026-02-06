import Hero from '@/components/hero';
import Reveal from '@/components/reveal';
import ServiceCard from '@/components/service-card';
import Stats from '@/components/stats';
import TrustSection from '@/components/trust-section';
import BlogCard from '@/components/blog-card';
import PortfolioCard from '@/components/portfolio-card';
import { getBlogPosts, getPortfolioItems, getServices } from '@/lib/content';
import { stats, trustSignals } from '@/lib/data';
import Script from 'next/script';

export default async function HomePage() {
  const services = await getServices();
  const portfolioItems = await getPortfolioItems();
  const blogs = await getBlogPosts(3);
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'VisionCut',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://visioncut.in',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Karnataka',
      addressCountry: 'IN'
    },
    areaServed: 'Karnataka',
    sameAs: ['https://instagram.com']
  };

  return (
    <div className="space-y-20 px-4 py-10 md:py-16 max-w-6xl mx-auto">
      <Hero />

      <section className="space-y-6">
        <Reveal>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Services</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Full-stack marketing for modern brands</h2>
            </div>
            <a href="/services" className="text-sm font-semibold text-aurora">
              View all →
            </a>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {services.slice(0, 2).map((service) => (
            <ServiceCard
              key={service.category}
              icon={service.icon}
              title={service.category}
              summary={service.summary}
              items={service.items}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Reveal>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Impact</p>
            <h2 className="text-2xl md:text-3xl font-semibold">High-growth outcomes built in Karnataka</h2>
          </div>
        </Reveal>
        <Stats stats={stats} />
      </section>

      <section className="space-y-6">
        <Reveal>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Featured Work</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Instagram-ready creative showcases</h2>
            </div>
            <a href="/portfolio" className="text-sm font-semibold text-aurora">
              Explore portfolio →
            </a>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolioItems.slice(0, 3).map((item) => (
            <PortfolioCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <Reveal>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Insights</p>
              <h2 className="text-2xl md:text-3xl font-semibold">Latest growth playbooks</h2>
            </div>
            <a href="/blog" className="text-sm font-semibold text-aurora">
              View all →
            </a>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((post) => (
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
      </section>

      <TrustSection signals={trustSignals} />
      <Script
        id="visioncut-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
