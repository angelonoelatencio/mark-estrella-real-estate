import Link from "next/link";
import { properties, siteContent } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.08),_transparent_35%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-sm backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Mark Estrella</p>
            <p className="text-sm text-slate-600">Real Estate Property Specialist</p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
            <Link href="/about" className="transition hover:text-amber-600">About</Link>
            <Link href="/properties" className="transition hover:text-amber-600">Properties</Link>
            <Link href="/contact" className="transition hover:text-amber-600">Contact</Link>
          </nav>
        </header>

        <div className="grid items-center gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_-24px_rgba(15,23,42,0.3)] lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-medium text-amber-700">
              Trusted by buyers, sellers, and OFW investors
            </div>
            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Find the right property with a specialist who understands your goals.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                {siteContent.hero.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/properties"
                className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                View featured properties
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700"
              >
                Book a consultation
              </Link>
            </div>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {siteContent.stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-semibold text-slate-950">{item.value}</p>
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-6 text-white">
            <div className="rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 p-8 text-center shadow-inner">
              <p className="text-sm uppercase tracking-[0.3em] text-white/80">Launch-ready sample</p>
              <h2 className="mt-3 text-3xl font-semibold">Professional presence for today&apos;s market</h2>
              <p className="mt-4 text-sm leading-7 text-white/80">
                This initial build includes the core sections from the project brief so the website can go live quickly while future images and integrations are added.
              </p>
            </div>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">• Property matching for home buyers and investors</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">• Seller support, consultations, and follow-up</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">• Mobile-friendly experience from day one</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-8 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">About Mark</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">A professional and approachable real-estate partner.</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            {siteContent.about.bio}
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            {siteContent.about.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm sm:grid-cols-2">
          {siteContent.achievements.map((item) => (
            <div key={item.title} className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="properties" className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Featured listings</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Sample properties ready for expansion.</h2>
          </div>
          <Link href="/contact" className="text-sm font-semibold text-slate-700 transition hover:text-amber-600">
            Request property updates →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {properties.map((property) => (
            <article key={property.slug} className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-700 to-amber-500" />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{property.type}</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-950">{property.title}</h3>
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">{property.status}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">{property.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span>{property.bedrooms} Beds</span>
                  <span>{property.bathrooms} Baths</span>
                  <span>{property.area}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-950">{property.price}</p>
                  <Link href={`/properties/${property.slug}`} className="text-sm font-semibold text-slate-700 transition group-hover:text-amber-600">
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Why choose this website</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-950">Built to support lead generation and future expansion.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              The initial build focuses on fast performance, clear messaging, and a structure that can easily grow with new properties, testimonials, and integrations.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.services.map((service) => (
              <div key={service} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">Let&apos;s talk about your next move.</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">
              Reach out for property inquiries, consultation requests, or to discuss your next investment.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>📍 Quezon City, Philippines</p>
              <p>📞 +63 912 345 6789</p>
              <p>✉️ hello@markestrella.com</p>
            </div>
            <a href="https://m.me/markestrella" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-400">
              Chat on Facebook Messenger
            </a>
          </div>

          <form className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Your name" />
              </label>
              <label className="text-sm text-slate-300">
                Email
                <input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="you@example.com" />
              </label>
            </div>
            <label className="mt-4 block text-sm text-slate-300">
              Message
              <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none" placeholder="Tell us what you are looking for..." />
            </label>
            <button type="button" className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80 px-6 py-8 text-sm text-slate-600 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p>© 2026 Mark Estrella. Sample website for launch preparation.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="transition hover:text-amber-600">About</Link>
            <Link href="/properties" className="transition hover:text-amber-600">Properties</Link>
            <Link href="/contact" className="transition hover:text-amber-600">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
