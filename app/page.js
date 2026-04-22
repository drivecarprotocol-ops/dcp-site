"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ExternalLink,
  Mail,
  ArrowDownToLine,
} from "lucide-react";

const carCards = [
  {
    title: "Consideration",
    outcome: "Awareness",
    titleColor: "text-red-300",
    prompt: "What is happening?",
    text: "See the moment clearly before you act.",
  },
  {
    title: "Accountability",
    outcome: "Ownership",
    titleColor: "text-yellow-200",
    prompt: "What is my role?",
    text: "Own your part in what happens next.",
  },
  {
    title: "Reason",
    outcome: "Direction",
    titleColor: "text-green-300",
    prompt: "What is the best response?",
    text: "Choose direction instead of defaulting to impulse.",
  },
];

export default function DCPWebsiteV2() {
  const [scrollCueOpacity, setScrollCueOpacity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateCue = (mouseY = null) => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > lastScrollY) setScrollDirection("down");
      else if (scrollTop < lastScrollY) setScrollDirection("up");

      lastScrollY = scrollTop;

      const viewportHeight = window.innerHeight;
      const scrolledEnough = scrollTop > viewportHeight * 0.03;
      const lowerZoneStart = viewportHeight * 0.66;
      const upperBufferZone = viewportHeight * 0.52;

      let targetOpacity = 0;

      if (mouseY !== null) {
        if (mouseY >= lowerZoneStart) targetOpacity = 0.55;
        else if (mouseY >= upperBufferZone) {
          const zoneProgress =
            (mouseY - upperBufferZone) /
            (lowerZoneStart - upperBufferZone);
          targetOpacity = Math.max(0.18, zoneProgress * 0.55);
        }
      }

      if (scrolledEnough && targetOpacity < 0.22)
        targetOpacity = 0.22;

      if (docHeight > 0) {
        const progress = scrollTop / docHeight;
        if (progress > 0.92) {
          const fadeOut = 1 - (progress - 0.92) / 0.08;
          targetOpacity = Math.min(
            targetOpacity,
            Math.max(fadeOut * 0.55, 0)
          );
        }
      }

      setScrollCueOpacity(targetOpacity);
    };

    const handleScroll = () => updateCue();
    const handleResize = () => updateCue();
    const handleMouseMove = (e) => updateCue(e.clientY);

    updateCue();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-orange-500/30 selection:text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-[position:80%_center] opacity-80 md:bg-center"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </section>

      {/* CAR */}
      <section className="relative overflow-hidden border-y border-white/10">

        {/* MOBILE */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-90 md:hidden"
          style={{
            backgroundImage: "url('/images/backgrounds/traffic-light-mobile.jpg')",
            backgroundSize: "85%",
            backgroundPosition: "center 75%",
          }}
        />

        {/* DESKTOP */}
        <div
          className="absolute inset-0 hidden bg-cover opacity-90 md:block"
          style={{
            backgroundImage: "url('/images/backgrounds/traffic-light-angled.jpg')",
            backgroundPosition: "82% 36%",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            <div>
              <h2 className="text-4xl font-semibold md:text-6xl">
                The Decision Engine
              </h2>

              <p className="mt-3 text-lg text-white/85">
                sculpts{" "}
                <span className="text-blue-400/80">emotion</span> into an{" "}
                <span className="text-orange-400/80">
                  intentional response
                </span>
              </p>

              <img
                src="/images/models/car-aid.png"
                className="mt-6 opacity-[0.74]"
              />
            </div>

            <div className="grid gap-5">
              {carCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-black/45 p-6"
                >
                  <div className="text-sm uppercase tracking-[0.25em]">
                    <span className={item.titleColor}>{item.title}</span>
                    <span className="px-2">→</span>
                    <span>{item.outcome}</span>
                  </div>

                  <h3 className="mt-3 text-2xl">{item.prompt}</h3>
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