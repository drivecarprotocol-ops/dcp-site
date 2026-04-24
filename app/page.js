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
    const handleMouseMove = (event) => updateCue(event.clientY);

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
          style={{
            backgroundImage: "url('/images/backgrounds/hero-main.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(249,115,22,0.16),transparent_24%)]" />

        <img
          src="/images/icons/DCP-ID.png"
          alt="DCP"
          className="pointer-events-none absolute right-4 top-4 z-20 w-24 opacity-25 md:right-8 md:top-8 md:w-44"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-6xl"
          >
            <div className="mb-6">
              <img
                src="/images/dcp-logo.png"
                alt="Drive CAR Protocol Logo"
                className="h-20 w-auto md:h-24"
              />
            </div>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:mt-5 md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/82 sm:text-lg md:mt-6 md:text-2xl md:leading-8">
              A human decision architecture applied in{" "}
              <span className="font-medium text-orange-400/80">REAL</span>{" "}
              time
            </p>

            <p className="mt-3 max-w-3xl text-base leading-7 text-white/70 sm:text-lg md:text-xl">
              DCP gives structure at that exact moment where emotion becomes
              action.
            </p>

            <div className="mt-10 rounded-[1.75rem] border border-blue-500/20 bg-blue-500/[0.08] p-6 md:mt-12 md:p-8">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Core Behavioral Model
                  </div>

                  <p className="mt-5 text-base leading-7 text-white/82 md:text-lg md:leading-8">
                    DCP operates within the existing sequence. Called in when
                    there is an awareness of emotion. Not to remove, but to
                    structure what happens next.
                  </p>

                  <div className="mt-6">
                    <img
                      src="/images/models/core-model.png"
                      alt="Core Behavioral Model Diagram"
                      className="w-full max-w-2xl rounded-xl border border-white/10 bg-black/30 object-contain"
                    />
                  </div>
                </div>

                <div>
                  <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                    Why This Matters
                  </div>

                  <p className="mt-5 text-base leading-7 text-white/82 md:text-lg md:leading-8">
                    What you say or don’t say, what you do or don’t do... it’s
                    all a choice within emotion. All of it carries direction.
                  </p>

                  <p className="mt-5 whitespace-pre-line text-base leading-7 text-white/82 md:text-lg md:leading-8">
                    {`Words, actions, and inaction can create conflict or clarity depending on how they are delivered. What you place in your field matters.
Attention determines input.
Input determines emotion.
CAR determines what follows.`}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT DCP IS */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-[position:22%_center] opacity-85 md:bg-[position:20%_center]"
          style={{
            backgroundImage: "url('/images/backgrounds/lit-cones.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/62" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
              What DCP is
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              The critical moment between emotion and outcome.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/78">
              Without structure, behavior stays automatic. With structure, it
              becomes intentional.
            </p>

            <p className="mt-3 text-lg leading-8 text-white/70">
              DCP does not replace behavior. It structures it in the moment it
              matters. It is not designed to manage people. It helps people
              manage themselves. You do not control the field. You control how
              you respond within it. DCP applies across the full spectrum of
              behavior — from everyday reactions to high-stakes, destructive
              patterns.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.25em] text-orange-300">
                Automatic
              </div>

              <h3 className="mt-3 text-2xl font-medium">Emotion → Reaction</h3>

              <ul className="ml-4 mt-4 list-inside list-disc space-y-2 text-white/75">
                <li className="leading-7">
                  When an event occurs, emotion moves directly towards reaction.
                </li>
                <li className="leading-7 text-white/65">
                  Without awareness, reaction becomes behavior.
                </li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                Intentional
              </div>

              <h3 className="mt-3 text-2xl font-medium">CAR → Response</h3>

              <ul className="ml-4 mt-4 list-inside list-disc space-y-2 text-white/75">
                <li className="leading-7">
                  When emotion strikes, CAR processes reaction into a response.
                </li>
                <li className="leading-7 text-white/65">
                  With awareness, reaction can be directed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CAR */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-no-repeat opacity-60 md:hidden"
          style={{
            backgroundImage:
              "url('/images/backgrounds/traffic-light-mobile.jpg')",
            backgroundPosition: "center 85%",
            backgroundSize: "105%",
          }}
        />

        <div
          className="absolute inset-0 hidden bg-cover opacity-60 md:block"
          style={{
            backgroundImage:
              "url('/images/backgrounds/traffic-light-angled.jpg')",
            backgroundPosition: "82% 36%",
          }}
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                C.A.R.
              </div>

              <div className="mt-4">
                <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
                  The Decision Engine
                </h2>

                <p className="mt-3 max-w-md text-lg leading-7 text-white/85 md:text-xl">
                  sculpts{" "}
                  <span className="font-medium text-blue-400/80">
                    emotion
                  </span>{" "}
                  into an{" "}
                  <span className="font-medium text-orange-400/80">
                    intentional response
                  </span>
                  .
                </p>

                <p className="mt-4 max-w-md text-base leading-7 text-white/75 md:text-lg">
                  CAR engages within that brief space of time to form a better
                  response before it is expressed. It acts as a filter, not a
                  delay.
                </p>

                <p className="mt-5 max-w-md text-base leading-7 text-white/75 md:text-lg">
                  Thought and emotion move together, creating form. They shape
                  each other in real time. CAR determines what they become.
                </p>

                <div className="mt-6">
                  <img
                    src="/images/models/car-aid.png"
                    alt="CAR Aid Model"
                    className="w-full max-w-md rounded-xl border border-white/10 bg-black/30 object-contain opacity-[.85]"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {carCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(90deg,rgba(37,99,235,0.22)_0%,rgba(37,99,235,0.12)_22%,rgba(37,99,235,0.04)_38%,rgba(0,0,0,0.55)_62%,rgba(0,0,0,0.78)_100%)] p-6 backdrop-blur"
                >
                  <div className="text-sm uppercase tracking-[0.25em]">
                    <span className={item.titleColor}>{item.title}</span>
                    <span className="px-2 text-white">→</span>
                    <span className="text-white">{item.outcome}</span>
                  </div>

                  <h3 className="mt-3 text-2xl font-medium">{item.prompt}</h3>

                  <p className="mt-4 text-lg leading-7 text-white/80">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('/images/backgrounds/section-bg-pressure.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/62" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
              Why It Matters
            </div>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              The Recognition Gap
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/82">
              Recognition does not equal correction. People often know something
              is wrong while it is happening and still proceed the same way. DCP
              provides structure to act during the moment, not after it. This is
              the gap between recognizing and choosing.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-lg font-medium">Emotion is inevitable</h3>

              <p className="mt-3 leading-7 text-white/80">
                When events occur the issue is what happens next.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-lg font-medium">Reaction is automatic</h3>

              <p className="mt-3 leading-7 text-white/80">
                Without structure, reaction tends to repeat and reinforce
                itself.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-lg font-medium">Response is chosen</h3>

              <p className="mt-3 leading-7 text-white/80">
                Reaction is processed into a choice you own and are responsible
                for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL PDF + CONTACT */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-5 py-16 md:px-8 md:py-20">
        <div
          className="absolute inset-0 bg-cover bg-[position:calc(50%-316px)_center] opacity-[0.85]"
          style={{
            backgroundImage: "url('/images/backgrounds/futures.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Full White Paper
                </div>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                  Go deeper if you want the full framework.
                </h2>

                <p className="mt-5 text-lg leading-8 text-white/80">
                  DCP belongs to the individual. When integrated into future
                  systems, it becomes a continuity layer — allowing those
                  systems to align with established patterns without replacing
                  personal agency.
                </p>

                <div className="mt-4">
                  <a
                    href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-500/90 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 focus:ring-offset-black"
                  >
                    Read Full White Paper
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <address className="space-y-4 self-start rounded-[1.75rem] border border-white/10 bg-black/50 p-6 not-italic">
                <a
                  href="mailto:drivecarprotocol@gmail.com"
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <Mail
                    className="h-5 w-5 shrink-0 text-orange-300"
                    aria-hidden="true"
                  />
                  <span className="break-all text-white">
                    drivecarprotocol@gmail.com
                  </span>
                </a>

                <a
                  href="https://x.com/D_C_Protocol"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Drive CAR Protocol on X"
                  className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  <img
                    src="/images/icons/icon-x.png"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 object-contain"
                  />
                  <span className="text-white">@D_C_Protocol</span>
                </a>
              </address>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="flex items-center">
                <a
                  href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                  download
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Download PDF
                  <img
                    src="/images/icons/3arrow-scroller.png"
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-auto object-contain brightness-0 invert"
                  />
                </a>
              </div>

              <div className="flex items-center md:justify-end">
                <Link
                  href="/future"
                  className="inline-flex items-center gap-3 rounded-2xl border border-blue-400/40 px-6 py-3 text-blue-300 transition hover:bg-blue-400/10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-black"
                >
                  Future Direction
                  <img
                    src="/images/icons/3arrow-scroller.png"
                    alt=""
                    aria-hidden="true"
                    className="h-4 w-auto -rotate-90 object-contain brightness-0 saturate-100 [filter:invert(59%)_sepia(89%)_saturate(1991%)_hue-rotate(196deg)_brightness(103%)_contrast(101%)]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="pointer-events-none fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-opacity duration-300"
        style={{ opacity: scrollCueOpacity }}
      >
        <img
          src="/images/icons/3arrow-scroller.png"
          alt=""
          aria-hidden="true"
          className={`w-12 object-contain transition-transform duration-300 md:w-16 ${
            scrollDirection === "up" ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>
            © 2026 Drive CAR Protocol. /// Feel the emotion. Choose the
            response. /// All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}