"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type NewsItemData = {
  id: string;
  day: string;
  month: string;
  title: string;
  by?: string;
  excerpt: string;
};

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  avatar: string;
};

export default function News() {
  const news: NewsItemData[] = useMemo(
    () => [
      {
        id: "n1",
        day: "28",
        month: "FEB",
        title: "Chevour International Enterprises",
        by: "Admin",
        excerpt:
          "Chevour International was established in 1987 and incorporated 1989 as an International Export Management Company (IEMC). Registered with WIN Exports, CME, CAFTHA and OATH.",
      },
      {
        id: "n2",
        day: "23",
        month: "MAR",
        title: "Canadian Federation of Trading House Association & Partners",
        by: "Admin",
        excerpt:
          "Assisting Canadian SMEs with overseas markets and sourcing + financing for local markets to improve competitive advantage.",
      },
    ],
    []
  );

  const testimonials: Testimonial[] = useMemo(
    () => [
      {
        id: "t1",
        quote:
          "Chevour helped us source medical & pharmaceutical supplies with smooth logistics and transparent financing.",
        name: "Client 1",
        role: "Procurement Lead",
        avatar: "/client1.jpg",
      },
      {
        id: "t2",
        quote:
          "A trusted export partner for our hardware and construction materials in multiple markets.",
        name: "Client 2",
        role: "Operations Manager",
        avatar: "/client2.jpg",
      },
    ],
    []
  );

  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <SectionHeading title="LATEST NEWS" />
            <div className="mt-6 space-y-6">
              {news.length === 0 ? (
                <p className="text-gray-500">No news yet.</p>
              ) : (
                news.map((item) => <NewsItem key={item.id} item={item} />)
              )}
            </div>
          </div>

          <div>
            <SectionHeading title="TESTIMONIAL" />
            <div className="mt-6">
              <TestimonialCarousel items={testimonials} />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <SectionHeading title="OUR VALUABLE CLIENT" />
          <div className="mt-8">
            <LogoMarquee
              logos={["/logo1.jpg", "/logo2.jpg", "/logo3.jpg", "/logo4.jpg", "/logo5.jpg"]}
            />
          </div>
        </div>
      </div>

      <ScrollTopButton />
    </section>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="relative inline-block">
      <h2 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl">
        {title}
      </h2>
      <span className="mt-2 block h-0.5 w-20 bg-red-600" />
    </div>
  );
}

function NewsItem({ item }: { item: NewsItemData }) {
  return (
    <article className="flex overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-md">
      <div className="relative flex w-28 shrink-0 flex-col items-center justify-center bg-red-600 text-white">
        <div className="text-4xl font-extrabold leading-none">{item.day}</div>
        <div className="mt-1 text-xs tracking-widest">{item.month}</div>
        <span className="absolute top-6 -right-3 h-6 w-3 bg-red-700 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
      </div>

      <div className="flex-1 p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
        <p className="mt-1 text-xs text-gray-500">
          By <span className="font-medium text-gray-700">{item.by ?? "Admin"}</span>
        </p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-gray-700">
          {item.excerpt}
        </p>
      </div>
    </article>
  );
}

function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Guard against empty items
  const safeItems = items.length > 0 ? items : [{
    id: "fallback",
    quote: "No testimonials yet.",
    name: "—",
    avatar: "/placeholder.png",
  }];

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % safeItems.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, safeItems.length]);

  const current = safeItems[index];

  return (
    <div className="grid overflow-hidden rounded-xl border border-gray-200 md:grid-cols-2">
      <div className="relative aspect-[16/10] w-full md:aspect-auto md:h-full">
        <Image
          src={current.avatar}
          alt={`${current.name} avatar`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      <div className="relative flex min-h-[240px] items-center bg-red-600 p-6 sm:p-8">
        <div className="relative text-white">
          <p className="text-base leading-relaxed sm:text-lg">{current.quote}</p>
          <div className="mt-4 font-semibold">{current.name}</div>
          {current.role && <div className="text-sm/6 opacity-90">{current.role}</div>}
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex items-center gap-2">
            {safeItems.map((_, i) => (
              <button
                key={`dot-${i}`}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === i ? "bg-white" : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoMarquee({ logos }: { logos: string[] }) {
  const track = [...logos, ...logos];
  return (
    <div
      className="group relative overflow-hidden rounded-xl bg-white/70 py-6"
      aria-label="Client logos carousel"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <div className="[--gap:3.5rem] flex gap-[var(--gap)] will-change-transform animate-marquee group-hover:[animation-play-state:paused]">
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative mx-2 flex h-16 w-44 items-center justify-center bg-transparent"
          >
            <Image
              src={src}
              alt={`Client logo ${i + 1}`}
              width={160}
              height={64}
              className="h-12 w-auto object-contain"
              priority={i < logos.length}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          width: max-content;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}

function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gray-900 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-300 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path d="M12 4c.41 0 .75.34.75.75v12.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V4.75c0-.41.34-.75.75-.75Z" />
      </svg>
    </button>
  );
}
