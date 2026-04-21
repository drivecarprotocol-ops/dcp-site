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
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_75%_18%,rgba(249,115,22,0.16),transparent_24%)]" />

        {/* Top-right DCP mark */}
        <img
          src="/images/icons/DCP-ID.png"
          alt="DCP"
          className="pointer-events-none absolute right-6 top-6 z-20 w-40 opacity-25 md:right-8 md:top-8 md:w-56"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-5xl"
          >
            {/* Logo block */}
            <div className="relative inline-block">
              <div className="relative">
                <div className="relative z-10 text-5xl font-semibold leading-none tracking-tight md:text-7xl">
                  <span className="text-white">DRIVE</span>
                  <span className="ml-2 text-blue-400">CAR</span>
                </div>

                {/* Cone sits more deliberately behind/right of CAR */}
                <img
                  src="/images/icons/cone.png"
                  alt=""
                  className="pointer-events-none absolute left-[78%] top-[-4px] z-0 w-16 opacity-95 md:left-[80%] md:top-[-8px] md:w-20"
                />
              </div>

              <div className="relative mt-2">
                <div className="relative z-10 pl-1 text-lg uppercase tracking-[0.34em] text-white/82 md:text-2xl">
                  PROTOCOL
                </div>

                {/* Road shifted more right under CAR/Protocol */}
                <img
                  src="/images/icons/road-right.png"
                  alt=""
                  className="pointer-events-none absolute left-[32%] top-[-10px] z-0 w-72 opacity-95 md:left-[34%] md:top-[-14px] md:w-96"
                />
              </div>
            </div>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
              Human Decision Architecture (Applied in REAL TIME)
            </p>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold tracking-tight md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 md:text-2xl">
              DCP is a human decision architecture applied in real time. It
              inserts structure between emotion and action.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-black transition hover:bg-white/90"
              >
                Read Full White Paper
                <ExternalLink className="h-4 w-4" />
              </a>

              <Link
                href="/future"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10"
              >
                Future Direction
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 max-w-3xl rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.25em] text-white/55">
                Core Loop
              </div>
              <div className="mt-4 text-2xl font-medium text-white">
                Event → Emotion → Reaction
              </div>
              <p className="mt-2 text-white/76">
                Reaction is automatic. Response is chosen.
              </p>
              <div className="mt-5 text-2xl font-medium text-blue-300">
                Event → Emotion → Reaction → CAR → Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT DCP IS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
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
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage:
              "url('/images/backgrounds/section-bg-texture.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
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

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/45 p-6">
                <div className="flex items-start gap-4">
                  <img
                    src="/images/icons/traffic-light-angled.png"
                    alt="Traffic light"
                    className="h-20 w-20 object-contain md:h-24 md:w-24"
                  />
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                      Visual Anchor
                    </div>
                    <div className="mt-3 space-y-2 text-lg text-white/88">
                      <div>
                        <span className="text-red-300">Red</span> — Consider
                      </div>
                      <div>
                        <span className="text-yellow-200">Yellow</span> — Account
                      </div>
                      <div>
                        <span className="text-green-300">Green</span> — Reason
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

      {/* REAL-WORLD EXAMPLE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/45">
            Real-World Example
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Someone disrespects you in front of other people.
          </h2>
        </div>

        <div className="mt-12 max-w-5xl space-y-6">
          <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-orange-300">
              Default Path
            </div>
            <h3 className="mt-3 text-3xl font-medium">
              Emotion + Reaction → Action
            </h3>
            <p className="mt-5 text-lg leading-8 text-white/80">
              You snap back. It escalates. You lose control of the moment.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-black/45 p-8">
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">
              DCP Path
            </div>
            <h3 className="mt-3 text-3xl font-medium">
              Emotion + Reaction → CAR → Response
            </h3>
            <div className="mt-5 space-y-3 text-lg leading-8 text-white/82">
              <p>Consideration: What actually happened?</p>
              <p>Accountability: What is my role in what happens next?</p>
              <p>Reason: What response gives the best outcome?</p>
              <p className="pt-2 text-white">
                Possible response: speak calmly, disengage, or redirect.
              </p>
            </div>
            <p className="mt-5 text-xl text-white">
              Same emotion. Different outcome.
            </p>
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

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8">
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
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
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
              </div>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
              <a
                href="mailto:drivecarprotocol@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
              >
                <Mail className="h-5 w-5 text-orange-300" />
                <div>
                  <div className="text-sm text-white/55">Email</div>
                  <div className="text-white">drivecarprotocol@gmail.com</div>
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

      <footer className="border-t border-white/10 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Drive CAR Protocol. All rights reserved.</div>
          <div>Feel the emotion. Choose the response.</div>
        </div>
      </footer>
    </div>
  );
}