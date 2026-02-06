'use client';

import { ReactNode } from 'react';
import ThemeProvider from '@/components/theme-provider';
import PageTransition from '@/components/page-transition';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <PageTransition>{children}</PageTransition>
    </ThemeProvider>
  );
}
