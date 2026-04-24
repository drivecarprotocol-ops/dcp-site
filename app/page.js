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
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > lastScrollY) setScrollDirection("down");
      else if (scrollTop < lastScrollY) setScrollDirection("up");

      lastScrollY = scrollTop;

      let targetOpacity = scrollTop > 100 ? 0.25 : 0;

      if (docHeight > 0) {
        const progress = scrollTop / docHeight;
        if (progress > 0.92) {
          const fade = 1 - (progress - 0.92) / 0.08;
          targetOpacity *= fade;
        }
      }

      setScrollCueOpacity(targetOpacity);
    };

    window.addEventListener("scroll", updateCue);
    window.addEventListener("resize", updateCue);
    updateCue();

    return () => {
      window.removeEventListener("scroll", updateCue);
      window.removeEventListener("resize", updateCue);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* ========================= */}
      {/* HERO (UNCHANGED) */}
      {/* ========================= */}

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-[position:80%_center] opacity-80 md:bg-center"
          style={{
            backgroundImage: "url('/images/backgrounds/hero-main.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-6xl"
          >
            <h1 className="text-4xl md:text-7xl font-semibold">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ========================= */}
      {/* CAR SECTION — FIXED */}
      {/* ========================= */}

      <section className="relative overflow-hidden border-y border-white/10">

        {/* MOBILE / TABLET PORTRAIT — STATUE */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.6] portrait:block landscape:hidden xl:hidden"
          style={{
            backgroundImage:
              "url('/images/backgrounds/thinking-statue-mobile.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "95% auto",
          }}
        />

        {/* MOBILE / TABLET PORTRAIT — TRAFFIC LIGHT (BOTTOM) */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] opacity-[0.45] portrait:block landscape:hidden xl:hidden"
          style={{
            backgroundImage:
              "url('/images/backgrounds/traffic-light-mobile.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom",
            backgroundSize: "70% auto",
          }}
        />

        {/* TABLET LANDSCAPE (REVERT TO DESKTOP IMAGE) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.6] hidden landscape:block xl:hidden"
          style={{
            backgroundImage:
              "url('/images/backgrounds/traffic-light-angled.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "82% 36%",
            backgroundSize: "cover",
          }}
        />

        {/* DESKTOP (UNCHANGED) */}
        <div
          className="absolute inset-0 hidden xl:block opacity-60"
          style={{
            backgroundImage:
              "url('/images/backgrounds/traffic-light-angled.jpg')",
            backgroundPosition: "82% 36%",
            backgroundSize: "cover",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              <h2 className="text-4xl md:text-6xl font-semibold">
                The Decision Engine
              </h2>

              <p className="mt-4 text-lg">
                sculpts{" "}
                <span className="text-blue-400">emotion</span>{" "}
                into an{" "}
                <span className="text-orange-400">
                  intentional response
                </span>
              </p>
            </div>

            <div className="grid gap-5">
              {carCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-black/60 p-6 backdrop-blur"
                >
                  <h3 className="text-xl">{item.prompt}</h3>
                  <p className="mt-3 text-white/80">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FOOTER (UNCHANGED) */}
      {/* ========================= */}

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto max-w-7xl text-sm text-white/50">
          © 2026 Drive CAR Protocol
        </div>
      </footer>

      {/* SCROLL (UNCHANGED) */}
      <div
        className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2"
        style={{ opacity: scrollCueOpacity }}
      >
        <img
          src="/images/icons/3arrow-scroller.png"
          alt=""
          className={`w-12 md:w-16 ${
            scrollDirection === "up" ? "rotate-180" : ""
          }`}
        />
      </div>

    </div>
  );
}