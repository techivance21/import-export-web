'use client';

import React from 'react';
import Image from 'next/image';
import {
  UserGroupIcon,
  GlobeAmericasIcon,
  LockClosedIcon,
  HandThumbUpIcon,
} from '@heroicons/react/24/solid';

const BENEFITS = [
  {
    icon: <UserGroupIcon className="h-6 w-6 text-white" />,
    title: 'Trusted Since 1987',
    desc: 'Decades of export management expertise helping Canadian SMEs.',
  },
  {
    icon: <GlobeAmericasIcon className="h-6 w-6 text-white" />,
    title: 'Global Reach',
    desc: 'Active presence in 40+ countries with offices in Canada, USA & Jamaica.',
  },
  {
    icon: <LockClosedIcon className="h-6 w-6 text-white" />,
    title: 'Compliance First',
    desc: 'Registered with WIN Exports, CME, CAFTHA & OATH.',
  },
  {
    icon: <HandThumbUpIcon className="h-6 w-6 text-white" />,
    title: 'Multi-Sector Supply',
    desc: 'Food, Pharma, Hardware, Electronics, Automotive and more.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Left: Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
            <Image
              src="/chooseus.jpg"
              alt="Chevour International operations"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Middle: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">
              Why <span className="text-red-600">Choose Chevour?</span>
            </h2>
            <div className="mb-5 h-1 w-24 rounded bg-red-600" />

            <p className="text-gray-700">
              Established in 1987, Chevour International Enterprises is a trusted
              International Export Management Company (IEMC) assisting Canadian
              manufacturers to access overseas markets and providing sourcing &
              financing to improve competitive advantage.
            </p>

            <p className="mt-4 text-gray-700">
              Registered with Canada’s World Information Network for Exports (WIN
              Exports), CME, CAFTHA and OATH — Chevour combines compliance, finance
              and logistics to deliver end-to-end export solutions across food,
              pharma, hardware, electronics and more.
            </p>

            <div className="mt-6">
              <button
                type="button"
                className="rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600/30"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right: Benefits list */}
          <div className="flex flex-col justify-center">
            <ul className="space-y-4">
              {BENEFITS.map((b, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-red-600 shadow">
                    {b.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{b.title}</p>
                    <p className="mt-1 text-sm text-gray-600">{b.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
