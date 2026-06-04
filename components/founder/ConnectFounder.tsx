"use client";

import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import FloatingShapes from "../FloatingShapes";

export default function ConnectFounder() {
  return (
    <section className="relative py-16 bg-slate-50 overflow-hidden text-gray-900">
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl sm:text-5xl font-bold mb-8">
          Connect With John
        </h2>

        <p className="text-zinc-600 mb-10">
          Follow John&apos;s journey, insights, and impact.
        </p>

        <div className="flex justify-center gap-5">

          <a href="#">
            <Linkedin />
          </a>

          <a href="#">
            <Instagram />
          </a>

          <a href="#">
            <Facebook />
          </a>

          <a href="#">
            <Twitter />
          </a>

        </div>
      </div>
    </section>
  );
}