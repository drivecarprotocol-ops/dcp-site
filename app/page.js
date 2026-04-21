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
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl"
          >

            {/* LOGO */}
            <div className="relative inline-block">
              <div className="text-5xl md:text-7xl font-semibold tracking-tight">
                <span>DRIVE</span>
                <span className="ml-2 text-blue-400">CAR</span>
              </div>

              <div className="mt-2 text-lg md:text-2xl uppercase tracking-[0.3em] text-white/80">
                PROTOCOL
              </div>
            </div>

            {/* HEADLINE */}
            <h1 className="mt-6 text-4xl md:text-7xl font-semibold">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 text-lg md:text-2xl text-white/80 max-w-3xl">
              DRIVE CAR Protocol is a human decision architecture applied in real time.
              It inserts structure between emotion and action.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-black"
              >
                Read Full White Paper
                <ExternalLink size={16} />
              </a>

              <Link
                href="/future"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3"
              >
                Future Direction
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* CORE MODEL */}
            <div className="mt-12 max-w-3xl border border-white/10 bg-white/5 p-6 rounded-xl">
              <div className="text-sm uppercase text-white/50">
                Core Behavioral Model
              </div>

              <div className="mt-4 text-xl">
                Event → Emotion → Reaction
              </div>

              <div className="mt-3 text-center text-blue-400 text-xl">
                ↓
              </div>

              <div className="text-xl text-center text-blue-300">
                CAR → Response
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* WHAT DCP IS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-5xl font-semibold">
          The critical moment is between emotion and action.
        </h2>

        <p className="mt-6 text-lg text-white/80 max-w-3xl">
          DCP makes that moment visible and usable. Without structure, behavior stays automatic. With structure, it becomes intentional.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="border border-white/10 p-6 rounded-xl">
            <div className="text-orange-300 text-sm uppercase">Automatic</div>
            <div className="mt-3 text-xl">Reaction → Action</div>
          </div>

          <div className="border border-white/10 p-6 rounded-xl">
            <div className="text-blue-300 text-sm uppercase">Intentional</div>
            <div className="mt-3 text-xl">Reaction → CAR → Response</div>
          </div>
        </div>
      </section>

      {/* CAR */}
      <section className="border-y border-white/10 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-6xl font-semibold">
            The Decision Engine
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            CAR is the internal process used to examine emotion before acting.
          </p>

          <div className="mt-12 grid gap-6">
            {carCards.map((item) => (
              <div
                key={item.title}
                className="border border-white/10 p-6 rounded-xl"
              >
                <div className="text-sm text-white/50 uppercase">
                  {item.title}
                </div>

                <div className="mt-3 text-xl">
                  {item.prompt}
                </div>

                <p className="mt-3 text-white/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="max-w-7xl mx-auto text-sm text-white/50 flex justify-between">
          <div>© 2026 Drive CAR Protocol</div>
          <div>Feel the emotion. Choose the response.</div>
        </div>
      </footer>

    </div>
  );
}