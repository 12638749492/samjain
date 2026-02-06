import Link from "next/link";

export default function Footer() {
  return (
    <footer className="section-padding py-12">
      <div className="glass rounded-3xl p-10 grid gap-8 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">VisionCut</p>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Creative digital marketing agency in Karnataka, India. We help businesses,
            creators, and educational institutions grow through design, marketing, and
            technology.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Explore</p>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/services" className="focus-outline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="focus-outline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="focus-outline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="focus-outline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <p className="mt-3">hello@visioncut.agency</p>
          <p>+91 90000 12345</p>
          <p className="mt-4 text-xs text-slate-400">© 2024 VisionCut Agency.</p>
        </div>
      </div>
    </footer>
  );
}
