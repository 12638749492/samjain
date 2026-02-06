import Reveal from '@/components/reveal';
import ServiceCard from '@/components/service-card';
import { getServices } from '@/lib/content';
import Script from 'next/script';

export const metadata = {
  title: 'Services | VisionCut',
  description: 'Explore VisionCut services in design, video, digital marketing, SEO, and creative support.'
};

export default async function ServicesPage() {
  const services = await getServices();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'VisionCut',
      areaServed: 'Karnataka'
    }
  };

  return (
    <div className="px-4 py-12 md:py-16 max-w-6xl mx-auto space-y-12">
      <Reveal>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Services</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Creative services designed for scale</h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            VisionCut delivers end-to-end digital marketing, design, and video production with English + Kannada support for
            regional audiences.
          </p>
        </div>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <ServiceCard
            key={service.category}
            icon={service.icon}
            title={service.category}
            summary={service.summary}
            items={service.items}
          />
        ))}
      </div>
      <Script id="visioncut-services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
