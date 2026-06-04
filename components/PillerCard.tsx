'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface PillarCardProps {
  pillar: {
    icon: LucideIcon;
    title: string;
    desc: string;
    color: string;
  };
  i: number;
}

const colorClasses: { [key: string]: string } = {
  blue: 'from-blue-500',
  amber: 'from-amber-500',
  purple: 'from-purple-500',
};

export default function PillarCard({ pillar, i }: PillarCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [20, -20]);
  const rotateY = useTransform(x, [-150, 150], [-20, 20]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      key={i}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="w-full"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="group bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 h-full transition-transform duration-500 ease-out hover:border-blue-500/30"
      >
        <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${colorClasses[pillar.color]} to-purple-500 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
          <pillar.icon className="w-9 h-9" />
        </div>
        <h3 className="text-3xl font-semibold mb-4">{pillar.title}</h3>
        <p className="text-zinc-300 leading-relaxed">{pillar.desc}</p>
      </motion.div>
    </motion.div>
  );
}