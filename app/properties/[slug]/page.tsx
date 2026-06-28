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
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-700 to-amber-500" />
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">{property.type}</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">{property.title}</h1>
          </div>
          <div className="rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700">{property.status}</div>
        </div>
        <p className="text-base leading-8 text-slate-600">{property.description}</p>
        <div className="grid gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 sm:grid-cols-3">
          <div>
            <p className="text-sm text-slate-500">Price</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.price}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Bedrooms</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.bedrooms}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Bathrooms</p>
            <p className="mt-1 text-xl font-semibold text-slate-950">{property.bathrooms}</p>
          </div>
        </div>
        <p className="text-sm leading-7 text-slate-600">Area: {property.area}</p>
        <Link href="/" className="inline-flex w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700">
          ← Back to homepage
        </Link>
      </div>
    </main>
  );
}
