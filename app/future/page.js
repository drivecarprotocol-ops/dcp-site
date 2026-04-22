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

export default function FuturePage() {
  const [scrollCueOpacity, setScrollCueOpacity] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateCue = (mouseY = null) => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollTop > lastScrollY) {
        setScrollDirection("down");
      } else if (scrollTop < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = scrollTop;

      const viewportHeight = window.innerHeight;
      const scrolledEnough = scrollTop > viewportHeight * 0.03;
      const lowerZoneStart = viewportHeight * 0.66;
      const upperBufferZone = viewportHeight * 0.52;

      let targetOpacity = 0;

      if (mouseY !== null) {
        if (mouseY >= lowerZoneStart) {
          targetOpacity = 0.55;
        } else if (mouseY >= upperBufferZone) {
          const zoneProgress =
            (mouseY - upperBufferZone) / (lowerZoneStart - upperBufferZone);
          targetOpacity = Math.max(0.18, zoneProgress * 0.55);
        }
      }

      if (scrolledEnough && targetOpacity < 0.22) {
        targetOpacity = 0.22;
      }

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
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-blue-500/25 selection:text-white">
      {/* FIXED BACKGROUND STAGE */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black">
        <div
          className="absolute inset-x-0 top-0 h-1/2 bg-no-repeat opacity-[0.85]"
          style={{
            backgroundImage: "url('/images/backgrounds/DCP-coming-soon.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "calc(50% - 10px) center",
          }}
        />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-black/58" />

        <div
          className="absolute inset-x-0 bottom-0 h-1/2 bg-no-repeat opacity-[0.85]"
          style={{
            backgroundImage: "url('/images/backgrounds/otter.jpg')",
            backgroundSize: "contain",
            backgroundPosition: "center center",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-black/58" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05),transparent_18%)]" />
      </div>

      {/* DCP ID */}
      <img
        src="/images/icons/DCP-ID.png"
        alt="DCP"
        className="pointer-events-none fixed right-4 top-4 z-20 w-24 opacity-25 md:right-8 md:top-8 md:w-44"
      />

      {/* SCROLLING CONTENT */}
      <div className="relative z-10">
        {/* HERO + NATURAL SIGNAL CONTENT */}
        <section className="relative border-b border-white/10">
          <div className="min-h-[200vh]">
            <div className="mx-auto max-w-7xl px-5 pt-8 md:px-8 md:pt-12">
              <div className="mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 transition hover:text-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Link>
              </div>

              <div className="max-w-5xl">
                <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Future Direction
                </div>

                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
                  DCP is independent from{" "}
                  <span className="text-blue-400">technology</span>.
                </h1>

                <p className="mt-5 max-w-4xl text-base leading-7 text-white/84 sm:text-lg md:mt-6 md:text-2xl md:leading-8">
                  Future interfaces may help make patterns more visible,
                  interactive, and easier to navigate. They do not replace
                  awareness, accountability, or responsibility.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
                  >
                    Read Full White Paper
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <Link
                    href="/"
                    className="inline-flex items-center rounded-2xl border border-blue-400/40 px-6 py-3 text-blue-300 transition hover:bg-blue-400/10"
                  >
                    Return to QuickStart
                  </Link>
                </div>
              </div>
            </div>

            <div className="h-[55vh] md:h-[62vh] lg:h-[70vh]" />

            <div className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
              <div className="max-w-4xl">
                <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                  Natural Signal
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Stay aware of what is crossing in front of you.
                </h2>

                <p className="mt-5 max-w-4xl text-lg leading-8 text-white/82">
                  Future development should remain grounded in pattern
                  recognition, timing, attention, and response within real
                  conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT BELOW THE STAGE */}
        <section className="relative overflow-hidden border-b border-white/10 bg-black/88 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.12),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.04),transparent_20%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="max-w-4xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Conceptual Direction
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Visualization could amplify awareness.
              </h2>

              <p className="mt-5 text-lg leading-8 text-white/80">
                One optional direction is a behavioral mapping layer that makes
                events, emotions, reactions, CAR processing, responses, and
                recurring patterns easier to see over time.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {futureCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
                >
                  <h3 className="text-xl font-medium">{card.title}</h3>
                  <p className="mt-3 leading-7 text-white/80">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/10 bg-black/92 backdrop-blur-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-8">
                <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                  Core Principle
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  The system still works without any of this.
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/82">
                  DCP remains a direct, repeatable framework:
                </p>

                <div className="mt-6 text-2xl font-medium text-white md:text-3xl">
                  Feel the emotion. Choose the response.
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-8">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Human First
                </div>

                <p className="mt-5 text-lg leading-8 text-white/82">
                  Technology does not define the system. The individual does.
                  The future layer is support, not replacement.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/94 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Systems Lens
                </div>
                <p className="mt-4 text-lg leading-8 text-white/82">
                  Awareness of inputs → intentional control of outputs.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Conceptual Framing
                </div>
                <p className="mt-4 text-lg leading-8 text-white/82">
                  A structure for better decisions within real conditions.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8">
              <p className="max-w-5xl text-lg leading-8 text-white/82">
                Future development may explore interactive mapping, structured
                journaling, optional AI support, and continuity tools. The
                foundation remains unchanged: DCP is a human decision
                architecture applied in real time, and it improves with
                awareness alone.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Contact / Follow
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Stay close to the core.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                  Optional extension is only useful if the foundation stays
                  clean.
                </p>
              </div>

              <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
                <a
                  href="mailto:drivecarprotocol@gmail.com"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                >
                  <Mail className="h-5 w-5 text-orange-300" />
                  <div>
                    <div className="text-sm text-white/55">Email</div>
                    <div className="text-white">
                      drivecarprotocol@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://x.com/D_C_Protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                >
                  <img
                    src="/images/icons/icon-x.png"
                    alt="X"
                    className="h-5 w-5 object-contain"
                  />
                  <div>
                    <div className="text-sm text-white/55">X</div>
                    <div className="text-white">@D_C_Protocol</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SCROLL CUE */}
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300"
          style={{ opacity: scrollCueOpacity }}
        >
          <img
            src="/images/icons/3arrow-scroller.png"
            alt=""
            className={`w-12 object-contain transition-transform duration-300 md:w-16 ${
              scrollDirection === "up" ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <footer className="border-t border-white/10 px-5 py-8 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
            <div>
              © 2026 Drive CAR Protocol. /// DCP is independent from
              technology. /// All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}