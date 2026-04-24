"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import Link from "next/link";

const carCards = [
  {
    title: "Consideration",
    outcome: "Awareness",
    titleColor: "text-red-300",
    prompt: "What is happening?",
    text: "See the moment clearly before you act. This is where reaction is recognized before it becomes behavior.",
  },
  {
    title: "Accountability",
    outcome: "Ownership",
    titleColor: "text-yellow-200",
    prompt: "What is my role?",
    text: "Own your part in what happens next. This is where direction begins to take shape.",
  },
  {
    title: "Reason",
    outcome: "Direction",
    titleColor: "text-green-300",
    prompt: "What is the best response?",
    text: "Shape it before you express it. Choose direction instead of defaulting to impulse.",
  },
];

export default function DCPWebsiteV2() {
  const [scrollCueOpacity, setScrollCueOpacity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateCue = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollY) setScrollDirection("down");
      else if (scrollTop < lastScrollY) setScrollDirection("up");

      lastScrollY = scrollTop;
      setScrollCueOpacity(scrollTop > 50 ? 0.3 : 0);
    };

    window.addEventListener("scroll", updateCue);
    return () => window.removeEventListener("scroll", updateCue);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* ================= CAR SECTION ================= */}
      <section className="relative overflow-hidden border-y border-white/10">

        {/* MOBILE / TABLET TRAFFIC LIGHT */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-no-repeat opacity-40 xl:hidden"
          style={{
            backgroundImage: "url('/images/backgrounds/traffic-light-mobile.jpg')",
            backgroundPosition: "center bottom",
            backgroundSize: "70%",
          }}
        />

        {/* MOBILE / TABLET SCULPTURE */}
        <div
          className="pointer-events-none absolute inset-0 bg-no-repeat opacity-[0.55] xl:hidden"
          style={{
            backgroundImage: "url('/images/backgrounds/thinking-statue-mobile.jpg')",
            backgroundPosition: "center 58%",
            backgroundSize: "68%",
          }}
        />

        {/* DESKTOP ONLY */}
        <div
          className="absolute inset-0 hidden bg-cover opacity-60 xl:block"
          style={{
            backgroundImage: "url('/images/backgrounds/traffic-light-angled.jpg')",
            backgroundPosition: "82% 36%",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                C.A.R.
              </div>

              <h2 className="mt-4 text-4xl md:text-6xl font-semibold">
                The Decision Engine
              </h2>

              <p className="mt-3 text-lg md:text-xl">
                sculpts <span className="text-blue-400">emotion</span> into an{" "}
                <span className="text-orange-400">intentional response</span>.
              </p>

              <p className="mt-4 text-white/75">
                CAR engages within that brief space of time to form a better
                response before it is expressed.
              </p>

              <p className="mt-5 text-white/75">
                Thought and emotion move together, creating form. CAR determines
                what they become.
              </p>

              <img
                src="/images/models/car-aid.png"
                className="mt-6 max-w-md w-full opacity-85"
              />
            </div>

            <div className="grid gap-5">
              {carCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6 backdrop-blur"
                >
                  <div className="text-sm uppercase tracking-[0.25em]">
                    <span className={item.titleColor}>{item.title}</span> →{" "}
                    {item.outcome}
                  </div>

                  <h3 className="mt-3 text-xl">{item.prompt}</h3>

                  <p className="mt-4 text-white/80">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}