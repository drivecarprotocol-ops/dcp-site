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
    title: "2D CAR Layer",
    text: "A grounded decision interface keeps the core questions visible: What is happening? What is my role? What is the best response?",
  },
  {
    title: "Optional AI Integration",
    text: "AI may support reflection, pattern recognition, and guidance without becoming a dependency or replacing personal awareness.",
  },
];

// VISUAL ALIGNMENT CONTROLS
const TOP_IMAGE_SIZE = "50% auto";
const BOTTOM_IMAGE_SIZE = "50% auto";
const TOP_IMAGE_X_OFFSET = -8;
const TOP_IMAGE_Y = "49%";
const BOTTOM_IMAGE_Y = "54%";

export default function FuturePage() {
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

      let targetOpacity = scrollTop > window.innerHeight * 0.03 ? 0.22 : 0;

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

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/images/backgrounds/DCP-coming-soon.jpg')",
            backgroundSize: TOP_IMAGE_SIZE,
            backgroundPosition: `calc(50% + ${TOP_IMAGE_X_OFFSET}px) ${TOP_IMAGE_Y}`,
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-black/54" />

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/images/backgrounds/otter.jpg')",
            backgroundSize: BOTTOM_IMAGE_SIZE,
            backgroundPosition: `center ${BOTTOM_IMAGE_Y}`,
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/54" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05),transparent_18%)]" />
      </div>

      {/* LOGO */}
      <img
        src="/images/icons/DCP-ID.png"
        alt="DCP"
        className="pointer-events-none fixed right-8 top-8 z-20 w-44 opacity-25"
      />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-8">

          {/* HERO */}
          <section className="pt-12 pb-10">
            <div className="mb-6">
              <Link href="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
                Back
              </Link>
            </div>

            <div className="max-w-5xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                Future Direction
              </div>

              <h1 className="mt-4 text-7xl font-semibold leading-[0.95] tracking-tight">
                <span className="text-orange-400">DCP</span> is independent from{" "}
                <span className="text-blue-400">technology</span>.
              </h1>
            </div>

            {/* SPACING */}
            <div className="h-[10vh]" />

            {/* 🔥 FIXED BLOCK */}
            <div className="max-w-5xl rounded-[2rem] border border-orange-400/20 bg-orange-500/[0.08] p-8 backdrop-blur-[2px]">
              <div className="grid grid-cols-[1fr_0.9fr] gap-10">

                {/* LEFT */}
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-orange-400">
                    Natural Signal
                  </div>

                  <h2 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-tight">
                    Stay aware of what is crossing in front of you.
                  </h2>

                  <p className="mt-5 text-xl leading-8 text-white/82">
                    Future development should remain grounded in pattern
                    recognition, timing, attention, and response within real
                    conditions.
                  </p>
                </div>

                {/* RIGHT */}
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-white/55">
                    What May Come
                  </div>

                  <p className="mt-5 text-lg leading-8 text-white/82">
                    Future interfaces may help make patterns more visible,
                    interactive, and easier to navigate. They do not replace
                    awareness, accountability, or responsibility.
                  </p>
                </div>

              </div>
            </div>

          </section>

          {/* REST OF PAGE (UNCHANGED) */}
          <section className="mt-16 pb-12">
            <div className="max-w-5xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Conceptual Direction
              </div>

              <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                <span className="text-orange-400">Visualization</span> could amplify awareness.
              </h2>

              <p className="mt-5 text-xl leading-8 text-white/80">
                One optional direction is a behavioral mapping layer that makes events, emotions, reactions, CAR processing, responses, and recurring patterns easier to see over time.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {futureCards.map((card) => (
                <div key={card.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                  <h3 className="text-xl font-medium">{card.title}</h3>
                  <p className="mt-3 text-white/80">{card.text}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}