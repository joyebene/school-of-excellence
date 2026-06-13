'use client';

import Image from 'next/image';
import SpotlightCard from '@/components/SpotlightCard';

type PastProgram = {
  title: string;
  status: string;
  description: string;
  date: string;
  time: string;
  host: string;
  guest: string;
  venue: string;
  image: string;
};

type PastProgramCardProps = {
  program: PastProgram;
};

const PastProgramCard = ({ program }: PastProgramCardProps) => {
  return (
    <SpotlightCard className="group overflow-hidden">
      <div className="relative h-80">
        <Image 
          src={program.image} 
          alt={program.title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-4 text-white w-full">
          <div className="inline-block bg-emerald-500 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
            {program.status}
          </div>
          <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
          <p className="text-white/90 mb-4">{program.description}</p>
          
          <div className="flex justify-between text-sm">
            <div>
              <div className="opacity-75">Date</div>
              <div>{program.date}</div>
            </div>
            <div>
              <div className="opacity-75">Time</div>
              <div>{program.time}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <div className="space-y-3 text-sm text-gray-900">
          <div><span className="font-semibold">Host:</span> {program.host}</div>
          <div><span className="font-semibold">Guest Speaker:</span> {program.guest}</div>
          <div><span className="font-semibold">Venue:</span> {program.venue}</div>
        </div>
      </div>
    </SpotlightCard>
  );
};

export default PastProgramCard;