'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import MagneticButton from '@/components/MagneticButton';
import FloatingShapes from '@/components/FloatingShapes';
import FloatingLogos from '@/components/FloatingLogos';
import SpotlightCard from '@/components/SpotlightCard';
import ContactInfoItem from '@/components/ContactInfoItem';

export default function Contact() {
  return (
    <main className="overflow-hidden bg-zinc-50">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden grid-pattern">
        <FloatingLogos />
        <FloatingShapes />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium text-sm sm:text-base">Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter leading-tight mb-6">
              Let&apos;s Build Your <span className="logo-gradient">Future of Excellence</span>
            </h1>

            <p className="max-w-xl mx-auto text-lg text-white/90">
              Have questions about our programmes? Want to partner with us?
              Or ready to join the movement? We&apos;re here for you.
            </p>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
        >
          Scroll to connect ↓
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* CONTACT FORM */}
          <div className="lg:col-span-3">
            <SpotlightCard className="px-3 py-4 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                      placeholder="you@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="+234 816 741 7955"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-3xl border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-y"
                    placeholder="I'm interested in your programmes and would like more information..."
                    required
                  />
                </div>

                <MagneticButton>
                  <button
                    type="submit"
                    className="accent-button w-full flex items-center justify-center gap-3 px-10 py-3 sm:py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </MagneticButton>
              </form>
            </SpotlightCard>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Contact */}
            <SpotlightCard>
              <div className="px-3 py-4 sm:p-8">
                <h3 className="text-2xl font-semibold mb-8 text-gray-900">Get in Touch Directly</h3>

                <div className="space-y-8">
                  <ContactInfoItem
                    icon={Mail}
                    iconBgColor="bg-blue-100"
                    iconColor="text-blue-600"
                    title="Email"
                  >
                    <a href="mailto:info@schoolofexcellence.com" className="text-blue-600 hover:underline">
                      info@schoolofexcellence.com
                    </a>
                  </ContactInfoItem>

                  <ContactInfoItem
                    icon={Phone}
                    iconBgColor="bg-purple-100"
                    iconColor="text-purple-600"
                    title="Phone / WhatsApp"
                  >
                    <a href="tel:+2348167417955" className="text-purple-600 hover:underline">
                      +234 816 741 7955
                    </a>
                  </ContactInfoItem>

                  <ContactInfoItem
                    icon={MapPin}
                    iconBgColor="bg-amber-100"
                    iconColor="text-amber-600"
                    title="Location"
                  >
                    <p className="text-zinc-600">Lagos State, Nigeria</p>
                  </ContactInfoItem>

                  <ContactInfoItem
                    icon={Clock}
                    iconBgColor="bg-emerald-100"
                    iconColor="text-emerald-600"
                    title="Office Hours"
                  >
                    <p className="text-zinc-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </ContactInfoItem>
                </div>
              </div>
            </SpotlightCard>

            {/* Founder Connect */}
            <SpotlightCard>
              <div className="px-3 py-4 sm:p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Meet the Founder</h3>
                <p className="text-zinc-600 mb-8">
                  John Godwin is always happy to connect with passionate individuals.
                </p>

                <Link
                  href="/founder"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors flex items-center gap-2"
                >
                  Learn more about John Godwin <ArrowRight className="w-5 h-5 mt-1" />
                </Link>
              </div>
            </SpotlightCard>

            {/* Social / Community */}
            <div className="text-center text-sm text-zinc-500 pt-6">
              Follow us on social media for updates, success stories, and community events.
            </div>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <section id="join"
        className="py-32 bg-black/80 text-white relative overflow-hidden flex items-center justify-center">
        <FloatingLogos />
        <FloatingShapes />
        <div
          className="glass max-w-4xl rounded-3xl p-8 sm:p-12 md:p-16 text-center relative z-10 mx-4 sm:mx-10"
          style={{ animation: "breathing-glow 4s ease-in-out infinite" }}
        >
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Raise Your Standard of Excellence?
          </h2>
          <p className="sm:text-xl mb-10 text-white/90">
            Join the School of Excellence family today.
          </p>

          <MagneticButton>
            <Link
            href="/programmes"
            className="inline-block bg-white text-black px-12 py-4 rounded-2xl sm:text-lg font-semibold hover:bg-amber-400 transition-all duration-300"
          >
              Explore Programmes
            </Link>
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}