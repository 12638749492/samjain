'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
}

export default function AnimatedCounter({ value, suffix = '+' }: AnimatedCounterProps) {
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const duration = 1200;
    const step = (timestamp: number) => {
      if (!startRef.current) {
        startRef.current = timestamp;
      }
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value, reduceMotion]);

  return (
    <span className="text-3xl font-semibold">
      {display}
      {suffix}
    </span>
  );
}
