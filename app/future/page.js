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

    updateCue();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-blue-500/25 selection:text-white">
      {/* FIXED BACKGROUND STAGE */}
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

      {/* DCP ID */}
      <img
        src="/images/icons/DCP-ID.png"
        alt="DCP"
        className="pointer-events-none fixed right-8 top-8 z-20 w-44 opacity-25"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-8">
          {/* HERO + NATURAL SIGNAL */}
          <section className="pt-12 pb-10">
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

              <h1 className="mt-4 text-7xl font-semibold leading-[0.95] tracking-tight">
                <span className="text-orange-400">DCP</span> is independent from{" "}
                <span className="text-blue-400">technology</span>.
              </h1>
            </div>

            <div className="h-[10vh]" />

            <div className="mt-8 rounded-[1.75rem] border border-orange-400/20 bg-orange-500/[0.08] p-8">
              <div className="grid grid-cols-[1fr_0.9fr] gap-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-orange-400">
                    Natural Signal
                  </div>

                  <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                    Awareness of what crosses your path.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/82">
                    Future development should remain grounded in pattern
                    recognition, timing, attention, and response within real
                    conditions.
                  </p>
                </div>

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

          {/* EVERYTHING BELOW NOW FLOWS DIRECTLY UNDER NATURAL SIGNAL */}
          <section className="mt-16 pb-12">
            <div className="max-w-5xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Conceptual Direction
              </div>

              <h2 className="mt-4 text-5xl font-semibold leading-[0.98] tracking-tight">
                <span className="text-orange-400">Visualization</span> could
                amplify awareness.
              </h2>

              <p className="mt-5 max-w-5xl text-xl leading-8 text-white/80">
                One optional direction is a behavioral mapping layer that makes
                events, emotions, reactions, CAR processing, responses, and
                recurring patterns easier to see over time.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
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

            {/* MERGED CORE PRINCIPLE + HUMAN FIRST */}
            <div className="mt-8 rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-8">
              <div className="grid grid-cols-[1fr_0.9fr] gap-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Core Principle
                  </div>

                  <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                    The system still works without any of this.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/82">
                    DCP remains a direct, repeatable framework.
                  </p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-white/55">
                    Human First
                  </div>

                  <p className="mt-5 text-lg leading-8 text-white/82">
                    Technology does not define the system. The individual does.
                    The future layer is support, not replacement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Systems Lens
                </div>
                <p className="mt-4 text-lg leading-8 text-white/82">
                  Awareness of inputs → intentional control of outputs.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
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
          </section>

          {/* CONTACT */}
          <section className="py-12">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8">
              <div className="grid grid-cols-[1.15fr_0.85fr] items-start gap-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Contact / Follow
                  </div>

                  <h2 className="mt-4 text-5xl font-semibold tracking-tight">
                    Stay close to the core.
                  </h2>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                    Optional extension is only useful if the foundation stays
                    clean.
                  </p>

                  <div className="mt-8 flex flex-col items-start gap-4">
                    <a
                      href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-500/90"
                    >
                      Read Full White Paper
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <a
                      href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                      download
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10"
                    >
                      Download PDF
                      <img
                        src="/images/icons/3arrow-scroller.png"
                        alt=""
                        className="h-4 w-auto object-contain invert brightness-0"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-between h-full">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
                    <div className="space-y-4">
                      <a
                        href="mailto:drivecarprotocol@gmail.com"
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
                      >
                        <Mail className="h-5 w-5 text-orange-300" />
                        <div className="text-white">
                          drivecarprotocol@gmail.com
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
                        <div className="text-white">@D_C_Protocol</div>
                      </a>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-3 rounded-2xl border border-orange-400/40 px-6 py-3 text-orange-400 transition hover:bg-orange-400/10"
                    >
                      <img
                        src="/images/icons/3arrow-scroller.png"
                        alt=""
                        className="h-4 w-auto rotate-90 object-contain"
                      />
                      Return to QuickStart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SCROLL CUE */}
        <div
          className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300"
          style={{ opacity: scrollCueOpacity }}
        >
          <img
            src="/images/icons/3arrow-scroller.png"
            alt=""
            className={`w-12 object-contain transition-transform duration-300 ${
              scrollDirection === "up" ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <footer className="border-t border-white/10 px-8 py-8">
          <div className="mx-auto max-w-7xl text-sm text-white/50">
            © 2026 Drive CAR Protocol. /// DCP is independent from technology.
            /// All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}