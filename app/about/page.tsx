import Reveal from '@/components/reveal';

export const metadata = {
  title: 'About VisionCut',
  description: 'Learn about VisionCut, our mission, vision, and core values in Karnataka.'
};

export default function AboutPage() {
  return (
    <div className="px-4 py-12 md:py-16 max-w-5xl mx-auto space-y-10">
      <Reveal>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Crafting premium brand growth for Karnataka</h1>
          <p className="text-base text-slate-600 dark:text-slate-300">
            VisionCut is a creative digital marketing agency headquartered in Karnataka, India. We partner with businesses,
            creators, and educational institutions to craft design, video, and marketing systems that convert.
          </p>
        </div>
      </Reveal>

      <section className="grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="glass rounded-3xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">Owner</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Sam Jain leads VisionCut with a focus on storytelling, performance marketing, and technology-led growth for
              regional brands.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass rounded-3xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">Vision</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Build Karnataka&apos;s most trusted creative growth partner for ambitious brands and institutions.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass rounded-3xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Deliver high-end design, video, and marketing systems that help clients win attention and drive sustainable
              revenue.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="glass rounded-3xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">Core Values</h2>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Creative excellence with measurable outcomes.</li>
              <li>• Regional storytelling with global-grade execution.</li>
              <li>• Transparent collaboration and long-term partnerships.</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
