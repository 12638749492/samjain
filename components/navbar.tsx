'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { motion, useReducedMotion } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;
      setHidden(currentScroll > lastScroll && currentScroll > 120);
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScroll]);

  return (
    <motion.header
      initial={false}
      animate={reduceMotion ? undefined : { y: hidden ? -90 : 0 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-midnight/70 border-b border-white/10"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          VisionCut<span className="text-aurora">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group transition"
            >
              <span>{link.label}</span>
              <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-gradient-to-r from-aurora to-neon transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="h-9 w-9 rounded-full border border-white/10 bg-white/20 dark:bg-white/5"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-aurora px-4 py-2 text-sm font-semibold text-white shadow-glow btn-ripple"
          >
            Contact Now
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="md:hidden h-9 w-9 rounded-full border border-white/10 bg-white/20 dark:bg-white/5"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-white/80 dark:bg-midnight/80 px-4 py-4 space-y-3 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="block" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-aurora px-4 py-2 text-sm font-semibold text-white shadow-glow btn-ripple"
            onClick={() => setOpen(false)}
          >
            Contact Now
          </Link>
        </div>
      )}
    </motion.header>
  );
}
