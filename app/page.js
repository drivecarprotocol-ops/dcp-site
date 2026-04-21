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

              <div className="mt-2 text-sm uppercase tracking-[0.3em] text-white/80 md:text-2xl">
                PROTOCOL
              </div>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/82 md:text-2xl">
              DRIVE CAR Protocol is a human decision architecture applied in real time.
              It inserts structure between emotion and action.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-black hover:bg-white/90"
              >
                Read Full White Paper
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/future"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 hover:bg-white/10"
              >
                Future Direction
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur text-center md:text-left">
              <div className="text-xs uppercase tracking-[0.25em] text-white/55">
                Core Behavioral Model
              </div>

              <div className="mt-4 text-lg md:text-2xl">
                Event → Emotion → Reaction
              </div>

              <div className="text-blue-300 text-xl leading-none my-1">↓</div>

              <div className="text-blue-300 text-lg md:text-2xl">
                CAR → Response
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CONES SECTION */}
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
          <h2 className="text-3xl md:text-5xl font-semibold">The Decision Engine</h2>
        </div>
      </section>

      {/* LIGHTNING SECTION */}
      <section className="relative overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover opacity-80 bg-center"
          style={{
            backgroundImage:
              "url('/images/backgrounds/section-bg-pressure.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <h2 className="text-3xl md:text-5xl font-semibold">Why It Matters</h2>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-6 text-sm text-white/50 text-center md:text-left">
        © 2026 Drive CAR Protocol. Feel the emotion. Choose the response.
      </footer>
    </div>
  );
}