import ContactForm from '@/components/contact-form';
import Reveal from '@/components/reveal';

export const metadata = {
  title: 'Contact VisionCut',
  description: 'Get in touch with VisionCut for digital marketing, design, and video production in Karnataka.'
};

const contacts = [
  { label: 'Email', value: 'hello@visioncut.in', href: 'mailto:hello@visioncut.in' },
  { label: 'Instagram', value: '@visioncut', href: 'https://instagram.com' },
  { label: 'Telegram', value: '@visioncut_agency', href: 'https://t.me' },
  { label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' }
];

export default function ContactPage() {
  return (
    <div className="px-4 py-12 md:py-16 max-w-6xl mx-auto space-y-10">
      <Reveal>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <h1 className="text-3xl md:text-5xl font-semibold">Let&apos;s grow your brand together</h1>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Share your requirements and our team will craft a custom plan for your business or institution.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {contacts.map((contact) => (
            <Reveal key={contact.label}>
              <a
                href={contact.href}
                className="glass rounded-3xl p-5 flex items-center justify-between hover:-translate-y-1 transition"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{contact.label}</p>
                  <p className="text-base font-semibold">{contact.value}</p>
                </div>
                <span className="text-aurora">→</span>
              </a>
            </Reveal>
          ))}
          <Reveal>
            <div className="glass rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Location</p>
              <p className="text-base font-semibold">Karnataka, India</p>
              <div className="mt-4 rounded-2xl overflow-hidden border border-white/10">
                <iframe
                  title="VisionCut map"
                  src="https://maps.google.com/maps?q=Karnataka&t=&z=6&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-48"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="glass rounded-3xl p-6">
          <h2 className="text-xl font-semibold">Project enquiry</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Fill out the form and we&apos;ll respond within 24 hours.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
