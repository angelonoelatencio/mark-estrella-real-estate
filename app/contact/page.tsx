import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-5xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Contact</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-950">Let&apos;s talk about your next move.</h1>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This sample contact page keeps the inquiry experience consistent and prevents any dead-end navigation.
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>📍 Quezon City, Philippines</p>
            <p>📞 +63 912 345 6789</p>
            <p>✉️ hello@markestrella.com</p>
          </div>
        </div>

        <form className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-slate-700">
              Name
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="Your name" />
            </label>
            <label className="text-sm text-slate-700">
              Email
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="you@example.com" />
            </label>
          </div>
          <label className="mt-4 block text-sm text-slate-700">
            Message
            <textarea className="mt-2 min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none" placeholder="Tell us what you are looking for..." />
          </label>
          <button type="button" className="mt-5 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
            Send inquiry
          </button>
        </form>
      </div>

      <div className="mx-auto mt-6 flex max-w-5xl justify-start">
        <Link href="/" className="inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-amber-700">
          ← Back to homepage
        </Link>
      </div>
    </main>
  );
}
