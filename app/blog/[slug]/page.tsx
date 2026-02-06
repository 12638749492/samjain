import { getBlogBySlug } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import Script from 'next/script';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPageProps) {
  const post = await getBlogBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | VisionCut Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const post = await getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const toc = post.sections.map((section: { heading: string }) => ({
    id: section.heading.toLowerCase().replace(/\s+/g, '-'),
    label: section.heading
  }));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    datePublished: post.createdAt || new Date().toISOString(),
    image: post.featuredImage
  };

  return (
    <div className="px-4 py-12 md:py-16 max-w-4xl mx-auto space-y-10">
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{post.category}</p>
        <h1 className="text-3xl md:text-5xl font-semibold">{post.title}</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">{post.excerpt}</p>
        <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-3">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{formatDate(post.createdAt || new Date())}</span>
        </div>
      </header>

      <div className="rounded-3xl overflow-hidden border border-white/10">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.featuredImage})` }}
          role="img"
          aria-label={post.title}
        />
      </div>

      <aside className="glass rounded-3xl p-6 space-y-3">
        <h2 className="text-lg font-semibold">Table of contents</h2>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-aurora">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <article className="space-y-8">
        {post.sections.map((section: { heading: string; content: string }) => (
          <section key={section.heading} id={section.heading.toLowerCase().replace(/\s+/g, '-')} className="space-y-3">
            <h2 className="text-2xl font-semibold">{section.heading}</h2>
            <p className="text-base text-slate-600 dark:text-slate-300">{section.content}</p>
            <p className="text-base text-slate-600 dark:text-slate-300">
              Kannada note: VisionCut ನ ಸೃಜನಶೀಲ ತಂಡವು ಸ್ಥಳೀಯ ಬ್ರ್ಯಾಂಡ್‌ಗಳಿಗೆ multilingual growth ತಂತ್ರಗಳನ್ನು ರೂಪಿಸುತ್ತದೆ.
            </p>
          </section>
        ))}
      </article>

      <section className="rounded-3xl border border-white/10 bg-white/80 dark:bg-white/5 p-6 space-y-3">
        <h3 className="text-xl font-semibold">Need this strategy for your brand?</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Explore our <Link href="/services" className="text-aurora">digital marketing services</Link> or reach out to
          the team for a custom growth plan.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-aurora px-5 py-2 text-sm font-semibold text-white shadow-glow btn-ripple"
        >
          Start a project
        </Link>
      </section>

      <Script id="visioncut-blogpost-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </div>
  );
}
