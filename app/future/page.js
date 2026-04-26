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

// VISUAL ALIGNMENT CONTROLS

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

{/* FIXED BACKGROUND STAGE */}
<div className="pointer-events-none fixed inset-0 z-0 bg-black">
   <div
  className="absolute inset-0 hidden bg-no-repeat opacity-100 sm:block"
  style={{
    backgroundImage: "url('/images/backgrounds/DCP-future.jpg')",
    backgroundSize: "67% auto",
    backgroundPosition: "center 8%",
  }}
/>

<div
  className="absolute inset-0 bg-no-repeat opacity-100 sm:hidden"
  style={{
    backgroundImage: "url('/images/backgrounds/DCP-future-mobile.jpg')",
    backgroundSize: "contain",
    backgroundPosition: "center center",
  }}
/>

  <div className="absolute inset-0 bg-black/[0.58] md:bg-black/[0.38]" />

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05),transparent_18%)]" />
</div>

      {/* DCP ID */}
      <img
        src="/images/icons/DCP-ID.png"
        alt="DCP"
        className="pointer-events-none fixed right-4 top-4 z-20 hidden w-28 opacity-25 landscape:block sm:right-6 sm:top-6 sm:w-36 lg:right-8 lg:top-8 lg:w-44"
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* HERO + NATURAL SIGNAL */}
          <section className="pb-10 pt-10 sm:pt-12">
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <ChevronLeft className="h-4 w-4" />
                Back
              </Link>
            </div>

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

            <div className="mt-0 rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Natural Signal
                  </div>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    Stay aware of what is crossing in front of you.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    Future development should remain grounded in pattern
                    recognition, timing, attention, and response within real
                    conditions.
                  </p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    What May Come
                  </div>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    Future interfaces may help make patterns more visible,
                    interactive, and easier to navigate. They do not replace
                    awareness, accountability, or responsibility.
                  </p>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    <span className="text-orange-400">
                      Regulate what you consume, or it will control what you
                      become.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EVERYTHING BELOW NOW FLOWS DIRECTLY UNDER NATURAL SIGNAL */}
          <section className="mt-12 pb-12 sm:mt-16">
            <div className="max-w-5xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Conceptual Direction
              </div>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.98] tracking-tight sm:text-5xl">
                Visualization could amplify{" "}
                <span className="text-blue-400">awareness</span>.
              </h2>

              <p className="mt-5 max-w-5xl text-lg leading-8 text-white/80 sm:text-xl">
                One optional direction is a behavioral mapping layer that makes
                events, emotions, reactions, CAR processing, responses,
                outcomes, and recurring patterns easier to see over time.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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

            {/* CORE PRINCIPLE + HUMAN FIRST */}
            <div className="mt-8 rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Core Principle
                  </div>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    The system still works without any of this.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    DCP remains a direct, repeatable framework:
                    <br /> Feel the emotion.{" "}
                    <span className="text-blue-400">Choose the response</span>.
                  </p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Human First
                  </div>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    Technology does not define the system. The individual does.
                    The future layer is support, not replacement.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Systems Lens
                </div>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  Awareness of inputs → intentional control of outputs.
                  Applicable across personal, digital, and real-world
                  environments.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Conceptual Framing
                </div>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  A structure for navigating life more intentionally within real
                  conditions. Applies directly to how you think, act, and
                  respond in real time.
                </p>
              </div>
            </div>

            {/* FOUNDATION + FUTURE DEVELOPMENT */}
            <div className="mt-10 rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Foundation
                  </div>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    The foundation remains unchanged.
                  </h2>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    A Human decision architecture applied in real time.
                  </p>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Future Development
                  </div>

                  <p className="mt-5 text-lg leading-8 text-white/[0.82]">
                    Future development may explore interactive mapping,
                    structured journaling (of events, emotion, processing, and
                    outcomes), optional AI support, continuity across time,
                    portable data ownership, and reflective review systems that
                    make behavioral patterns more visible over one's existence.
                  </p>
                </div>
              </div>
            </div>

{/* DCP THREE-LAYER STRUCTURE */}
<div className="mt-10">
  <div className="max-w-5xl">
    <p className="text-lg leading-8 text-white/80 sm:text-xl">
      DCP is not limited to a single definition. It is a structure that can be expressed in different ways depending on context.
At its core, it reflects decentralized centering. A return to self before response is expressed. The layers that follow are not separate systems. They are different expressions of the same underlying structure.
    </p>
  </div>

  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
    {/* DRIVE–CAR PROTOCOL */}
    <div className="rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 backdrop-blur">
      <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
        Human Layer
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        Drive CAR Protocol
      </h3>

      <p className="mt-4 text-lg leading-7 text-white/[0.82]">
        A system that gives structure to the exact moment where emotion becomes
        action.
      </p>
    </div>

    {/* DIGITAL CONSTITUTION PASSPORT */}
    <div className="rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 backdrop-blur">
      <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
        Identity Layer
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        Digital Constitution Passport
      </h3>

      <p className="mt-4 text-lg leading-7 text-white/[0.82]">
        A portable representation of how an individual governs their behavior
        across environments.
      </p>
    </div>

    {/* DATA COMPATIBILITY PLATFORM */}
    <div className="rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 backdrop-blur">
      <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
        Systems Layer
      </div>

      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
        Data Compatibility Platform
      </h3>

      <p className="mt-4 text-lg leading-7 text-white/[0.82]">
        Enables alignment between human behavior and digital systems without
        requiring uniformity.
      </p>
    </div>
  </div>
</div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* HUMAN CONTINUITY */}
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Human Continuity
                </div>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  DCP belongs to the individual. It is internal, personal, and
                  not dependent on technology.
                  <br />
                  <br />
                  As systems evolve, a new layer becomes possible—one that does
                  not replace DCP, but{" "}
                  <span className="text-blue-400">interfaces</span> with it.
                  <br />
                  <br />
                  This continuity layer allows patterns of decision-making,
                  reflection, and growth to persist across environments—without
                  surrendering control or identity.
                  <br />
                  <br />
                  It is not about tracking behavior. It is about preserving the
                  integrity of chosen responses over time.
                </p>
              </div>

              {/* SECURE INTERFACE */}
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Secure Interface
                </div>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  If DCP extends beyond the individual, it requires a neutral
                  foundation.
                  <br />
                  <br />
                  XRP can serve as a decentralized trust layer-securing
                  continuity without interfering with personal agency.
                  <br />
                  <br />
                  In this role, it does not store thoughts or control behavior.
                  It provides:
                </p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-blue-400">
                  <li>timestamped verification</li>
                  <li>integrity of recorded decisions</li>
                  <li>continuity across systems</li>
                </ul>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  The individual remains the operator. DCP remains the
                  framework. This layer only secures what has already been
                  chosen.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Internal Orientation
                </div>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  <span className="text-blue-400">
                    One way to understand this:
                  </span>{" "}
                  You are operating your own character in real time. Every
                  decision shapes the outcome. Over time, those decisions build
                  the identity you live within.
                  <br />
                  <br />
                  <span className="text-blue-400">
                    The real scoreboard is internal:
                  </span>{" "}
                  clarity, stability, and how you move through the field is your
                  motivation.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Operational Perspective
                </div>

                <p className="mt-4 text-lg leading-8 text-white/[0.82]">
                  There are outcomes, progress, and external rewards, but they
                  are not the objective. The objective is how you operate.
                  <br />
                  <br />
                  Future systems may visualize or track this progression, but
                  DCP does not depend on them. The structure already exists
                  within the individual.
                </p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section className="py-12">
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 sm:p-8">
              <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Contact / Follow
                  </div>

                  <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
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
                      className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-500/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Read Full White Paper
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <a
                      href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                      download
                      className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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

                <div className="flex h-full flex-col justify-between gap-8">
                  <div className="rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
                    <div className="space-y-4">
                      <a
                        href="mailto:drivecarprotocol@gmail.com"
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                      >
                        <Mail className="h-5 w-5 text-orange-300" />
                        <div className="break-all text-white">
                          drivecarprotocol@gmail.com
                        </div>
                      </a>

                      <a
                        href="https://x.com/D_C_Protocol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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

                  <div className="flex justify-start lg:justify-end">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-3 rounded-2xl border border-orange-400/40 px-6 py-3 text-orange-400 transition hover:bg-orange-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
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

        <footer className="border-t border-white/10 px-5 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-sm text-white/50">
            © 2026 Drive CAR Protocol. /// DCP is independent from technology.
            /// All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}