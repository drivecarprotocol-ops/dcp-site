"use client";

import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";

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
    title: "2D CAR Layer",
    text: "A grounded decision interface keeps the core questions visible: What is happening? What is my role? What is the best response?",
  },
  {
    title: "Optional AI Integration",
    text: "AI may support reflection, pattern recognition, and guidance without becoming a dependency or replacing personal awareness.",
  },
];

export default function FuturePage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[78vh] flex items-center px-6 md:px-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/backgrounds/section-future.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-5xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-white/60 hover:text-white transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </Link>

          <div className="mt-8 text-sm tracking-[0.25em] uppercase text-white/45">
            Future Direction
          </div>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold max-w-5xl">
            DCP works without <span className="text-blue-400">technology</span>.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl leading-8">
            Future interfaces may help make patterns more visible, interactive,
            and easier to navigate. They do not replace awareness,
            accountability, or responsibility.
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
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.24em] text-white/45">
            Conceptual Direction
          </div>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
            Visualization could amplify awareness.
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/80 max-w-3xl">
            DCP is already complete as a human-first, real-time framework.
            Future development may explore visual systems that map events,
            emotions, reactions, CAR processing, responses, outcomes, and
            recurring patterns across time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {futureCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6"
            >
              <h3 className="text-xl font-medium">{card.title}</h3>
              <p className="mt-3 text-white/78 leading-7">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPLE */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-20">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.8rem] border border-blue-500/20 bg-blue-500/[0.08] p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-blue-300">
                Core Principle
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                The system still works without any of this.
              </h2>
              <p className="mt-5 text-white/82 leading-8">
                DCP remains effective as a direct, repeatable human framework:
              </p>
              <div className="mt-6 text-2xl md:text-3xl font-medium text-white">
                Feel the emotion. Choose the response.
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-8">
              <div className="text-sm uppercase tracking-[0.24em] text-white/45">
                Framing
              </div>
              <p className="mt-5 text-white/82 leading-8">
                This is not about replacing self-control with software.
                It is about making internal patterns more visible so people can
                better understand how they move through conditions in real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS LENS */}
      <section className="py-20 px-6 md:px-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-white/45">
              Systems Lens
            </div>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Awareness of inputs → intentional control of outputs.
            </p>
          </div>

          <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.05] p-6">
            <div className="text-sm uppercase tracking-[0.24em] text-white/45">
              Human First
            </div>
            <p className="mt-4 text-lg leading-8 text-white/80">
              Technology does not define the system. The individual does.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8">
          <p className="max-w-5xl text-lg leading-8 text-white/82">
            Future development may explore interactive mapping, visualization,
            structured journaling, optional AI support, and continuity tools.
            The foundation remains unchanged: DCP is a human decision
            architecture applied in real time, and it improves with awareness
            alone. :contentReference[oaicite:0]{index=0}
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.25em] text-white/45">
                Contact / Follow
              </div>
              <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
                Stay close to the core.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
                The future only matters if the foundation stays clean.
              </p>
            </div>

            <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-black/50 p-6">
              <a
                href="mailto:drivecarprotocol@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.08]"
              >
                <img
                  src="/images/icons/icon-gmail.png"
                  alt=""
                  className="h-5 w-5 object-contain"
                />
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
                  alt=""
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Drive CAR Protocol. All rights reserved.</div>
          <div>DCP works without technology.</div>
        </div>
      </footer>
    </main>
  );
}