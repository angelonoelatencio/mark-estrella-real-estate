import Link from "next/link";
import { properties } from "@/lib/content";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Properties</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">Featured property collection</h1>
          </div>
          <Link href="/" className="text-sm font-semibold text-slate-700 transition hover:text-amber-600">
            ← Back to homepage
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {properties.map((property) => (
            <article key={property.slug} className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-700 to-amber-500" />
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">{property.type}</p>
                <h2 className="mt-2 text-xl font-semibold text-slate-950">{property.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{property.description}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-lg font-semibold text-slate-950">{property.price}</p>
                  <Link href={`/properties/${property.slug}`} className="text-sm font-semibold text-slate-700 transition hover:text-amber-600">
                    View details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
