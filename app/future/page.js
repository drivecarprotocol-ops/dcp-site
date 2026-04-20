"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink } from "lucide-react";

const futureCards = [
  {
    title: "3D Field of Awareness",
    text: "A dynamic, zoomable environment where behavioral nodes and connections are visible across both macro and micro levels.",
  },
  {
    title: "Focused Node Interaction",
    text: "Selecting a moment brings it forward while connected influences expand and unrelated patterns recede into the background.",
  },
  {
    title: "2D Decision Interface",
    text: "A grounded CAR layer keeps the core questions readable: what is happening, what is my role, and what is the best response.",
  },
  {
    title: "Optional AI Integration",
    text: "AI may support reflection, pattern recognition, and guidance without becoming a dependency or replacing responsibility.",
  },
];

export default function FuturePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/25 selection:text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: "url('/images/backgrounds/section-future.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_22%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="max-w-4xl"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-white/65 transition hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </Link>

            <div className="mt-8 text-sm uppercase tracking-[0.25em] text-white/45">
              Future Direction
            </div>

            <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
              One possible direction.
              <br />
              <span className="text-blue-300">Not a requirement.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/84 md:text-xl">
              DCP works without technology. Any future interface would exist to
              make patterns more visible, not to replace personal awareness or
              responsibility.
            </p>

            <div className="mt-8">
              <a
                href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-white transition hover:bg-white/10"
              >
                Read Full White Paper
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONCEPT */}
      <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/45">
            Concept
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            A node-based behavioral map.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/82">
            One possible extension is an interactive system that visualizes
            events, emotions, reactions, CAR processing, responses, outcomes,
            and recurring patterns as a living field.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {futureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="text-xl font-medium">{card.title}</div>
              <p className="mt-3 leading-7 text-white/80">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE PRINCIPLE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
          <div className="max-w-4xl rounded-[2rem] border border-blue-500/20 bg-blue-500/[0.08] p-8">
            <div className="text-sm uppercase tracking-[0.24em] text-blue-300">
              Core principle
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              This is not required.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/82">
              DCP remains effective as a simple, real-time framework:
            </p>
            <div className="mt-6 text-2xl font-medium text-white md:text-3xl">
              Feel the emotion. Choose the response.
            </div>
          </div>
        </div>
      </section>

      {/* FRAMING */}
      <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-white/45">
              Conceptual framing
            </div>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Not a game. A structure for better decisions within real
              conditions.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-white/45">
              Systems lens
            </div>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Awareness of inputs → intentional control of outputs.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8">
          <p className="max-w-4xl text-lg leading-8 text-white/82">
            Future development may explore ways to make internal patterns
            visible through interactive mapping and visualization. The
            foundation remains unchanged: DCP is a human-first system that works
            without technology and improves with awareness alone.
          </p>
        </div>
      </section>
    </div>
  );
}