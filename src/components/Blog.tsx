"use client";

import Image from "next/image";
import { Calendar, User } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Expanding Global Export Opportunities Worldwide",
    date: "18 March 2025",
    author: "Chevour Admin",
    image: "/blog1.jpg",
    description:
      "Chevour International Enterprises continues to support Canadian manufacturers in accessing overseas markets. Our global partnerships ensure that small and medium-sized enterprises can grow internationally with confidence.",
  },
  {
    id: 2,
    title: "Delivering Excellence in Trade & Logistics Services",
    date: "18 March 2025",
    author: "Chevour Admin",
    image: "/blog2.jpg",
    description:
      "With offices in Canada, USA, and Jamaica, Chevour has successfully represented North American companies across the Caribbean, Europe, Asia, and Africa, ensuring smooth logistics and financing for global trade.",
  },
  {
    id: 3,
    title: "Supplying Quality Products and Services Worldwide",
    date: "18 March 2025",
    author: "Chevour Admin",
    image: "/blog3.jpg",
    description:
      "From food and beverages to pharmaceuticals, hardware, and automobiles, Chevour continues to deliver high-quality products and services across multiple continents, enhancing global business competitiveness.",
  },
];

export default function Blog() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 mt-2 font-sans">
            Insights & Updates from Chevour International Enterprises
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md hover:shadow-lg transition rounded-md overflow-hidden flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="!rounded-none"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 text-left flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} /> {blog.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={16} /> {blog.author}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mt-3 text-base font-sans leading-relaxed flex-1">
                  {blog.description}
                </p>

                {/* Read More */}
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-red-600 font-medium hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}