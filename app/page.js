"use client";

import React from "react";
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
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-orange-500/30 selection:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover opacity-80 bg-[position:80%_center] md:bg-center"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(249,115,22,0.16),transparent_24%)]" />

        <img
          src="/images/icons/DCP-ID.png"
          alt="DCP"
          className="pointer-events-none absolute right-4 top-4 z-20 w-24 opacity-25 md:right-8 md:top-8 md:w-44"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-5xl"
          >
            {/* Logo block */}
            <div className="relative inline-block max-w-full">
              <div className="relative">
                <div className="relative z-10 text-4xl font-semibold leading-none tracking-tight sm:text-5xl md:text-7xl">
                  <span className="text-white">DRIVE</span>
                  <span className="ml-2 text-blue-400">CAR</span>
                </div>

                <img
                  src="/images/icons/cone.png"
                  alt=""
                  className="pointer-events-none absolute right-[-10px] top-[4px] z-20 w-10 opacity-95 sm:right-[-16px] sm:top-[6px] sm:w-12 md:right-[-28px] md:top-[12px] md:w-20"
                />
              </div>

              <div className="relative mt-2">
                <div className="relative z-10 text-sm uppercase tracking-[0.28em] text-white/82 sm:text-base md:text-2xl md:tracking-[0.34em]">
                  PROTOCOL
                </div>

                <img
                  src="/images/icons/road-right.png"
                  alt=""
                  className="pointer-events-none absolute left-[42%] top-[-8px] z-0 w-28 opacity-95 sm:left-[44%] sm:w-36 md:left-[47%] md:top-[-13px] md:w-66"
                />
              </div>
            </div>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight sm:text-4xl md:mt-5 md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/82 sm:text-lg md:mt-6 md:text-2xl md:leading-8">
              DRIVE CAR Protocol is a human decision architecture applied in real
              time. It inserts structure between emotion and action.
            </p>

            <div className="mt-10 max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur md:mt-12 md:p-6">
              <div className="text-xs uppercase tracking-[0.25em] text-white/55 md:text-sm">
                Core Behavioral Model
              </div>

              <p className="mt-3 text-sm leading-6 text-white/70">
                DCP operates within the existing sequence. It inserts structure
                into what happens next.
              </p>

              <div className="mt-6">
                <img
                  src="/images/models/core-model.jpg"
                  alt="Core Behavioral Model Diagram"
                  className="w-full max-w-2xl rounded-xl border border-white/10 bg-black/30 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT DCP IS */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover opacity-85 bg-[position:22%_center] md:bg-[position:20%_center]"
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
              The critical moment is between emotion and action.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/78">
              DCP makes that moment visible and usable. Without structure,
              behavior stays automatic. With structure, it becomes intentional.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.25em] text-orange-300">
                Automatic
              </div>

              <div className="mt-3 text-2xl font-medium">
                Emotion → Reaction
              </div>

              <p className="mt-4 leading-7 text-white/75">
                Without structure, emotion moves directly toward reaction.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
                Intentional
              </div>

              <div className="mt-3 text-2xl font-medium">
                CAR → Response
              </div>

              <p className="mt-4 leading-7 text-white/75">
                When emotion is triggered, CAR engages—creating space to form an
                intentional response.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAR */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover opacity-90 bg-[position:78%_center] md:bg-[position:82%_center]"
          style={{
            backgroundImage: "url('/images/backgrounds/traffic-light-angled.jpg')",
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
                  <span className="text-blue-400 font-medium">emotion</span> into an{" "}
                  <span className="text-orange-400 font-medium">
                    intentional response
                  </span>.
                </p>

                <p className="mt-4 max-w-md text-base leading-7 text-white/75 md:text-lg">
                  CAR engages within that brief space of time to form a better
                  response before it is expressed.
                </p>

                <div className="mt-6">
                  <img
                    src="/images/models/car-aid.png"
                    alt="CAR Aid Model"
                    className="w-full max-w-sm rounded-xl border border-white/10 bg-black/30 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {carCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-black/45 p-6 backdrop-blur"
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
            backgroundImage: "url('/images/backgrounds/section-bg-pressure.jpg')",
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
              People often know something is wrong while it is happening and
              still proceed the same way. DCP provides structure to act during
              the moment, not after it.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="text-lg font-medium">Emotion is inevitable</div>
              <p className="mt-3 leading-7 text-white/80">
                Emotion is natural. The issue is what happens next.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="text-lg font-medium">Reaction is automatic</div>
              <p className="mt-3 leading-7 text-white/80">
                Without structure, reaction tends to repeat and reinforce itself.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
              <div className="text-lg font-medium">Response is chosen</div>
              <p className="mt-3 leading-7 text-white/80">
                Structure creates control under real conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL PDF + CONTACT */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Full White Paper
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Go deeper if you want the full framework.
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                The website is the QuickStart. The white paper holds the full
                architecture, intent, and broader context.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-500/90"
                >
                  Read Full White Paper
                  <ExternalLink className="h-4 w-4" />
                </a>

                <a
                  href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10"
                >
                  Download PDF
                  <ArrowDownToLine className="h-4 w-4" />
                </a>

                <Link
                  href="/future"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10"
                >
                  Future Direction
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
              <a
                href="mailto:drivecarprotocol@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
              >
                <Mail className="h-5 w-5 text-orange-300" />
                <div className="text-white">drivecarprotocol@gmail.com</div>
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
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Drive CAR Protocol. All rights reserved.</div>
          <div>Feel the emotion. Choose the response.</div>
        </div>
      </footer>
    </div>
  );
}