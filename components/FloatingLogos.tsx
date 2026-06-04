'use client';

import AnimatedLogo from './AnimatedLogo';

const logos = [
  {
    className: 'absolute top-[10%] left-[5%] w-24 h-24 md:w-48 md:h-48 text-white/30',
    delay: 0.8,
  },
  {
    className: 'absolute top-[15%] right-[10%] w-24 h-24 md:w-48 md:h-48 text-white/30',
    delay: 0.2,
  },
  {
    className: 'absolute bottom-[20%] left-[15%] w-24 h-24 md:w-48 md:h-48 text-white/30',
    delay: 1.2,
  },
  {
    className: 'absolute bottom-[15%] right-[15%] w-24 h-24 md:w-48 md:h-48 text-white/30',
    delay: 1.5,
  },
  {
    className: 'absolute top-[65%] left-[30%] w-24 h-24 md:w-48 md:h-48 text-white/30',
    delay: 0.5,
  },
  {
    className: 'absolute top-[50%] right-[35%] w-24 h-24 md:w-48 md:h-48 text-white/30',
    delay: 0,
  },
];

const FloatingLogos = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-10">
      {logos.map((logo, index) => (
        <AnimatedLogo
          key={index}
          className={logo.className}
          delay={logo.delay}
        />
      ))}
    </div>
  );
};

export default FloatingLogos;