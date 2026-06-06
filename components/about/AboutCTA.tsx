"use client";

import Link from "next/link";
import FloatingLogos from "../FloatingLogos";
import FloatingShapes from "../FloatingShapes";
import MagneticButton from "../MagneticButton";

export default function AboutCTA() {
  return (
    <section
      id="join"
      className="py-32 bg-black/80 text-white relative overflow-hidden flex items-center justify-center"
    >
      <FloatingLogos />
      <FloatingShapes />
      <div
        className="glass max-w-4xl rounded-3xl p-8 sm:p-12 md:p-16 text-center relative z-10 mx-4 sm:mx-10"
        style={{ animation: "breathing-glow 4s ease-in-out infinite" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Ready to Begin Your Journey to Excellence?
        </h2>
        <p className="sm:text-xl mb-10 text-white/90">
          Join a community committed to purpose and impact.
        </p>
        <MagneticButton>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-12 py-4 rounded-2xl sm:text-lg font-semibold hover:bg-amber-400 transition-all duration-300"
          >
            Join the School Today
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}