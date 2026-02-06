import PortfolioGrid from '@/components/portfolio-grid';
import Reveal from '@/components/reveal';
import { getPortfolioItems } from '@/lib/content';
import Script from 'next/script';

export const metadata = {
  title: 'Portfolio | VisionCut',
  description: 'Explore VisionCut portfolio highlights from branding, video, and digital marketing campaigns.'
};

export default async function PortfolioPage() {
  const items = await getPortfolioItems();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'VisionCut Portfolio',
    creator: 'VisionCut'
  };

  return (
    <div className="px-4 py-12 md:py-16 max-w-6xl mx-auto space-y-10">
      <Reveal>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Instagram-ready campaigns and branding</h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Browse our animated grid of visual storytelling built for Karnataka brands and creators.
          </p>
        </div>
      </Reveal>
      <PortfolioGrid items={items} />
      <Script id="visioncut-portfolio-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
