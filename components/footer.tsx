import Link from 'next/link';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold">VisionCut</h2>
          <p className="mt-3 text-sm text-slate-300">
            Creative digital marketing agency in Karnataka helping brands, creators, and institutions grow with design,
            video, and performance marketing.
          </p>
          <p className="mt-4 text-xs text-slate-400">© 2024 VisionCut. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-slate-300 hover:text-white">
              {link.label}
            </Link>
          ))}
          <a href="mailto:hello@visioncut.in" className="text-slate-300 hover:text-white">
            hello@visioncut.in
          </a>
          <a href="tel:+919876543210" className="text-slate-300 hover:text-white">
            +91 98765 43210
          </a>
        </div>
      </div>
    </footer>
  );
}
