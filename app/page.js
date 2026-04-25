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
      if (scrollTop < lastScrollY) setScrollDirection("up");

      lastScrollY = scrollTop;

      const progress = scrollTop / docHeight;
      let opacity = 0.25;

      if (progress > 0.92) {
        opacity = 1 - (progress - 0.92) / 0.08;
      }

      setScrollCueOpacity(Math.max(0, Math.min(0.55, opacity)));
    };

    window.addEventListener("scroll", updateCue, { passive: true });
    window.addEventListener("resize", updateCue);

    updateCue();

    return () => {
      window.removeEventListener("scroll", updateCue);
      window.removeEventListener("resize", updateCue);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat opacity-85"
          style={{
            backgroundImage: "url('/images/backgrounds/hero-main.jpg')",
            backgroundPosition: "72% center",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <h1 className="text-4xl md:text-7xl font-semibold">
            Feel the emotion.{" "}
            <span className="text-orange-400">Choose the response.</span>
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-white/80">
            DCP gives structure at that exact moment where emotion becomes action.
          </p>
        </div>
      </section>

      {/* CAR SECTION */}
      <section className="relative overflow-hidden border-y border-white/10">

        {/* DESKTOP */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat opacity-65"
          style={{
            backgroundImage: "url('/images/backgrounds/statue-traffic-light.jpg')",
            backgroundSize: "74% auto",
            backgroundPosition: "calc(50% + 150px) calc(50% + 50px)",
          }}
        />

        {/* MOBILE / LANDSCAPE MOBILE */}
        <div
          className="absolute inset-0 lg:hidden bg-no-repeat opacity-55"
          style={{
            backgroundImage: "url('/images/backgrounds/thinking-statue-mobile.jpg')",
            backgroundSize: "58% auto",
            backgroundPosition: "right -5rem top -3.75rem",
          }}
        />

        <div
          className="absolute inset-x-0 bottom-0 lg:hidden bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('/images/backgrounds/traffic-light-mobile.jpg')",
            backgroundSize: "57% auto",
            backgroundPosition: "calc(50% + 200px) calc(50% + 290px)",
          }}
        />

        <div className="absolute inset-0 bg-black/42" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-4xl md:text-6xl font-semibold">
            The Decision Engine
          </h2>

          <p className="mt-4 text-lg text-white/80 max-w-md">
            sculpts emotion into an intentional response.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {carCards.map((card) => (
              <div key={card.title} className="p-6 border border-white/10 rounded-2xl bg-white/5">
                <h3 className="text-xl">{card.prompt}</h3>
                <p className="mt-3 text-white/70">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FUTURES / FIXED SECTION */}
      <section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20">

        {/* DESKTOP */}
        <div
          className="hidden lg:block absolute inset-0 bg-no-repeat opacity-85"
          style={{
            backgroundImage: "url('/images/backgrounds/futures.jpg')",
            backgroundSize: "70% auto",
            backgroundPosition: "center center",
          }}
        />

        {/* MOBILE + LANDSCAPE MOBILE (THIS WAS YOUR BUG) */}
        <div
          className="absolute inset-0 lg:hidden bg-no-repeat opacity-90"
          style={{
            backgroundImage: "url('/images/backgrounds/futures-mobile.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Go deeper if you want the full framework.
          </h2>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
              target="_blank"
              className="bg-orange-500 px-6 py-3 rounded-2xl"
            >
              Read Full White Paper
            </a>

            <a
              href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
              download
              className="border border-white/20 px-6 py-3 rounded-2xl"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 text-white/50">
        © 2026 Drive CAR Protocol
      </footer>
    </div>
  );
}