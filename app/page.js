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
    prompt: "What is happening?",
    text: "See the moment clearly before you act.",
  },
  {
    title: "Accountability",
    prompt: "What is my role?",
    text: "Own your part in what happens next.",
  },
  {
    title: "Reason",
    prompt: "What is the best response?",
    text: "Choose direction instead of defaulting to impulse.",
  },
];

export default function DCPWebsiteV2() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover opacity-80 bg-[position:80%_center] md:bg-center"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(249,115,22,0.16),transparent_24%)]" />

        {/* Top-right DCP mark */}
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
            <div className="relative inline-block">
              <div className="relative">
                <div className="relative z-10 text-4xl font-semibold leading-none tracking-tight md:text-7xl">
                  <span className="text-white">DRIVE</span>
                  <span className="ml-2 text-blue-400">CAR</span>
                </div>

                <img
                  src="/images/icons/cone.png"
                  alt=""
                  className="pointer-events-none absolute right-[-20px] top-2 w-10 md:right-[-30px] md:top-3 md:w-20"
                />
              </div>

              <div className="mt-2 text-sm uppercase tracking-[0.3em] text-white/82 md:text-2xl">
                PROTOCOL
              </div>
            </div>

            <h1 className="mt-4 max-w-5xl text-3xl font-semibold tracking-tight md:mt-5 md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/82 md:text-2xl">
              DRIVE CAR Protocol is a human decision architecture applied in real time.
              It inserts structure between emotion and action.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:gap-4">
              <a
                href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-black transition hover:bg-white/90"
              >
                Read Full White Paper
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/future"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-white transition hover:bg-white/10"
              >
                Future Direction
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* CORE MODEL */}
            <div className="mt-10 max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 md:p-6 backdrop-blur text-center md:text-left">
              <div className="text-xs uppercase tracking-[0.25em] text-white/55">
                Core Behavioral Model
              </div>

              <p className="mt-3 text-sm leading-6 text-white/70">
                DCP operates within the existing sequence. It inserts structure into what happens next.
              </p>

              <div className="mt-5 text-lg md:text-2xl font-medium text-white">
                Event → Emotion → Reaction <span className="text-white/50">(automatic)</span>
              </div>

              <div className="mt-2 text-blue-300 text-xl md:text-2xl leading-none">
                ↓
              </div>

              <div className="mt-1 text-lg md:text-2xl font-medium text-blue-300 leading-tight">
                CAR → Response <span className="text-blue-200/70">(chosen)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT DCP IS */}
      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/45">
            What DCP is
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            The critical moment is between emotion and action.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/78">
            DCP makes that moment visible and usable. Without structure, behavior
            stays automatic. With structure, it becomes intentional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="text-sm uppercase tracking-[0.25em] text-orange-300">
              Automatic
            </div>
            <div className="mt-3 text-2xl font-medium">
              Reaction → Action
            </div>
            <p className="mt-4 leading-7 text-white/75">
              The problem is not emotion itself. The problem is the lack of
              structure when reaction turns into action.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
              Intentional
            </div>
            <div className="mt-3 text-2xl font-medium">
              Reaction → CAR → Response
            </div>
            <p className="mt-4 leading-7 text-white/75">
              CAR does not remove reaction. It organizes it before it is
              expressed.
            </p>
          </div>
        </div>
      </section>

      {/* CAR */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover opacity-80 bg-[position:20%_center] md:bg-center"
          style={{
            backgroundImage:
              "url('/images/backgrounds/section-bg-texture.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                CAR
              </div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
                The Decision Engine
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                CAR is the internal process used to examine emotion before
                acting. Consideration creates awareness. Accountability
                establishes ownership. Reason makes the decision.
              </p>
            </div>

            <div className="grid gap-5">
              {carCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur"
                >
                  <div className="text-sm uppercase tracking-[0.25em] text-white/50">
                    {item.title}
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
          className="absolute inset-0 bg-cover opacity-80 bg-center"
          style={{
            backgroundImage:
              "url('/images/backgrounds/section-bg-pressure.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/62" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <div className="max-w-4xl">
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">
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
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-sm text-white/50 text-center md:text-left">
        © 2026 Drive CAR Protocol. Feel the emotion. Choose the response.
      </footer>
    </div>
  );
}