'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GraduationCap, Lightbulb, Users, Calendar, Clock, Award, BookOpen,
  Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '@/components/MagneticButton';
import SpotlightCard from '@/components/SpotlightCard';
import FloatingShapes from '@/components/FloatingShapes';
import ParallaxSection from '@/components/ParallaxSection';
import FloatingLogos from '@/components/FloatingLogos';
import PillarCard from '@/components/PillerCard';

export default function Programmes() {
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const upcomingProgram = {
    title: "Academic Excellence Blueprint",
    date: "June 18th & 19th, 2026",
    time: "7:00 PM",
    venue: "Google Meet",
    host: "John Godwin",
    guest: "Ayuba Danjuma",
    image: "/upcoming-prog-img.jpeg",
    formLink: "https://forms.gle/Fc8ZKfUd7pRHg1Jp9",
    description: "Strategies, Systems & Habits for Outstanding Academic Performance"
  };

  const programPillars = [
    {
      title: "Academic Excellence",
      icon: GraduationCap,
      color: "blue",
      description: "Building intellectual discipline and outstanding academic performance.",
      programs: [
        "Academic Excellence Blueprint",
        "Effective Study Techniques",
        "Time Management & Productivity",
        "Building a Strong CGPA",
        "Research & Academic Writing",
        "Critical Thinking & Problem Solving"
      ]
    },
    {
      title: "Innovation & Creativity",
      icon: Lightbulb,
      color: "amber",
      description: "Empowering future-ready skills through technology and creativity.",
      programs: [
        "Web Development",
        "Blockchain Fundamentals",
        "Artificial Intelligence",
        "Cybersecurity Awareness",
        "Digital Marketing",
        "Entrepreneurship & Innovation"
      ]
    },
    {
      title: "Personal Development & Leadership",
      icon: Users,
      color: "purple",
      description: "Developing character, leadership, and purposeful living.",
      programs: [
        "Discovering Purpose & Vision",
        "Leadership Development",
        "Public Speaking & Communication",
        "Emotional Intelligence",
        "Personal Branding",
        "Teamwork & Collaboration"
      ]
    }
  ];

  return (
    <main className="overflow-hidden bg-zinc-50">
      {/* HERO HEADER */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-linear-to-br from-blue-950 via-purple-950 to-zinc-950 text-white overflow-hidden">
        <FloatingLogos />
        <FloatingShapes />

        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] bg-size-40px_40px]" />

        <motion.div
          style={{ opacity: headerOpacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Programs Built for<br />
            <span className="logo-gradient">Excellence</span>
          </h1>

          <p className="max-w-2xl mx-auto sm:text-lg md:text-xl text-white/90 mb-10">
            Transformative learning experiences across three pillars — designed to unlock your highest potential.
          </p>

          <MagneticButton>
            <a
              href="#our-programs"
              className="accent-button group flex  px-6 md:px-10 py-4 rounded-2xl font-semibold sm:text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 justify-center w-fit mx-auto"
            >
              Explore Our Programs
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60"
        >
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-linear-to-b from-transparent via-white/40 to-transparent mt-2" />
        </motion.div>
      </section>

      {/* UPCOMING PROGRAMS */}
      <section id="upcoming" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Upcoming Programmes</h2>
            <p className="sm:text-lg md:text-xl text-gray-800">Transaforming programmes you will not want to miss for anything</p>
          </div>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image + Info */}
            <div className="flex-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={upcomingProgram.image}
                  alt="Academic Excellence Blueprint Webinar"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/6`  121111111Q`aqz  0 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1 rounded-full text-sm mb-4">
                    <Calendar className="w-4 h-4" /> {upcomingProgram.date}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">{upcomingProgram.title}</h2>
                  <p className="text-lg md:text-xl text-white/90 mb-6">{upcomingProgram.description}</p>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      <div>
                        <div className="font-medium">Time</div>
                        <div>{upcomingProgram.time}</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">Venue</div>
                      <div>{upcomingProgram.venue}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details & Register */}
            <div className="flex-1 space-y-8">
              <SpotlightCard>
                <div className="p-4 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">Event Details</h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-100 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-gray-900">Host</div>
                        <div className="text-zinc-600">{upcomingProgram.host} — Founder, School of Excellence</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6  text-amber-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg text-gray-900">Guest Speaker</div>
                        <div className="text-zinc-600">{upcomingProgram.guest}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              <div>
                <MagneticButton>
                  <a
                    href={upcomingProgram.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="accent-button group flex  px-6 md:px-10 py-4 rounded-2xl font-semibold sm:text-lg shadow-xl shadow-blue-500/30 hover:shadow-2xl transition-all duration-500 justify-center text-white"
                  >
                    Register for Free Webinar
                  </a>
                </MagneticButton>
                <p className="text-center text-sm text-zinc-500 mt-4">Limited slots • Free to attend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROGRAMS SECTION */}
      <section id="our-programs" className="py-24 bg-zinc-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Our Programs</h2>
            <p className="max-w-2xl mx-auto sm:text-lg md:text-xl text-gray-900 mb-10">
              At the School of Excellence, our programs are built around three core pillars designed to equip students and young professionals for purpose, innovation, and impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {programPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SpotlightCard className="h-full bg-white">
                  <div className="p-4">
                    <div className="absolute -top-2 -right-1">
                      <pillar.icon className="w-28 h-28 text-purple-500/20" strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">{pillar.title}</h3>
                    <p className="text-zinc-600 mb-10 leading-relaxed">{pillar.description}</p>

                    <ul className="space-y-4">
                      {pillar.programs.map((program, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-2 w-2 h-2 bg-linear-to-r from-blue-500 to-purple-500 rounded-full shrink-0" />
                          <span className="text-gray-700 leading-snug">{program}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-medium text-zinc-700 italic">
              Our mission is to raise excellent minds equipped for purpose, innovation, and impact.
            </p>
          </div>
        </div>
      </section>

            {/* PAST PROGRAMMES SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Past Programmes</h2>
            <p className="ax-w-2xl mx-auto sm:text-lg md:text-xl text-gray-900 mb-10">
              Highlights from our previous impactful sessions and webinars
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Past Program 1 */}
            <SpotlightCard className="group overflow-hidden">
              <div className="relative h-80">
                <Image 
                  src="/past-prog (1).jpeg" 
                  alt="Examination Preparation Webinar" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                  <div className="inline-block bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    COMPLETED
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Examination Preparation</h3>
                  <p className="text-white/90 mb-4">Free Online Webinar for Undergraduate Students</p>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="opacity-75">Date</div>
                      <div>10th April, 2026</div>
                    </div>
                    <div>
                      <div className="opacity-75">Time</div>
                      <div>7:30 PM (WAT)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="space-y-3 text-sm">
                  <div><span className="font-semibold">Host:</span> John Godwin</div>
                  <div><span className="font-semibold">Guest Speaker:</span> Onah Emmanuel</div>
                  <div><span className="font-semibold">Venue:</span> WhatsApp Platform</div>
                </div>
              </div>
            </SpotlightCard>

            {/* Past Program 2 */}
            <SpotlightCard className="group overflow-hidden">
              <div className="relative h-80">
                <Image 
                  src="/past-prog (2).jpeg" 
                  alt="Academic Project Writing Webinar" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                  <div className="inline-block bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    COMPLETED
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Mastering Academic Project Writing</h3>
                  <p className="text-white/90 mb-4">Free Online Webinar</p>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="opacity-75">Date</div>
                      <div>13th March, 2026</div>
                    </div>
                    <div>
                      <div className="opacity-75">Time</div>
                      <div>7:30 PM (WAT)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="space-y-3 text-sm">
                  <div><span className="font-semibold">Host:</span> John Godwin</div>
                  <div><span className="font-semibold">Guest Speaker:</span> Matt Breakforth</div>
                  <div><span className="font-semibold">Venue:</span> Google Meet</div>
                </div>
              </div>
            </SpotlightCard>

            {/* Past Program 3 */}
            <SpotlightCard className="group overflow-hidden">
              <div className="relative h-80">
                <Image 
                  src="/past-prog (3).jpeg" 
                  alt="Financial Literacy Webinar" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-4 text-white w-full">
                  <div className="inline-block bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
                    COMPLETED
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Financial Literacy for Students</h3>
                  <p className="text-white/90 mb-4">How to Build Sustainable Wealth at a Young Age</p>
                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="opacity-75">Date</div>
                      <div>15th & 16th May, 2026</div>
                    </div>
                    <div>
                      <div className="opacity-75">Time</div>
                      <div>7:30 PM (WAT)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="space-y-3 text-sm">
                  <div><span className="font-semibold">Host:</span> John Godwin</div>
                  <div><span className="font-semibold">Guest Speakers:</span> Amos Solomon, Matt Breakforth</div>
                  <div><span className="font-semibold">Venue:</span> WhatsApp Platform</div>
                </div>
              </div>
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

      {/* MISSION REMINDER */}
      <section id="join" className="py-32 bg-black/80  text-white relative overflow-hidden flex items-center justify-center">
        <FloatingLogos />
        <FloatingShapes />
        <div
          className="glass max-w-4xl rounded-3xl p-8 sm:p-12 md:p-16 text-center relative z-10 mx-4 sm:mx-10"
          style={{
            animation: 'breathing-glow 4s ease-in-out infinite',
          }}
        >
          <BookOpen className="w-16 h-16 mx-auto mb-8 text-amber-400" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
           Our Mission
          </h2>
          <p className="sm:text-xl mb-10 text-white/90">To raise excellent minds equipped for purpose, innovation, and impact.</p>

          <MagneticButton>
            <Link
              href="/"
              className="inline-block bg-white text-black px-12 py-4 rounded-2xl sm:text-lg font-semibold hover:bg-amber-400 transition-all duration-300"
            >
              Back to Homepage
            </Link>
          </MagneticButton>
        </div>
      </section>
    </main>
  );
}