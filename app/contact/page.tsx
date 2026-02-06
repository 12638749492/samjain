"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(event.currentTarget);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setStatus("Thank you! We'll reach out shortly.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("Unable to send right now. Please try again later.");
    }
  };

  return (
    <div className="section-padding py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-vision-cyan">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold">Let’s Grow Your Brand</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Tell us about your goals and we will design a custom growth plan.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid gap-4">
          {[
            { label: "Email", value: "hello@visioncut.agency" },
            { label: "Instagram", value: "@visioncutstudio" },
            { label: "Telegram", value: "t.me/visioncut" },
            { label: "Phone", value: "+91 90000 12345" }
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-vision-cyan">
                {item.label}
              </p>
              <p className="mt-2 font-semibold">{item.value}</p>
            </div>
          ))}
          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-vision-cyan">
              Location
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Karnataka, India</p>
            <div className="mt-4 overflow-hidden rounded-xl">
              <iframe
                title="VisionCut location"
                src="https://maps.google.com/maps?q=Karnataka%20India&t=&z=6&ie=UTF8&iwloc=&output=embed"
                className="h-52 w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-4">
          <div>
            <label className="text-sm" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="company">
              Company / Brand
            </label>
            <input
              id="company"
              name="company"
              className="mt-2 w-full rounded-xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100"
              placeholder="Brand name"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="mt-2 w-full rounded-xl bg-white/80 dark:bg-slate-900/40 border border-slate-200/70 dark:border-white/10 px-4 py-3 text-sm text-slate-900 dark:text-slate-100"
              placeholder="Tell us about your project"
            />
          </div>
          <button
            type="submit"
            className="ripple-button focus-outline w-full rounded-full bg-gradient-to-r from-vision-cyan to-vision-purple px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Submit Request
          </button>
          {status ? <p className="text-xs text-slate-600 dark:text-slate-300">{status}</p> : null}
        </form>
      </div>
    </div>
  );
}
