import Link from "next/link";
import { properties } from "../../lib/content";
import { MockChatbot } from "../../components/mock-chatbot";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50/70 px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">Properties</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Featured property collection</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-slate-700 transition hover:text-teal-700">← Back to homepage</Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {properties.map((property) => (
            <article key={property.slug} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-br from-slate-900 via-teal-800 to-cyan-500" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">{property.type}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">{property.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{property.description}</p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                  <span>{property.bedrooms} Beds</span>
                  <span>{property.bathrooms} Baths</span>
                  <span>{property.area}</span>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-sm text-slate-600">{property.location}</p>
                  <Link href={`/properties/${property.slug}`} className="text-sm font-semibold text-slate-700 transition hover:text-teal-700">View details →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <MockChatbot />
    </main>
  );
}
