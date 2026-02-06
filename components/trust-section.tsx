import Reveal from './reveal';

export default function TrustSection({ signals }: { signals: string[] }) {
  return (
    <Reveal>
      <section className="rounded-3xl border border-white/10 bg-white/70 dark:bg-white/5 px-6 py-10">
        <h2 className="text-xl font-semibold">Trust & credibility</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
          {signals.map((signal) => (
            <li key={signal} className="flex items-start gap-2">
              <span className="text-aurora">◆</span>
              <span>{signal}</span>
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
}
