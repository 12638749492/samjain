"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CounterProps {
  label: string;
  value: number;
  suffix?: string;
}

export default function StatsCounter({ label, value, suffix = "+" }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 1200;
            const startTime = performance.now();

            const step = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              start = Math.floor(progress * value);
              setDisplayValue(start);
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };

            requestAnimationFrame(step);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, shouldReduceMotion]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      className="glass rounded-2xl px-6 py-6 text-center"
    >
      <p className="text-3xl font-semibold gradient-text">{displayValue}{suffix}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </motion.div>
  );
}
