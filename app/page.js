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

const coreCards = [
  {
    title: "Consideration",
    subtitle: "What is happening?",
    text: "See the moment clearly before you act.",
  },
  {
    title: "Accountability",
    subtitle: "What is my role?",
    text: "Own your part in what happens next.",
  },
  {
    title: "Reason",
    subtitle: "What is the best response?",
    text: "Choose direction instead of defaulting to impulse.",
  },
];

const practiceBullets = [
  "Do not suppress the emotion.",
  "Do not act immediately.",
  "Run CAR, then respond.",
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(249,115,22,0.16),transparent_25%)]" />

        <img
          src="/images/icons/DCP-ID.png"
          alt="DCP"
          className="pointer-events-none absolute right-6 top-6 z-20 w-[72px] opacity-55 md:right-8 md:top-8"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.38 }}
            className="max-w-4xl"
          >
            <div className="relative inline-block">
              <div className="leading-none">
                <div className="flex items-start gap-3">
                  <div className="text-[2.6rem] font-semibold tracking-tight md:text-[4.2rem]">
                    <span className="text-white">DRIVE</span>{" "}
                    <span className="text-blue-400">CAR</span>
                  </div>
                  <img
                    src="/images/icons/cone.png"
                    alt=""
                    className="mt-2 h-10 w-10 object-contain opacity-95 md:mt-3 md:h-12 md:w-12"
                  />
                </div>

                <div className="relative mt-1 text-sm uppercase tracking-[0.28em] text-white/72 md:text-base">
                  <span className="relative z-10 inline-block">Protocol</span>
                  <img
                    src="/images/icons/road-right.png"
                    alt=""
                    className="pointer-events-none absolute -bottom-5 left-0 z-0 h-8 w-[180px] object-contain opacity-90 md:-bottom-6 md:h-10 md:w-[230px]"
                  />
                </div>
              </div>
            </div>

            <h1 className="mt-12 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              DCP is a real-time framework for structuring the moment between
              emotion and action.
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

            <div className="mt-14 max-w-3xl rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <div className="text-sm uppercase tracking-[0.24em] text-white/45">
                Core loop
              </div>
              <div className="mt-4 text-xl font-medium text-white/92 md:text-2xl">
                Event → Emotion → Reaction
              </div>
              <div className="mt-3 text-white/70">
                Reaction is automatic. Response is chosen.
              </div>
              <div className="mt-5 text-xl font-medium text-blue-300 md:text-2xl">
                Event → Emotion → Reaction → CAR → Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/45">
            What DCP is
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            A structure for the exact moment where behavior can go automatic or
            intentional.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            DCP does not remove emotion. It organizes what happens next. The
            point is not to become emotionless. The point is to stop reaction
            from becoming immediate action.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm uppercase tracking-[0.22em] text-orange-300">
              Without structure
            </div>
            <div className="mt-3 text-2xl font-medium">
              Emotion + Reaction → Action
            </div>
            <p className="mt-4 leading-7 text-white/70">
              This is where conflict, escalation, and regret usually come from.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="text-sm uppercase tracking-[0.22em] text-blue-300">
              With structure
            </div>
            <div className="mt-3 text-2xl font-medium">
              Emotion + Reaction → CAR → Response
            </div>
            <p className="mt-4 leading-7 text-white/70">
              Same emotion. Different outcome.
            </p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.13]"
          style={{
            backgroundImage: "url('/images/backgrounds/section-bg-texture.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/78" />

        <div className="relative mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                CAR
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                The decision engine.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                CAR is the internal process that examines emotion before it
                becomes action.
              </p>

              <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-black/45 p-5">
                <div className="flex items-center gap-4">
                  <img
                    src="/images/icons/traffic-light.png"
                    alt="Traffic light"
                    className="h-14 w-14 object-contain"
                  />
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-white/45">
                      Visual anchor
                    </div>
                    <div className="mt-1 text-white/78">
                      Red = Consideration · Yellow = Accountability · Green =
                      Reason
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {coreCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.28, delay: index * 0.04 }}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-white/40">
                    {item.title}
                  </div>
                  <h3 className="mt-2 text-2xl font-medium">{item.subtitle}</h3>
                  <p className="mt-3 leading-7 text-white/70">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">
              How it works
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              When emotion hits, do not suppress it. Do not act immediately.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Run CAR, then respond. This creates a brief pause where
              decision-making becomes intentional instead of automatic.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-start gap-4">
              <img
                src="/images/icons/yield.png"
                alt="Yield sign"
                className="mt-1 h-12 w-12 object-contain"
              />
              <div>
                <div className="text-sm uppercase tracking-[0.24em] text-white/45">
                  Practice
                </div>
                <div className="mt-4 space-y-4">
                  {practiceBullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">
              Real-world example
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Someone disrespects you in front of other people.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.7rem] border border-white/10 bg-black/45 p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-orange-300">
                Default path
              </div>
              <div className="mt-3 text-2xl font-medium">
                Emotion + Reaction → Action
              </div>
              <p className="mt-4 leading-7 text-white/72">
                You snap back. It escalates. You lose control of the moment.
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-black/45 p-6">
              <div className="text-sm uppercase tracking-[0.24em] text-blue-300">
                DCP path
              </div>
              <div className="mt-3 text-2xl font-medium">
                Emotion + Reaction → CAR → Response
              </div>
              <div className="mt-4 space-y-3 text-white/72">
                <p>Consideration: What actually happened?</p>
                <p>Accountability: What is my role in what happens next?</p>
                <p>Reason: What response gives the best outcome?</p>
              </div>
              <p className="mt-5 text-white/85">
                Possible response: speak calmly, disengage, or redirect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.16]"
          style={{
            backgroundImage:
              "url('/images/backgrounds/section-bg-pressure.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/78" />

        <div className="relative mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">
              Why it matters
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              The recognition gap is real.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              People often know something is wrong while it is happening and
              still proceed the same way. DCP provides structure during the
              moment, not after it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="text-lg font-medium">Emotion is inevitable</div>
              <p className="mt-3 leading-7 text-white/70">
                The system does not deny what is real.
              </p>
            </div>
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="text-lg font-medium">Reaction is automatic</div>
              <p className="mt-3 leading-7 text-white/70">
                Left alone, it tends to repeat itself.
              </p>
            </div>
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="text-lg font-medium">Response is chosen</div>
              <p className="mt-3 leading-7 text-white/70">
                Structure creates control under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 md:px-8 md:py-22">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Full white paper
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Go deeper if you want the full architecture.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                The website is the QuickStart. The white paper holds the full
                framing, structure, and broader context.
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
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
              >
                <img
                  src="/images/icons/icon-gmail.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <div className="text-white">drivecarprotocol@gmail.com</div>
                </div>
              </a>

              <a
                href="https://x.com/D_C_Protocol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
              >
                <img
                  src="/images/icons/icon-x.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                <div>
                  <div className="text-sm text-white/50">X</div>
                  <div className="text-white">@D_C_Protocol</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Drive CAR Protocol. All rights reserved.</div>
          <div>Feel the emotion. Choose the response.</div>
        </div>
      </footer>
    </div>
  );
}