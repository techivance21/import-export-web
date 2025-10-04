'use client';

import Image from 'next/image';
import { PlusIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Service = {
  title: string;
  image: string;         // /public path or remote (configure next.config.js if remote)
  description: string;   // short copy shown on card
  onClick?: () => void;  // optional handler for “Read more”
};

type Props = {
  items?: Service[];     // pass your own to override defaults
};

/** Company-specific defaults based on the brief */
const DEFAULT_ITEMS: Service[] = [
  {
    title: 'EXPORT MANAGEMENT (IEMC)',
    image: '/export-mgmt.jpg',
    description:
      'Since 1987 we operate as an International Export Management Company—representing Canadian manufacturers and managing end-to-end exports.',
  },
  {
    title: 'GLOBAL SOURCING & PROCUREMENT',
    image: '/sourcing.jpg',
    description:
      'Source goods & services across food, pharma, hardware, electronics, automotive, office supplies, construction materials, and more.',
  },
  {
    title: 'TRADE FINANCE & LOGISTICS',
    image: '/logistics.jpg',
    description:
      'Financing support (govt & private), shipping by sea/air/road, and door-to-door coordination across 40+ countries.',
  },
  {
    title: 'COMPLIANCE & DOCUMENTATION',
    image: '/compliance.jpg',
    description:
      'Registered with WIN Exports, CME, CAFTHA & OATH. We handle export docs, certifications and customs compliance.',
  },
  {
    title: 'MARKET ENTRY FOR CANADIAN SMEs',
    image: '/market-entry.jpg',
    description:
      'We help small & medium enterprises find overseas buyers, validate demand and build sustainable distribution.',
  },
  {
    title: 'MULTI-SECTOR PRODUCT SUPPLY',
    image: '/multisector.jpg',
    description:
      'From groceries and beverages to medical supplies, telecom gear, machinery, lumber, vehicles, and tools—reliable supply at scale.',
  },
];

export default function Services({ items = DEFAULT_ITEMS }: Props) {
  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-wide sm:text-3xl">
            Chevour <span className="text-red-600">Services</span>
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-gray-600 sm:text-base">
            Export management, sourcing, finance and logistics for Canadian manufacturers — serving 40+ countries from offices in
            Canada, USA and Jamaica.
          </p>
        </div>

        {/* Responsive grid: 1 → 2 → 4 columns */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((s, idx) => (
            <article
              key={s.title + idx}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width:1280px) 25vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  priority={idx === 0}
                />
              </div>

              {/* Body */}
              <div className="relative flex flex-1 flex-col p-6 sm:p-7">
                <h3 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
                  {s.title}
                </h3>
                {/* red underline accent */}
                <div className="mt-2 h-[3px] w-16 rounded bg-red-600" />

                <p className="mt-4 line-clamp-5 text-gray-700">
                  {s.description}
                </p>

                {/* CTA row */}
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={s.onClick}
                    className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-red-600 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/30 rounded"
                  >
                    Read More
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* Bottom-right ribbon corner */}
                <div className="pointer-events-none absolute bottom-0 right-0">
                  <div className="relative">
                    <div className="absolute bottom-0 right-0 h-0 w-0 border-l-[68px] border-b-[68px] border-l-transparent border-b-red-600 drop-shadow" />
                    <PlusIcon className="absolute bottom-3 right-3 h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Associations strip (optional: uncomment if you want to show below the grid)
        <div className="mx-auto mt-10 flex max-w-5xl flex-wrap items-center justify-center gap-2 text-xs text-gray-600">
          <span className="rounded-full border px-3 py-1">CME</span>
          <span className="rounded-full border px-3 py-1">CAFTHA</span>
          <span className="rounded-full border px-3 py-1">OATH</span>
          <span className="rounded-full border px-3 py-1">WIN Exports</span>
          <span className="rounded-full border px-3 py-1">Export Club of Canada</span>
        </div> */}
      </div>
    </section>
  );
}
