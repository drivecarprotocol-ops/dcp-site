"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  FileText,
  Layers3,
  ShieldCheck,
  ArrowDownToLine,
  ExternalLink,
  Mail,
  BrainCircuit,
  TrafficCone,
  ScanSearch,
  BookOpenCheck,
} from "lucide-react";

const layers = [
  {
    id: "01",
    title: "Landing",
    icon: Layers3,
    summary:
      "A fast, visual entry point. This is where people immediately understand the problem, the framing, and why DCP exists.",
    bullets: ["What DCP is", "Why reaction matters", "Who it is for", "Immediate next step"],
  },
  {
    id: "02",
    title: "QuickStart",
    icon: BookOpenCheck,
    summary:
      "The primary consumption layer. A short, readable guide that explains the framework without asking people to digest the full paper first.",
    bullets: ["Core principles", "Simple language", "Fast understanding", "Practical application"],
  },
  {
    id: "03",
    title: "Full PDF",
    icon: FileText,
    summary:
      "The depth layer. Full framing, architecture, and credibility for readers who want the complete model and underlying reasoning.",
    bullets: ["Full white paper", "Deeper explanation", "Framework depth", "Reference asset"],
  },
];

const principles = [
  {
    title: "Feel the emotion",
    text: "DCP does not deny emotion. It recognizes that emotion is real, immediate, and human.",
  },
  {
    title: "Create space",
    text: "DRIVE establishes awareness inside the field of existence so the moment is seen before it is acted out.",
  },
  {
    title: "Choose the response",
    text: "CAR introduces structure between feeling and action: Consideration, Accountability, and Reason.",
  },
];

const quickstartSteps = [
  {
    step: "01",
    title: "Notice the event",
    text: "Something happens externally or internally. A trigger enters awareness.",
  },
  {
    step: "02",
    title: "Feel the emotion",
    text: "No suppression. No pretending. Just honesty about what is happening inside you.",
  },
  {
    step: "03",
    title: "Run CAR",
    text: "Consideration asks what is happening. Accountability asks what role you play. Reason asks what action belongs next.",
  },
  {
    step: "04",
    title: "Respond with direction",
    text: "The point is not perfection. The point is better steering in real time.",
  },
];

const useCases = [
  "Conflict and communication",
  "Social media behavior",
  "AI interaction and prompting",
  "Parenting and teaching",
  "Leadership and team environments",
  "Personal behavioral correction",
];

function SectionCard({ children, className = "" }) {
  return (
    <div className={`rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-xl ${className}`}>
      <div className="p-6">{children}</div>
    </div>
  );
}

function PrimaryButton({ children }) {
  return (
    <button className="rounded-2xl bg-white px-6 py-3 text-black transition hover:bg-white/90">
      {children}
    </button>
  );
}

function OutlineButton({ children }) {
  return (
    <button className="rounded-2xl border border-white/20 bg-transparent px-6 py-3 text-white transition hover:bg-white/10">
      {children}
    </button>
  );
}

export default function DCPWebsiteV1() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.16),transparent_28%),linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]"
          >
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                <TrafficCone className="h-4 w-4 text-orange-400" />
                Drive–CAR Protocol
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
                Feel the emotion. <span className="text-orange-400">Choose the response.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
                DCP is a behavioral protocol for navigating the critical space between emotion and action.
                It does not remove emotion. It gives it structure.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>
                  <span className="inline-flex items-center gap-2">
                    Read QuickStart
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </PrimaryButton>
                <OutlineButton>
                  <span className="inline-flex items-center gap-2">
                    Open Full PDF
                    <ExternalLink className="h-4 w-4" />
                  </span>
                </OutlineButton>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-sm text-white/50">Layer 1</div>
                  <div className="mt-1 text-lg font-medium">Landing</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-sm text-white/50">Layer 2</div>
                  <div className="mt-1 text-lg font-medium">QuickStart PDF</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="text-sm text-white/50">Layer 3</div>
                  <div className="mt-1 text-lg font-medium">Full White Paper</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] border border-white/10 bg-neutral-950 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-white/45">Framework</div>
                    <div className="mt-2 text-2xl font-semibold">DRIVE → CAR → Response</div>
                  </div>
                  <ShieldCheck className="h-8 w-8 text-blue-400" />
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm text-orange-300">DRIVE</div>
                    <div className="mt-1 text-base text-white/80">
                      The field of existence. The environment in which events arise and emotion is felt.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm text-yellow-200">CAR</div>
                    <div className="mt-1 text-base text-white/80">
                      The internal processing layer: Consideration, Accountability, Reason.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="text-sm text-blue-300">Operator</div>
                    <div className="mt-1 text-base text-white/80">
                      You are the vehicle and the operator of it — but not the field.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="max-w-3xl">
          <div className="text-sm uppercase tracking-[0.25em] text-white/45">Why this exists</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Most damage happens in the space where emotion becomes behavior.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            DCP is designed for that moment. Not after the fallout. Not as theory detached from life.
            Right there — in the live interval between trigger and output.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <SectionCard key={item.title}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <BrainCircuit className="h-5 w-5 text-orange-300" />
              </div>
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/70">{item.text}</p>
            </SectionCard>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">3-layer structure</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Built for entry, clarity, and depth.
              </h2>
            </div>
            <div className="text-white/60">One protocol. Three access levels.</div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {layers.map((layer) => {
              const Icon = layer.icon;
              return (
                <SectionCard key={layer.id} className="bg-black/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-sm tracking-[0.25em] text-white/35">{layer.id}</div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                      <Icon className="h-5 w-5 text-blue-300" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{layer.title}</h3>
                  <p className="mt-4 leading-7 text-white/70">{layer.summary}</p>
                  <div className="mt-6 space-y-3">
                    {layer.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-center gap-3 text-white/75">
                        <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-white/45">QuickStart</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Start here before the full paper.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              The QuickStart is the main entry document. It should be short enough to finish, clear enough to share,
              and useful enough to apply immediately.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 text-white transition hover:bg-orange-500/90">
                <ArrowDownToLine className="h-4 w-4" />
                Download QuickStart
              </button>
              <OutlineButton>Preview Sections</OutlineButton>
            </div>
          </div>

          <div className="grid gap-4">
            {quickstartSteps.map((item) => (
              <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-start gap-4">
                  <div className="min-w-14 rounded-2xl border border-white/10 bg-black px-3 py-2 text-center text-sm tracking-[0.2em] text-orange-300">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{item.title}</h3>
                    <p className="mt-2 leading-7 text-white/70">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">Full PDF</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Depth for readers who want the whole framework.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                The full white paper carries the complete architecture, including DRIVE as the field layer,
                CAR as the internal processing system, and the broader application of response over reaction.
              </p>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
                <div className="flex items-start gap-4">
                  <ScanSearch className="mt-1 h-5 w-5 text-blue-300" />
                  <div>
                    <h3 className="text-xl font-medium">Suggested PDF role</h3>
                    <p className="mt-2 leading-7 text-white/70">
                      This is the credibility layer. The website should invite interest, the QuickStart should create understanding,
                      and the full paper should satisfy serious readers, collaborators, and evaluators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6 shadow-2xl">
              <div className="text-sm uppercase tracking-[0.25em] text-white/35">Use cases</div>
              <div className="mt-4 space-y-4">
                {useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <span className="text-white/80">{useCase}</span>
                    <ChevronRight className="h-4 w-4 text-white/35" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">Contact / next step</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Know thyself before you broadcast thyself.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                DCP is a stake in the ground for more conscious behavior — in life, online, and eventually in how humans work with AI.
              </p>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
              <a
                href="mailto:drivecarprotocol@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
              >
                <Mail className="h-5 w-5 text-orange-300" />
                <div>
                  <div className="text-sm text-white/50">Email</div>
                  <div className="text-white">drivecarprotocol@gmail.com</div>
                </div>
              </a>
              <a
                href="https://x.com/D_C_Protocol"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:bg-white/[0.06]"
              >
                <Layers3 className="h-5 w-5 text-blue-300" />
                <div>
                  <div className="text-sm text-white/50">Follow</div>
                  <div className="text-white">@D_C_Protocol</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div>Drive–CAR Protocol</div>
          <div>Landing / QuickStart / Full PDF</div>
        </div>
      </footer>
    </div>
  );
}