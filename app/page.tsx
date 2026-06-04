'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Lightbulb, Rocket, Target, Users, Presentation, Award, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import AnimatedLogo from '@/components/AnimatedLogo';
import AnimatedCounter from '@/components/AnimatedCounter';
import MagneticButton from '@/components/MagneticButton';
import FloatingShapes from '@/components/FloatingShapes';
import FloatingLogos from '@/components/FloatingLogos';
import ParallaxSection from '@/components/ParallaxSection';
import PillarCard from '@/components/PillerCard';

import SpotlightCard from '@/components/SpotlightCard';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <main className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex justify-center text-white overflow-hidden grid-pattern pb-10 sm:pt-20">
        <FloatingLogos />
        <FloatingShapes />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex justify-center relative"
          >
            <AnimatedLogo />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Raising <span className="logo-gradient">Excellent Minds</span><br />
            for Purpose, Innovation, and Impact
          </h1>

          <p className="max-w-2xl mx-auto sm:text-lg md:text-xl text-white/90 mb-10">
            Empowering students and young professionals through transformative learning,
            innovation, mentorship, and personal development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <Link
                href="/programmes"
                className="accent-button group flex  px-6 md:px-10 py-4 rounded-2xl font-semibold sm:text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 justify-center"
              >
                Explore Programmes
              </Link>
            </MagneticButton>

            <Link
              href="/founder"
              className="glass border border-white/30 px-10 py-4 rounded-2xl font-semibold sm:text-lg hover:bg-white/10 transition-all duration-500 text-center"
            >
              Meet the Founder
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10 sm:mb-16 md:mb-18">
            <h2
              className="text-4xl sm:text-5xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-amber-500 text-transparent bg-clip-text"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient-pan 3s ease infinite',
              }}
            >
              Guiding Principles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <SpotlightCard
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 0.8, bounce: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="absolute -top-6 -right-6">
                <Target className="w-28 h-28 text-blue-500/10" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl text-gray-900 font-semibold mb-4 mt-8">Our Vision</h3>
              <p className="sm:text-lg text-zinc-600 leading-relaxed">
                To nurture excellence in students and young professionals through learning,
                innovation, and intentional personal development.
              </p>
            </SpotlightCard>

            <SpotlightCard
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', duration: 0.8, bounce: 0.5 }}
              viewport={{ once: false }}
            >
              <div className="absolute -top-6 -right-6">
                <Rocket className="w-28 h-28 text-purple-500/10" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 mt-8 text-gray-900">Our Mission</h3>
              <p className="sm:text-lg text-zinc-600 leading-relaxed">
                To equip students with transformative learning, practical skills, and mentorship
                to excel, innovate, and lead with purpose.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <ParallaxSection bgImage="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
        <div className="py-24 text-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">The Foundation of Excellence</h2>
              <p className="sm:text-lg md:text-xl text-zinc-300">Three pillars that define everything we do</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Academics",
                  desc: "Empowering students with knowledge, learning strategies, and intellectual discipline.",
                  color: "blue"
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  desc: "Encouraging creativity, technology, and problem-solving to build future changemakers.",
                  color: "amber"
                },
                {
                  icon: Target,
                  title: "Personal Development",
                  desc: "Cultivating character, leadership, self-awareness, and purpose for lifelong impact.",
                  color: "purple"
                }
              ].map((pillar, i) => (
                <PillarCard key={i} pillar={pillar} i={i} />
              ))}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* IMPACT STATISTICS */}
      <section className="py-24 bg-zinc-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: Users, number: 100, suffix: "", label: "Students Mentored" },
              { icon: Presentation, number: 50, suffix: "", label: "Training Sessions" },
              { icon: Award, number: 100, suffix: "", label: "Success Stories" },
              { icon: HeartHandshake, number: 500, suffix: "", label: "Community Members" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: i * 0.2 }}
                  className="text-amber-400 mb-4 flex justify-center"
                >
                  <stat.icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </motion.div>
                <div
                  className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-amber-500 mb-2"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: 'gradient-pan 3s ease infinite',
                  }}
                >
                  <AnimatedCounter end={stat.number} />
                </div>
                <p className="text-zinc-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="join" className="py-32 bg-black/80  text-white relative overflow-hidden flex items-center justify-center">
        <FloatingLogos />
        <FloatingShapes />
        <div
          className="glass max-w-4xl rounded-3xl p-8 sm:p-12 md:p-16 text-center relative z-10 mx-4 sm:mx-10"
          style={{
            animation: 'breathing-glow 4s ease-in-out infinite',
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Begin Your Journey to Excellence?
          </h2>
          <p className="sm:text-xl mb-10 text-white/90">Join a community committed to purpose and impact.</p>

          <MagneticButton>
            <Link
              href="/programmes"
              className="inline-block bg-white text-black px-12 py-4 rounded-2xl sm:text-lg font-semibold hover:bg-amber-400 transition-all duration-300"
            >
              Join the School Today
            </Link>
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}