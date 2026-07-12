import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "../../../lib/content";

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export default async function PropertyDetail({ params }: Readonly<{ params: Promise<{ slug: string }> }>) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);

  if (!property) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50/70 px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-teal-800 to-cyan-500" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">{property.type}</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">{property.title}</h1>
            <p className="mt-2 text-sm text-slate-600">{property.location}</p>
          </div>
          <div className="rounded-full bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">{property.status}</div>
        </div>
        <p className="text-base leading-8 text-slate-600">{property.description}</p>
        <div className="grid gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-slate-500">Bedrooms</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.bedrooms}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Bathrooms</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.bathrooms}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Area</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.area}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Lot size</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.lotSize}</p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.5rem] border border-teal-100 bg-teal-50/70 p-5">
            <div className="relative h-56 overflow-hidden rounded-[1.25rem] border border-white/70 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_35%)]">
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(15,118,110,0.12),_rgba(2,132,199,0.2))]" />
              <svg viewBox="0 0 320 220" className="h-full w-full">
                <path d="M20 180 C60 120, 100 110, 140 140 S220 190, 300 100" stroke="#0f766e" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M30 170 C95 130, 130 130, 170 160 S240 190, 290 130" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinecap="round" />
                <rect x="82" y="80" width="88" height="62" rx="12" fill="#ffffff" opacity="0.85" />
                <circle cx="240" cy="70" r="38" fill="#f8fafc" opacity="0.92" />
                <circle cx="120" cy="120" r="8" fill="#0f766e" />
                <circle cx="240" cy="70" r="6" fill="#0f766e" />
              </svg>
              <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">Mock site map</div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{property.mapLabel}</p>
              <p>Coordinates: {property.coordinates}</p>
              <p>Suggested access point for a viewing tour and location preview.</p>
            </div>
          </div>

          <div className="space-y-4 rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Property details</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Year built</p>
                  <p className="mt-1 font-semibold text-slate-950">{property.yearBuilt}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">View</p>
                  <p className="mt-1 font-semibold text-slate-950">{property.view}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:col-span-2">
                  <p className="text-sm text-slate-500">Access</p>
                  <p className="mt-1 font-semibold text-slate-950">{property.access}</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Highlights</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {property.amenities.map((item: string) => (
                  <li key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Link href="/" className="inline-flex w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-teal-400 hover:text-teal-700">← Back to homepage</Link>
      </div>
    </main>
  );
}
