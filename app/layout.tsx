import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'VisionCut | Digital Marketing Agency in Karnataka',
  description:
    'VisionCut is a creative digital marketing agency in Karnataka offering design, video, and growth marketing for brands, creators, and educational institutions.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://visioncut.in'),
  openGraph: {
    title: 'VisionCut | Digital Marketing Agency in Karnataka',
    description:
      'Premium design, video editing, and digital marketing services tailored for businesses and institutions in Karnataka.',
    url: '/',
    siteName: 'VisionCut',
    type: 'website'
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
