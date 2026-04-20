"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center px-6 md:px-20">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/hero-main.jpg')" }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-5xl">

          <h1 className="text-5xl md:text-7xl font-bold">
            DRIVE <span className="text-blue-400">CAR</span>
          </h1>

          <div className="text-sm tracking-[0.4em] mt-2 text-gray-400">
            PROTOCOL
          </div>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            Human Decision Architecture (Applied in REAL TIME)
          </p>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold">
            Feel the emotion.<br />
            <span className="text-orange-500">Choose the response.</span>
          </h2>

        </div>

        {/* CONE */}
        <img
          src="/images/icons/cone.png"
          className="absolute right-10 bottom-0 w-48 md:w-64 opacity-90 z-20"
        />

        {/* ROAD */}
        <img
          src="/images/icons/road-right.png"
          className="absolute right-0 bottom-0 w-64 opacity-80"
          style={{ transform: "translateX(20px)" }}
        />

      </section>

      {/* CORE LOOP */}
      <section className="py-20 px-6 md:px-20 text-center">

        <h3 className="text-2xl md:text-3xl font-semibold mb-6">
          Event → Emotion → Reaction → <span className="text-blue-400">CAR</span> → Response
        </h3>

        <p className="text-gray-400 max-w-xl mx-auto">
          Reaction is automatic. Response is chosen.
        </p>

      </section>

      {/* DEFAULT VS DCP */}
      <section className="py-20 px-6 md:px-20 space-y-10">

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <div className="text-orange-400 text-sm mb-2">DEFAULT PATH</div>
          <h4 className="text-xl mb-4">Emotion + Reaction → Action</h4>
          <p className="text-gray-400">
            You snap back. It escalates. You lose control of the moment.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800">
          <div className="text-blue-400 text-sm mb-2">DCP PATH</div>
          <h4 className="text-xl mb-4">
            Emotion + Reaction → CAR → Response
          </h4>

          <ul className="text-gray-400 space-y-2">
            <li>Consideration: What actually happened?</li>
            <li>Accountability: What is my role?</li>
            <li>Reason: What response gives the best outcome?</li>
          </ul>
        </div>

      </section>

      {/* CAR SECTION */}
      <section className="relative py-24 px-6 md:px-20">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/section-bg-texture.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl">

          <h2 className="text-4xl font-bold mb-10 text-blue-400">
            CAR
          </h2>

          <div className="space-y-6">

            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-lg font-semibold">What is happening?</h4>
              <p className="text-gray-300">See the moment clearly before you act.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-lg font-semibold">What is my role?</h4>
              <p className="text-gray-300">Own your part in what happens next.</p>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h4 className="text-lg font-semibold">What is the best response?</h4>
              <p className="text-gray-300">Choose direction instead of impulse.</p>
            </div>

          </div>

        </div>

        {/* TRAFFIC LIGHT */}
        <img
          src="/images/traffic-light-angled.png"
          className="absolute right-10 top-20 w-40 md:w-56 opacity-90"
        />

      </section>

      {/* FUTURE */}
      <section className="py-24 px-6 md:px-20">

        <div
          className="bg-cover bg-center p-10 rounded-xl"
          style={{
            backgroundImage: "url('/images/section-bg-future.jpg')",
          }}
        >

          <div className="bg-black/70 p-10 rounded-xl">

            <h2 className="text-4xl font-bold mb-4">
              DCP works without <span className="text-blue-400">technology</span>.
            </h2>

            <p className="text-gray-300 max-w-2xl">
              Future interfaces may make patterns more visible.
              They do not replace awareness or responsibility.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-zinc-800">

        <div className="flex justify-center gap-6 mb-4">

          <a href="mailto:drivecarprotocol@gmail.com">
            <img src="/images/icon-gmail.png" className="w-6" />
          </a>

          <a href="https://x.com/D_C_Protocol" target="_blank">
            <img src="/images/icon-x.png" className="w-6" />
          </a>

        </div>

        <p className="text-gray-500 text-sm">
          © 2026 DriveCar Protocol. All rights reserved.
        </p>

      </footer>

    </main>
  );
}