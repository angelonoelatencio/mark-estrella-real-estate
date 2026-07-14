"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { properties, siteContent } from "../lib/content";
import { MockChatbot } from "../components/mock-chatbot";

const heroImages = [
  { src: "/picco_terra_1.jpg", label: "Picco Terraces" },
  { src: "/mvillage_1.jpg", label: "MVillage" },
] as const;

function getShowcaseImage(index: number) {
  return heroImages[index % heroImages.length];
}

export default function Home() {
  const propertiesForSale = properties.filter(
    (property) => !/sold/i.test(property.status),
  );
  const listingPool =
    propertiesForSale.length > 0 ? propertiesForSale : properties;

  const [activePropertyIndex, setActivePropertyIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const propertyCardRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    if (listingPool.length <= 1) {
      return;
    }

    const updateActiveFromViewport = () => {
      const viewportAnchor = globalThis.innerHeight * 0.5;
      let nearestIndex = 0;
      let nearestDistance = Number.POSITIVE_INFINITY;

      propertyCardRefs.current.forEach((card, index) => {
        if (!card) {
          return;
        }

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportAnchor);

        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestIndex = index;
        }
      });

      setActivePropertyIndex((current) =>
        current === nearestIndex ? current : nearestIndex,
      );
    };

    updateActiveFromViewport();
    globalThis.addEventListener("scroll", updateActiveFromViewport, {
      passive: true,
    });
    globalThis.addEventListener("resize", updateActiveFromViewport);

    return () => {
      globalThis.removeEventListener("scroll", updateActiveFromViewport);
      globalThis.removeEventListener("resize", updateActiveFromViewport);
    };
  }, [listingPool.length]);

  useEffect(() => {
    let frame: number | null = null;

    const onScroll = () => {
      if (frame !== null) {
        return;
      }

      frame = globalThis.requestAnimationFrame(() => {
        setScrollY(globalThis.scrollY);
        frame = null;
      });
    };

    onScroll();
    globalThis.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (frame !== null) {
        globalThis.cancelAnimationFrame(frame);
      }
      globalThis.removeEventListener("scroll", onScroll);
    };
  }, []);

  const safeActiveIndex =
    listingPool.length > 0 ? activePropertyIndex % listingPool.length : 0;

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_#f7f5f1_0%,_#efe6d8_42%,_#f9f7f3_75%)] text-slate-900">
      <section id="properties" className="w-full">
        <div className="space-y-4 lg:snap-y lg:snap-mandatory">
          {listingPool.map((property, index) => (
            <article
              key={property.slug}
              ref={(element) => {
                propertyCardRefs.current[index] = element;
              }}
              className={`group relative overflow-hidden border-y bg-slate-950 shadow-[0_18px_70px_-35px_rgba(15,23,42,0.75)] transition duration-[650ms] ease-out hover:shadow-[0_28px_85px_-35px_rgba(15,23,42,0.9)] lg:min-h-[82vh] lg:snap-start ${
                index === safeActiveIndex
                  ? "border-amber-200/70"
                  : "border-amber-50/20"
              }`}
              style={{
                opacity: Math.max(
                  0.66,
                  1 - Math.abs(index - safeActiveIndex) * 0.12,
                ),
                transform: `scale(${Math.max(0.975, 1 - Math.abs(index - safeActiveIndex) * 0.01)})`,
              }}
            >
              {index === safeActiveIndex && (
                <div className="absolute left-0 top-0 z-20 h-full w-1 bg-gradient-to-b from-amber-100 via-amber-300 to-amber-500" />
              )}
              <div className="relative min-h-[420px] overflow-hidden lg:min-h-[82vh]">
                <Image
                  src={getShowcaseImage(index).src}
                  alt={`${property.title} preview`}
                  fill
                  className="object-cover opacity-85 transition duration-[900ms] ease-out group-hover:scale-110"
                  style={{
                    transform: `translateY(${Math.max(-28, Math.min(28, (scrollY - index * 260) * 0.055))}px) scale(1.05)`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/92 via-slate-950/52 to-slate-950/18 transition duration-[650ms] ease-out group-hover:from-slate-950/78" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_200px_at_0%_0%,rgba(120,53,15,0.32),transparent_72%),radial-gradient(200px_200px_at_100%_0%,rgba(120,53,15,0.32),transparent_72%),radial-gradient(220px_220px_at_0%_100%,rgba(2,6,23,0.65),transparent_74%),radial-gradient(220px_220px_at_100%_100%,rgba(2,6,23,0.65),transparent_74%)]" />
                <div className="pointer-events-none absolute inset-[1px] border border-amber-100/15" />

                <div className="absolute left-6 top-6 border border-amber-100/40 bg-amber-50/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-950 sm:left-8 sm:top-8">
                  #{String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute right-6 top-6 border border-amber-200/40 bg-amber-100/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-900 sm:right-8 sm:top-8">
                  {property.status}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8 lg:p-10">
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div className="w-full max-w-5xl border border-amber-100/20 bg-slate-950/42 p-4 backdrop-blur-[3px] sm:p-6">
                      <p className="font-heading text-sm tracking-[0.08em] text-amber-200 sm:text-base">
                        {property.type}
                      </p>
                      <h3 className="font-heading mt-3 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[0.01em] sm:text-5xl lg:text-6xl">
                        {property.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200/92 sm:text-[0.95rem]">
                        {property.description}
                      </p>

                      <div
                        className={`mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-[0.18em] text-amber-50 sm:text-sm ${
                          index % 2 === 0
                            ? "justify-start"
                            : "justify-start sm:justify-end"
                        }`}
                      >
                        <span className="border border-amber-100/40 bg-amber-100/10 px-3 py-1">
                          {property.location}
                        </span>
                        <span className="border border-amber-100/40 bg-amber-100/10 px-3 py-1">
                          {property.bedrooms} Beds
                        </span>
                        <span className="border border-amber-100/40 bg-amber-100/10 px-3 py-1">
                          {property.bathrooms} Baths
                        </span>
                        <span className="border border-amber-100/40 bg-amber-100/10 px-3 py-1">
                          {property.area}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`mt-6 flex flex-wrap gap-3 opacity-100 transition duration-500 ease-out lg:pointer-events-none lg:opacity-0 lg:group-hover:pointer-events-auto lg:group-hover:opacity-100 lg:group-focus-within:pointer-events-auto lg:group-focus-within:opacity-100 ${
                      index % 2 === 0 ? "justify-start" : "justify-start sm:justify-end"
                    }`}
                  >
                    <Link
                      href="/contact"
                      className="border border-amber-100 bg-amber-50 px-5 py-2 text-sm font-semibold text-amber-950 transition hover:bg-amber-100"
                    >
                      Inquire now
                    </Link>
                    <Link
                      href={`/properties/${property.slug}`}
                      className="border border-amber-100/50 px-5 py-2 text-sm font-semibold text-amber-50 transition hover:border-amber-200 hover:text-amber-100"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="font-heading text-xl tracking-[0.08em] text-amber-700">
              Sales focused setup
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold leading-[1.06] tracking-[0.01em] text-slate-950">
              Designed to move buyers from browsing to inquiry.
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600">
              The layout now prioritizes active inventory first, then supporting
              trust and agent credibility. This keeps high-intent users close to
              listings and contact actions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {siteContent.services.map((service: string) => (
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-14"
      >
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
          <p className="font-heading text-xl tracking-[0.08em] text-amber-700">
            About Mark
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold leading-[1.06] tracking-[0.01em] text-slate-950">
            A polished and approachable real-estate partner.
          </h2>
          <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600">
            {siteContent.about.bio}
          </p>
          <div className="mt-6 space-y-3 text-sm text-slate-700">
            {siteContent.about.highlights.map((item: string) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm sm:grid-cols-2">
          {siteContent.achievements.map(
            (item: { title: string; description: string }) => (
              <div
                key={item.title}
                className="rounded-[1.25rem] border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
                  {item.title}
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-heading text-xl tracking-[0.08em] text-amber-300">
                Ready to move forward?
              </p>
              <h2 className="font-heading mt-2 text-3xl font-semibold leading-[1.06] tracking-[0.01em]">
                Let&apos;s turn interest into a real conversation.
              </h2>
              <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-300">
                Whether you are buying, selling, or exploring investment
                opportunities, the next step is simple and direct.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Book a consultation
              </Link>
              <a
                href="https://m.me/markestrella"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-100"
              >
                Open Messenger
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-heading text-xl tracking-[0.08em] text-amber-700">
              Credibility
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold leading-[1.06] tracking-[0.01em] text-slate-950">
              A confident first impression for buyers and sellers.
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-600">
              This preview highlights the professionalism, responsiveness, and
              clarity clients expect from a modern real estate specialist.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Trusted guidance",
                text: "Clear support from first inquiry to final follow-up.",
              },
              {
                title: "Fast response",
                text: "Easy contact choices for urgent questions and consultations.",
              },
              {
                title: "Mobile-friendly",
                text: "Designed to feel smooth on phones, tablets, and desktops.",
              },
              {
                title: "Future-ready",
                text: "Built to grow with richer listings, photos, and client stories.",
              },
            ].map((item: { title: string; text: string }) => (
              <div
                key={item.title}
                className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5"
              >
                <p className="font-semibold text-slate-950">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10 lg:py-14"
      >
        <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="font-heading text-xl tracking-[0.08em] text-amber-300">
              Contact
            </p>
            <h2 className="font-heading mt-3 text-3xl font-semibold leading-[1.06] tracking-[0.01em]">
              Let&apos;s talk about your next move.
            </h2>
            <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-slate-300">
              Reach out for property inquiries, consultation requests, or to
              discuss your next investment.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <p>📍 Quezon City, Philippines</p>
              <p>📞 +63 912 345 6789</p>
              <p>✉️ hello@markestrella.com</p>
            </div>
            <a
              href="https://m.me/markestrella"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-amber-200 px-5 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-100"
            >
              Chat on Facebook Messenger
            </a>
          </div>

          <form className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-sm text-slate-300"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="text-sm text-slate-300"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="contact-message"
                className="text-sm text-slate-300"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                className="mt-2 min-h-32 w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none"
                placeholder="Tell us what you are looking for..."
              ></textarea>
            </div>
            <button
              type="button"
              className="mt-5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Send inquiry
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80 px-6 py-8 text-sm text-slate-600 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <p>© 2026 Mark Estrella. Sample website for launch preparation.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="transition hover:text-amber-700">
              About
            </Link>
            <Link href="/properties" className="transition hover:text-amber-700">
              Properties
            </Link>
            <Link href="/contact" className="transition hover:text-amber-700">
              Contact
            </Link>
          </div>
        </div>
      </footer>
      <MockChatbot />
    </main>
  );
}
