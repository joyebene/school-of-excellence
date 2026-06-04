"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "../MagneticButton";

export default function FounderPreview() {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f59e0b20,transparent_40%)]" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-80 h-80 md:w-96 md:h-96 mx-auto"
        >
          <div className="group w-full h-full rounded-full overflow-hidden border-4 border-amber-400/30 p-2 transition-all duration-300 hover:border-amber-400 hover:scale-105">
            <Image
              src="/founder-img.jpeg"
              alt="John Godwin"
              fill
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center md:text-start"
        >
          <span
            className="sm:text-lg font-semibold bg-linear-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text"
            style={{
              backgroundSize: "200% 200%",
              animation: "gradient-pan 3s ease infinite",
            }}
          >
            Meet The Founder
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-8">John Godwin</h2>

          <p className="text-white/70 sm:text-lg leading-relaxed">
            A visionary leader, educator, and innovator committed to raising a
            generation of excellent students and purpose-driven young
            professionals.
          </p>

          <MagneticButton>
            <Link
              href="/founder"
              className="inline-flex mt-10 bg-white text-black px-8 py-3 md:py-4 rounded-2xl font-semibold hover:bg-amber-400 transition-colors"
            >
              Read Full Story
            </Link>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}