import { blogSeeds } from "../../../data/blogs";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogSeeds.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const blog = blogSeeds.find((item) => item.slug === params.slug);

  if (!blog) {
    return { title: "Blog not found" };
  }

  return {
    title: `${blog.title} | VisionCut Blog`,
    description: blog.excerpt,
    alternates: { canonical: `/blog/${blog.slug}` }
  };
}

export default function BlogDetailPage({ params }: PageProps) {
  const blog = blogSeeds.find((item) => item.slug === params.slug);

  if (!blog) {
    return (
      <div className="section-padding py-16">
        <h1 className="text-3xl font-semibold">Blog not found</h1>
        <Link href="/blog" className="mt-4 inline-block text-vision-cyan">
          Back to Blog
        </Link>
      </div>
    );
  }

  const toc = blog.content.map((section, index) => ({
    id: `section-${index}`,
    title: section.split(".")[0]
  }));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    author: {
      "@type": "Organization",
      name: blog.author
    },
    datePublished: blog.date,
    dateModified: blog.date
  };

  return (
    <div className="section-padding py-16">
      <article className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.3em] text-vision-cyan">
          {blog.category}
        </p>
        <h1 className="mt-4 text-4xl font-semibold">{blog.title}</h1>
        <div className="mt-4 text-sm text-slate-400 flex items-center gap-3">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

        <div className="mt-8 glass rounded-2xl p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-vision-cyan">
            Table of contents
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {toc.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="focus-outline">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 space-y-8">
          {blog.content.map((paragraph, index) => (
            <section key={paragraph} id={`section-${index}`}>
              <h2 className="text-2xl font-semibold">
                {paragraph.split(".")[0]}
              </h2>
              <p className="mt-3 text-slate-600 dark:text-slate-300">{paragraph}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Ready to grow faster?</h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Explore our <Link href="/services" className="text-vision-cyan">SEO & Growth</Link>{" "}
            services or talk with a strategist.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-full bg-vision-purple px-6 py-3 text-sm font-semibold"
          >
            Book a Consultation
          </Link>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </div>
  );
}
