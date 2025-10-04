'use client';

import Image from 'next/image';

type Props = {
  image?: string;          // public/ path or remote URL
  kicker?: string;         // small line above
  headline?: string;       // main line
  subline?: string;        // yellow line
  ctaLabel?: string;
  onCta?: () => void;
  secondaryCtaLabel?: string;
  onSecondaryCta?: () => void;
  showChips?: boolean;     // show credibility chips row
};

export default function PromoBanner({
  image = '/container.jpeg',
  kicker = 'CHEVOUR INTERNATIONAL ENTERPRISES',
  headline = 'The Best Sea and Air Freight Services',
  subline = 'Book your shipping from any country with end-to-end export management',
  ctaLabel = 'CONTACT OUR TEAM',
  onCta,
  secondaryCtaLabel = 'EXPLORE PRODUCTS & SERVICES',
  onSecondaryCta,
  showChips = true,
}: Props) {
  return (
    <section className="relative isolate">
      {/* Background layer (behind; safe to overflow) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src={image}
          alt="Global freight operations"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* red brand tint */}
        <div className="absolute inset-0 bg-red-800/60 mix-blend-multiply" />
        {/* subtle gradient for contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/15" />
      </div>

      {/* Foreground content — height is controlled & never clipped */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* clamp keeps hero visually consistent: min 500px, target 65vh, cap 760px */}
        <div className="text-white min-h-[clamp(500px,65vh,760px)] py-[clamp(2rem,6vh,4rem)] flex flex-col items-center justify-center">
          {/* small glass on very small screens for readability */}
          <div className="mx-auto w-full max-w-5xl rounded-xl bg-black/25 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 text-center">
            <p className="mb-3 text-[11px] font-semibold tracking-[0.32em] text-white/90 sm:text-xs">
              {kicker.toUpperCase()}
            </p>

            {/* Softer heading (no extra-bold), responsive sizes */}
            <h1 className="mb-3 max-w-6xl text-[28px] font-bold leading-[1.08] tracking-tight sm:text-[40px] md:text-5xl lg:text-6xl">
              {headline}
            </h1>

            <p className="mb-8 mx-auto max-w-4xl text-[15px] font-semibold text-yellow-400 sm:text-lg md:text-xl">
              {subline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={onCta}
                className="rounded-lg bg-red-600 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-red-600/25 ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 sm:px-9 sm:py-4"
              >
                {ctaLabel}
              </button>

              {secondaryCtaLabel && (
                <button
                  type="button"
                  onClick={onSecondaryCta}
                  className="rounded-lg border border-white/30 bg-white/10 px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-[1px] transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 sm:px-9 sm:py-4"
                >
                  {secondaryCtaLabel}
                </button>
              )}
            </div>

            {/* Credibility chips from company details */}
            {showChips && (
              <ul className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:gap-3">
                <li className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-xs">
                  Since 1987 • Incorporated 1989
                </li>
                <li className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-xs">
                  Offices: Canada • USA • Jamaica
                </li>
                <li className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] sm:text-xs">
                  WIN Exports • CME • CAFTHA • OATH
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
