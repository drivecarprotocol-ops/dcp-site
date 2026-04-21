"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/backgrounds/hero-main.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* DCP watermark */}
        <img
          src="/images/icons/DCP-ID.png"
          alt="DCP"
          className="absolute right-6 top-6 w-32 opacity-25 md:w-44"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl"
          >

            {/* LOGO */}
            <div className="relative inline-block">
              
              <div className="text-5xl font-semibold md:text-7xl">
                <span className="text-white">DRIVE</span>
                <span className="ml-2 text-blue-400">CAR</span>
              </div>

              <img
                src="/images/icons/cone.png"
                alt=""
                className="absolute left-[95%] top-[10px] w-16 md:w-20"
              />

              <div className="mt-2 text-xl uppercase tracking-[0.3em] text-white/80 md:text-2xl">
                PROTOCOL
              </div>

              <img
                src="/images/icons/road-right.png"
                alt=""
                className="absolute left-[40%] top-[-10px] w-56 md:w-72"
              />
            </div>

            {/* HEADLINE */}
            <h1 className="mt-6 text-5xl font-semibold md:text-7xl">
              Feel the emotion.{" "}
              <span className="text-orange-400">Choose the response.</span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-6 max-w-3xl text-lg text-white/80 md:text-2xl">
              DRIVE CAR Protocol is a human decision architecture applied in real time.
              It inserts structure between emotion and action.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <a
                href="/docs/DRIVE-CAR-Protocol-White-Paper.pdf"
                target="_blank"
                className="rounded-2xl bg-white px-6 py-3 text-black"
              >
                Read Full White Paper
              </a>

              <Link
                href="/future"
                className="rounded-2xl border border-white/20 px-6 py-3"
              >
                Future Direction <ChevronRight className="inline ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* CORE MODEL */}
            <div className="mt-12 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6">

              <div className="text-sm uppercase text-white/50">
                Core Behavioral Model
              </div>

              <div className="mt-4 text-2xl">
                Event → Emotion → Reaction{" "}
                <span className="text-white/50">(automatic)</span>
              </div>

              <div className="mt-4 text-center text-blue-300 text-xl">
                ↓
              </div>

              <div className="text-center text-blue-300 text-2xl">
                CAR
              </div>

              <div className="mt-2 text-center text-blue-300 text-xl">
                ↓
              </div>

              <div className="mt-2 text-center text-blue-300 text-2xl">
                Response <span className="text-blue-200/70">(chosen)</span>
              </div>

            </div>

          </motion.div>
        </div>
      </section>

    </div>
  );
}