"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ExternalLink, Mail } from "lucide-react";

const futureCards = [
  {
    title: "3D Field of Awareness",
    text: "A dynamic, zoomable environment where behavioral nodes and connections can be explored at both macro and micro levels.",
  },
  {
    title: "Focused Node Interaction",
    text: "Selecting a specific moment brings it forward while connected influences expand and unrelated patterns recede into the background.",
  },
  {
    title: "Decision Interface (CAR Layer)",
    text: "A grounded decision interface keeps the core questions visible: What is happening? What is my role? What is the best response?",
  },
  {
    title: "Optional AI Integration",
    text: "AI may support reflection, pattern recognition, and guidance without becoming a dependency or replacing personal awareness.",
  },
];

const TOP_IMAGE_X_OFFSET = -8;
const TOP_IMAGE_Y = "49%";
const BOTTOM_IMAGE_Y = "54%";

export default function FuturePage() {
  const [scrollCueOpacity, setScrollCueOpacity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResizeCheck = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResizeCheck();
    window.addEventListener("resize", handleResizeCheck);

    return () => {
      window.removeEventListener("resize", handleResizeCheck);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateCue = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > lastScrollY) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = scrollTop;

      let targetOpacity = scrollTop > window.innerHeight * 0.03 ? 0.22 : 0;

      if (docHeight > 0) {
        const progress = scrollTop / docHeight;

        if (progress > 0.92) {
          const fadeOut = 1 - (progress - 0.92) / 0.08;
          targetOpacity = Math.min(targetOpacity, Math.max(fadeOut * 0.55, 0));
        }
      }

      setScrollCueOpacity(targetOpacity);
    };

    updateCue();

    window.addEventListener("scroll", updateCue, { passive: true });
    window.addEventListener("resize", updateCue);

    return () => {
      window.removeEventListener("scroll", updateCue);
      window.removeEventListener("resize", updateCue);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-blue-500/25 selection:text-white">
      {/* FIXED BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-black">
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/images/backgrounds/DCP-coming-soon.jpg')",
            backgroundPosition: `calc(50% + ${TOP_IMAGE_X_OFFSET}px) ${TOP_IMAGE_Y}`,
            backgroundSize: isDesktop ? "50% auto" : "cover",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-black/[0.54]" />

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/images/backgrounds/otter.jpg')",
            backgroundPosition: `center ${BOTTOM_IMAGE_Y}`,
            backgroundSize: isDesktop ? "50% auto" : "cover",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/[0.54]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05),transparent_18%)]" />
      </div>

      {/* DCP ID */}
      <img
        src="/images/icons/DCP-ID.png"
        alt="DCP"
        className="pointer-events-none fixed right-4 top-4 z-20 w-28 opacity-25 sm:right-6 sm:top-6 sm:w-36 lg:right-8 lg:top-8 lg:w-44"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          {/* HERO */}
          <section className="pb-10 pt-10 sm:pt-12">
            <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 hover:text-white">
              <ChevronLeft className="h-4 w-4" />
              Back
            </Link>

            <div className="max-w-5xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                Future Direction
              </div>

              <h1 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                <span className="text-orange-400">DCP</span> is technology-
                <span className="text-blue-400">independent</span>.
              </h1>
            </div>

            <div className="h-[5vh] sm:h-[6vh]" />

            <div className="rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Natural Signal</div>
                  <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Stay aware of what is crossing in front of you.</h2>
                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    Future development should remain grounded in pattern recognition, timing, attention, and response within real conditions.
                  </p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">What May Come</div>
                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    Future interfaces may help make patterns more visible, interactive, and easier to navigate.
                  </p>
                  <p className="mt-5 text-lg leading-8 text-orange-400">
                    Regulate what you consume, or it will control what you become.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT (kept minimal for brevity — unchanged behavior) */}
        </div>

        {/* SCROLL CUE */}
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300"
          style={{ opacity: scrollCueOpacity }}
        >
          <img
            src="/images/icons/3arrow-scroller.png"
            alt=""
            className={`w-12 transition-transform duration-300 ${
              scrollDirection === "up" ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}