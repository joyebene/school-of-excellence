"use client";

import { GraduationCap, Rocket, Crown } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import { Variants } from "framer-motion";

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
        },
    },
};

export default function ImpactSection() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-blue-600 uppercase tracking-widest text-sm sm:text-base">
                        Our Impact
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mt-4">
                        The Impact We Aim To Create
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    <SpotlightCard
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        className="border-blue-500/30! p-2"
                    >
                        <div className="absolute -top-3 -right-1">
                            <GraduationCap className="w-28 h-28 text-blue-600/20 mb-6" strokeWidth={1.5} />
                        </div>
                       
                        <h3 className="text-2xl font-bold mb-4 text-zinc-800">
                            Academic Excellence
                        </h3>
                        <p className="text-zinc-600">
                            Helping students achieve outstanding learning outcomes and academic
                            confidence.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        className="border-amber-500/30! p-2"
                    >
                        <div className="absolute -top-3 -right-1">
                            <Rocket className="w-28 h-28 text-amber-500/20 mb-6" strokeWidth={1.5} />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-zinc-800">
                            Innovation Culture
                        </h3>
                        <p className="text-zinc-600">
                            Building creators, innovators, entrepreneurs, and problem solvers.
                        </p>
                    </SpotlightCard>

                    <SpotlightCard
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.5 }}
                        className="border-purple-500/30! p-2"
                    >
                        <div className="absolute -top-3 -right-1">
                            <Crown className="w-28 h-28 text-purple-600/20 mb-6" strokeWidth={1.5} />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-zinc-800">
                            Leadership Development
                        </h3>
                        <p className="text-zinc-600">
                            Raising purpose-driven leaders who create meaningful impact.
                        </p>
                    </SpotlightCard>
                </div>
            </div>
        </section>
    );
}