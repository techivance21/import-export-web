'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Slide = {
  image: string;
  headline: string;
  subline: string;
};

type Props = {
  slides?: Slide[];
  intervalMs?: number;
  transitionMs?: number;
  showAssociations?: boolean;
};

export default function Hero({
  slides,
  intervalMs = 5200,
  transitionMs = 1100,
  showAssociations = true,
}: Props) {
  const SLIDES: Slide[] = useMemo(
    () =>
      slides?.length
        ? slides
        : [
            {
              image: '/hero1.jpg',
              headline: 'Global Export Management Since 1987',
              subline:
                'Helping Canadian manufacturers (SMEs) enter overseas markets with sourcing & financing support.',
            },
            {
              image: '/hero2.jpeg',
              headline: 'Products Across Food • Pharma • Hardware • Electronics',
              subline:
                'From FMCG to medical supplies and telecom equipment — compliant, reliable, end-to-end.',
            },
            {
              image: '/hero3.jpeg',
              headline: 'Serving 40+ Countries Across the Americas, Europe & MENA',
              subline:
                'Canada • USA • Jamaica offices, with long-standing partners across the Caribbean and beyond.',
            },
            {
              image: '/hero4.jpeg',
              headline: 'Registered & Trusted',
              subline:
                'WIN Exports • CME • CAFTHA • OATH — compliant operations with export finance facilitation.',
            },
          ],
    [slides]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), intervalMs);
    return () => clearInterval(id);
  }, [SLIDES.length, intervalMs]);

  return (
    <section className="relative isolate">
      {/* BACKGROUND SLIDESHOW (behind content; no clipping) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={s.image + i}
            className="absolute inset-0"
            style={{
              opacity: i === index ? 1 : 0,
              transition: `opacity ${transitionMs}ms ease-in-out`,
              willChange: 'opacity',
            }}
            aria-hidden={i !== index}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover ${i === index ? 'animate-kenburns' : ''}`}
            />
            {/* layered scrims for legibility */}
            <div className="absolute inset-0 bg-black/62" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/45 to-black/20" />
          </div>
        ))}
      </div>

      {/* FOREGROUND (height controlled; never jumps) */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* clamp keeps hero visually consistent: min 520px, target ~70vh, cap 760px */}
        <div className="text-white min-h-[clamp(520px,70vh,760px)] py-[clamp(2rem,6vh,4rem)] flex flex-col items-center justify-center">
          {/* subtle glass only on small screens */}
          <div className="mx-auto w-full max-w-5xl rounded-xl bg-black/30 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.32em] text-white/90 sm:text-xs">
              CHEVOUR INTERNATIONAL ENTERPRISES
            </p>

            {/* HEADING — lighter weight, balanced tracking */}
            <h1 className="mb-3 max-w-5xl text-[28px] font-bold leading-[1.08] tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)] sm:text-[40px] md:text-5xl lg:text-6xl">
              {SLIDES[index].headline.replace('1987', '')}
              {SLIDES[index].headline.includes('1987') && (
                <span className="text-red-500">1987</span>
              )}
            </h1>

            <p className="mx-auto mb-7 max-w-4xl text-[13.5px] text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.55)] sm:text-base md:text-lg">
              {SLIDES[index].subline}
            </p>

            {/* HIGHLIGHTS */}
            <ul className="mx-auto mb-7 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
              <li className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-xs">
                Offices: Canada • USA • Jamaica
              </li>
              <li className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-xs">
                40+ Countries Served
              </li>
              <li className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-xs">
                WIN Exports • CME • CAFTHA • OATH
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                className="rounded-md bg-red-600 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-600/20 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/40 sm:text-sm sm:px-8 sm:py-4"
              >
                Explore Products & Services
              </button>
              <button
                type="button"
                className="rounded-md border border-white/25 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-[1px] transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 sm:text-sm sm:px-8 sm:py-4"
              >
                Contact Our Team
              </button>
            </div>
          </div>

          {/* ASSOCIATIONS (scrollable on small) */}
          {showAssociations && (
            <div className="mt-6 w-full">
              <div className="mx-auto flex max-w-5xl items-center gap-2 overflow-x-auto px-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {[
                  'Canadian Manufacturers & Exporters (CME)',
                  'Canadian Federation of Trading House Association (CAFTHA)',
                  'Ontario Association of Trading House (OATH)',
                  'WIN Exports',
                  'Export Club of Canada',
                ].map((a) => (
                  <span
                    key={a}
                    className="whitespace-nowrap rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[11px] text-white/90 sm:text-xs"
                    title={a}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
