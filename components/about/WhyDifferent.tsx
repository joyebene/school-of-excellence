"use client";

import {
  Compass,
  Users,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Purpose Driven",
    desc: "Helping students discover purpose before chasing success.",
    icon: Compass,
    span: "lg:col-span-2",
  },
  {
    title: "Mentorship Based",
    desc: "Learn directly from experienced mentors and leaders.",
    icon: Users,
  },
  {
    title: "Innovation Focused",
    desc: "Preparing students for a rapidly changing world.",
    icon: Rocket,
  },
  {
    title: "Future Ready",
    desc: "Building skills that remain valuable beyond graduation.",
    icon: ShieldCheck,
    span: "lg:col-span-2",
  },
];

export default function WhyDifferent() {
  return (
    <section className="py-32 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <span className="text-amber-400 uppercase tracking-widest text-sm sm:text-base">
            Why Choose Us
          </span>

          <h2 className="text-4xl sm:text-5xl font-bold mt-4">
            What Makes Us Different
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item) => (
            <div
              key={item.title}
              className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 ${item.span}`}
            >
              <item.icon className="w-12 h-12 text-amber-400 mb-6" />

              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-white/70">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}