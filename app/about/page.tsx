import Link from "next/link";
import { MockChatbot } from "../../components/mock-chatbot";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">About</p>
        <h1 className="text-3xl font-semibold text-slate-950">About Mark Estrella</h1>
        <p className="text-base leading-8 text-slate-600">
          This sample page presents the professional profile and approach behind the website so every section has a real destination.
        </p>
        <div className="grid gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h2 className="font-semibold text-slate-950">Client Focus</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">Support for home buyers, sellers, investors, and families.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h2 className="font-semibold text-slate-950">Reliable Follow-up</h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">A simple structure to build trust and generate inquiries.</p>
          </div>
        </div>
        <Link href="/" className="inline-flex w-fit rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700">
          ← Back to homepage
        </Link>
      </div>
      <MockChatbot />
    </main>
  );
}
