"use client";

import { useEffect, useState } from "react";
import { FaFolder, FaUsers, FaTruck, FaUser } from "react-icons/fa";
import CountUp from "react-countup";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { id: 1, number: 578, label: "Projects Done", icon: FaFolder },
  { id: 2, number: 347, label: "Permanent Clients", icon: FaUsers },
  { id: 3, number: 128, label: "Owned Vehicles", icon: FaTruck },
  { id: 4, number: 67, label: "Support Members", icon: FaUser },
];

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setStartCount(true);
    }
  }, [inView, controls]);

  return (
    <section
      className="relative py-20"
      style={{
        backgroundImage: "url('/bg-projects.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: i * 0.15 },
                },
              }}
              className="relative bg-white rounded-md px-8 py-6 min-h-[150px] flex flex-col justify-center shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
            >
              {/* red icon box */}
              <div className="absolute -top-8 left-6 bg-red-600 p-4 rounded-sm shadow-md flex items-center justify-center">
                <Icon className="text-white text-3xl" />
              </div>

              {/* number + label */}
              <div className="mt-4">
                <h3 className="text-3xl font-bold text-red-600">
                  {startCount ? (
                    <CountUp start={0} end={s.number} duration={2.5} separator="," />
                  ) : (
                    0
                  )}
                </h3>
                <p className="mt-1 text-gray-800 font-semibold uppercase text-sm tracking-wide">
                  {s.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
