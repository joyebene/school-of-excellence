"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="text-blue-600 font-semibold text-sm sm:text-base uppercase tracking-widest">
            OUR STORY
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-8 text-gray-900">
            Why School of Excellence Exists
          </h2>

          <p className="text-zinc-600 sm:text-lg leading-relaxed">
            Every generation needs individuals who are prepared not only to
            succeed academically but to create solutions, inspire others,
            and lead meaningful change.
          </p>

          <p className="text-zinc-600 sm:text-lg leading-relaxed mt-6">
            School of Excellence was established to bridge the gap between
            academic achievement, innovation, and intentional personal
            development.
          </p>
        </motion.div>

        <div className="relative rounded-3xl overflow-hidden h-100 sm:h-125">
          <Image
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80"
            fill
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}