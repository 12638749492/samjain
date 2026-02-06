"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" }
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastY && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="section-padding">
        <nav
          className="glass flex items-center justify-between rounded-2xl px-6 py-4 mt-4"
          aria-label="Primary navigation"
        >
          <Link href="/" className="text-lg font-semibold tracking-[0.2em] uppercase">
            VisionCut
          </Link>
          <div className="hidden lg:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative group focus-outline"
              >
                <span>{item.label}</span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-vision-cyan to-vision-purple transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen((prev) => !prev)}
              className="lg:hidden focus-outline rounded-full border border-white/20 px-3 py-2 text-xs uppercase tracking-[0.2em]"
            >
              Menu
            </button>
            <Link
              href="/contact"
              className="ripple-button focus-outline rounded-full bg-gradient-to-r from-vision-purple to-vision-rose px-5 py-2 text-sm font-semibold"
            >
              Contact Now
            </Link>
          </div>
        </nav>
        {open ? (
          <div className="glass mt-4 rounded-2xl p-6 lg:hidden">
            <div className="flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="focus-outline"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </motion.header>
  );
}
