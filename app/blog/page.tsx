import BlogGrid from '@/components/blog-grid';
import Reveal from '@/components/reveal';
import { getBlogPosts } from '@/lib/content';
import Script from 'next/script';

export const metadata = {
  title: 'Blog | VisionCut',
  description: 'VisionCut blog for digital marketing insights, SEO tips, and creative strategy for Karnataka brands.'
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'VisionCut Blog',
    description: 'Digital marketing insights from VisionCut.'
  };

  return (
    <div className="px-4 py-12 md:py-16 max-w-6xl mx-auto space-y-10">
      <Reveal>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Blog</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Ideas, growth playbooks, and creative strategy</h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl">
            Discover multilingual marketing insights crafted for businesses, creators, and educators in Karnataka.
          </p>
        </div>
      </Reveal>
      <BlogGrid posts={posts} />
      <Script id="visioncut-blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
