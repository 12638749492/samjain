'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed');
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-live="polite">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          required
          placeholder="Full name"
          className="rounded-2xl border border-white/20 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="rounded-2xl border border-white/20 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm"
        />
      </div>
      <input
        name="phone"
        placeholder="Phone number"
        className="w-full rounded-2xl border border-white/20 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm"
      />
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about your project"
        className="w-full rounded-2xl border border-white/20 bg-white/80 dark:bg-white/5 px-4 py-3 text-sm"
      />
      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-white shadow-glow btn-ripple"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending...' : 'Submit Message'}
      </button>
      {status === 'success' && <p className="text-sm text-green-500">Message received! We will reply soon.</p>}
      {status === 'error' && <p className="text-sm text-red-500">Something went wrong. Please try again.</p>}
    </form>
  );
}
