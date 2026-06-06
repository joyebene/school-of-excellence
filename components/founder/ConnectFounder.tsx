"use client";

import {
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Phone,
} from "lucide-react";


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

          <a href="https://www.linkedin.com/in/john-godwin-5a3444243"
          target="_blank" rel="noopener noreferrer">
            {<Linkedin />}
          </a>

          <a href="https://www.instagram.com/_johngodwin" target="_blank" rel="noopener noreferrer">
            {<Instagram />}
          </a>

          <a href="https://www.facebook.com/share/14dydrYTASg/?ref=app_2373072738" target="_blank" rel="noopener noreferrer">
            {<Facebook />}
          </a>

          <a href="https://x.com/johngodwin1" target="_blank" rel="noopener noreferrer">
            {<Twitter />}
          </a>

          <a href="https://wa.me/qr/MSIHJVWZSYQ6J1" target="_blank" rel="noopener noreferrer">
            {<Phone />}
          </a>

        </div>
      </div>
    </section>
  );
}