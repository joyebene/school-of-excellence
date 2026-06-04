'use client';

import { motion, Variants } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
  delay?: number;
}

const AnimatedLogo = ({ className, delay = 0 }: AnimatedLogoProps) => {
  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const pathDelay = delay + i * 0.01;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay: pathDelay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay: pathDelay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
      width="96"
      height="96"
      viewBox="0 0 1080 1080"
      initial="hidden"
      animate="visible"
      className={className}
    >
      <g transform="translate(0.000000,1080.000000) scale(0.100000,-0.100000)"
                fill="none" stroke="currentColor" strokeWidth="20">
        <motion.path variants={draw} custom={0} d="M6920 8390 c-8 -4 -26 -13 -40 -19 -24 -10 -24 -10 5 -4 17 3 37 12 45 19 16 16 13 17 -10 4z"/>
        <motion.path variants={draw} custom={1} d="M6894 8352 c-10 -7 -27 -42 -20 -42 2 0 11 11 20 25 17 26 17 29 0 17z"/>
        <motion.path variants={draw} custom={2} d="M6841 8289 c-7 -12 -10 -23 -8 -26 3 -3 11 5 17 17 15 28 8 35 -9 9z"/>
        <motion.path variants={draw} custom={3} d="M6678 8293 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
        <motion.path variants={draw} custom={4} d="M6630 8280 c-8 -5 -10 -10 -5 -10 6 0 17 5 25 10 8 5 11 10 5 10 -5 0 -17 -5 -25 -10z"/>
        <motion.path variants={draw} custom={5} d="M6796 8223 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
        <motion.path variants={draw} custom={6} d="M6470 8210 c-8 -5 -10 -10 -5 -10 6 0 17 5 25 10 8 5 11 10 5 10 -5 0 -17 -5 -25 -10z"/>
        <motion.path variants={draw} custom={7} d="M6750 8159 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
        <motion.path variants={draw} custom={8} d="M6725 8129 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
        <motion.path variants={draw} custom={9} d="M6275 8120 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"/>
        <motion.path variants={draw} custom={10} d="M6220 8095 c-14 -8 -20 -14 -14 -15 5 0 19 7 30 15 24 18 16 19 -16 0z"/>
        <motion.path variants={draw} custom={11} d="M6679 8063 c-13 -16 -12 -17 4 -4 9 7 17 15 17 17 0 8 -8 3 -21 -13z"/>
        <motion.path variants={draw} custom={12} d="M6124 8045 c-10 -8 -14 -14 -9 -14 6 0 19 6 29 14 11 8 15 15 10 15 -6 0 -19 -7 -30 -15z"/>
        <motion.path variants={draw} custom={13} d="M6645 8019 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
        <motion.path variants={draw} custom={14} d="M5938 7944 c-16 -8 -28 -16 -28 -18 0 -9 40 7 51 20 14 17 11 17 -23 -2z"/>
        <motion.path variants={draw} custom={15} d="M6566 7904 c-9 -24 -2 -26 12 -4 7 11 8 20 3 20 -5 0 -12 -7 -15 -16z"/>
        <motion.path variants={draw} custom={16} d="M5805 7860 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/>
        <motion.path variants={draw} custom={17} d="M6526 7845 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
        <motion.path variants={draw} custom={18} d="M6493 7783 c-3 -10 -8 -22 -11 -27 -3 -5 0 -6 5 -3 11 7 25 47 17 47 -3 0 -7 -8 -11 -17z"/>
        <motion.path variants={draw} custom={19} d="M5680 7782 c0 -6 -8 -13 -17 -15 -16 -4 -16 -5 -1 -6 18 -1 34 16 24 26 -3 4 -6 1 -6 -5z"/>
        <motion.path variants={draw} custom={20} d="M6456 7715 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
        <motion.path variants={draw} custom={21} d="M5560 7695 c-11 -13 -10 -14 4 -9 9 3 16 10 16 15 0 13 -6 11 -20 -6z"/>
        <motion.path variants={draw} custom={22} d="M5435 7600 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
        <motion.path variants={draw} custom={23} d="M6442 7493 c-79 -212 -131 -391 -172 -593 -81 -408 -60 -749 61 -995 48 -97 76 -137 82 -115 2 8 19 76 37 150 36 148 113 366 167 474 176 349 410 494 669 415 84 -26 125 -47 229 -120 77 -55 245 -217 320 -309 20 -25 46 -56 58 -70 l21 -25 9 35 c16 59 1 264 -27 374 -82 319 -300 585 -596 725 -130 61 -223 87 -363 103 -105 11 -127 10 -357 -19 -32 -4 -37 -1 -60 36 -14 23 -28 41 -31 41 -3 0 -24 -48 -47 -107z"/>
        <motion.path variants={draw} custom={24} d="M5394 7565 c-10 -8 -14 -15 -8 -15 6 0 17 7 24 15 16 19 9 19 -16 0z"/>
        <motion.path variants={draw} custom={25} d="M5344 7529 c-19 -22 -19 -22 4 -10 12 6 22 16 22 21 0 15 -5 12 -26 -11z"/>
        <motion.path variants={draw} custom={26} d="M6365 7490 c-4 -12 -5 -24 -2 -27 3 -2 8 5 12 17 4 12 5 24 2 27 -3 2 -8 -5 -12 -17z"/>
        <motion.path variants={draw} custom={27} d="M5300 7485 c-11 -13 -10 -14 4 -9 9 3 16 10 16 15 0 13 -6 11 -20 -6z"/>
        <motion.path variants={draw} custom={28} d="M5204 7398 l-19 -21 28 18 c28 18 33 25 19 25 -5 0 -17 -10 -28 -22z"/>
        <motion.path variants={draw} custom={29} d="M6337 7413 c-4 -3 -7 -16 -6 -27 0 -19 1 -19 10 3 10 24 8 36 -4 24z"/>
        <motion.path variants={draw} custom={30} d="M5085 7280 c-3 -6 1 -7 9 -4 18 7 21 14 7 14 -6 0 -13 -4 -16 -10z"/>
        <motion.path variants={draw} custom={31} d="M6292 7260 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
        <motion.path variants={draw} custom={32} d="M4961 7137 l-25 -32 32 29 c33 31 37 36 25 35 -5 0 -19 -14 -32 -32z"/>
        <motion.path variants={draw} custom={33} d="M6251 7114 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={34} d="M6241 7074 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={35} d="M4860 7014 c0 -6 -9 -20 -21 -33 -12 -12 -19 -25 -16 -27 3 -3 15 9 27 26 12 17 19 34 16 37 -3 4 -6 2 -6 -3z"/>
        <motion.path variants={draw} custom={36} d="M6212 6950 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
        <motion.path variants={draw} custom={37} d="M4782 6900 c-24 -33 -29 -49 -9 -28 15 14 40 58 34 58 -2 0 -13 -13 -25 -30z"/>
        <motion.path variants={draw} custom={38} d="M6192 6860 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
        <motion.path variants={draw} custom={39} d="M6182 6800 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
        <motion.path variants={draw} custom={40} d="M7238 6773 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
        <motion.path variants={draw} custom={41} d="M4697 6763 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9 2 -12 -2z"/>
        <motion.path variants={draw} custom={42} d="M7290 6760 c8 -5 20 -10 25 -10 6 0 3 5 -5 10 -8 5 -19 10 -25 10 -5 0 -3 -5 5 -10z"/>
        <motion.path variants={draw} custom={43} d="M6172 6695 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
        <motion.path variants={draw} custom={44} d="M6895 6697 c-11 -5 -29 -21 -40 -35 -16 -23 -13 -21 23 8 34 27 52 45 40 39 -2 -1 -12 -6 -23 -12z"/>
        <motion.path variants={draw} custom={45} d="M4655 6689 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
        <motion.path variants={draw} custom={46} d="M6163 6605 c0 -22 2 -30 4 -17 2 12 2 30 0 40 -3 9 -5 -1 -4 -23z"/>
        <motion.path variants={draw} custom={47} d="M7520 6623 c1 -11 50 -46 56 -40 3 3 -9 15 -25 27 -17 12 -31 18 -31 13z"/>
        <motion.path variants={draw} custom={48} d="M6790 6588 c0 -9 -6 -19 -12 -21 -10 -4 -10 -6 0 -6 14 -1 28 26 18 36 -3 4 -6 -1 -6 -9z"/>
        <motion.path variants={draw} custom={49} d="M7310 6543 c0 -7 3 -13 8 -13 4 0 15 -12 24 -27 10 -16 18 -23 18 -16 0 7 -11 25 -25 40 -13 15 -25 22 -25 16z"/>
        <motion.path variants={draw} custom={50} d="M7635 6520 c10 -11 20 -20 23 -20 3 0 -3 9 -13 20 -10 11 -20 20 -23 20 -3 0 3 -9 13 -20z"/>
        <motion.path variants={draw} custom={51} d="M7155 6485 c-19 -18 -25 -35 -25 -65 0 -86 90 -121 152 -60 27 27 30 36 25 71 -7 52 -38 79 -89 79 -28 0 -46 -7 -63 -25z"/>
        <motion.path variants={draw} custom={52} d="M4528 6435 c-8 -19 -12 -35 -8 -35 9 0 35 59 28 65 -2 2 -11 -11 -20 -30z"/>
        <motion.path variants={draw} custom={53} d="M7700 6450 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"/>
        <motion.path variants={draw} custom={54} d="M6686 6425 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
        <motion.path variants={draw} custom={55} d="M6661 6364 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={56} d="M7786 6357 c3 -10 9 -15 12 -12 3 3 0 11 -7 18 -10 9 -11 8 -5 -6z"/>
        <motion.path variants={draw} custom={57} d="M6161 6344 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={58} d="M6631 6313 c-1 -6 -4 -20 -7 -30 -5 -17 -5 -17 6 0 6 10 9 23 6 30 -3 9 -5 9 -5 0z"/>
        <motion.path variants={draw} custom={59} d="M4471 6284 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={60} d="M6162 6265 c0 -11 4 -33 8 -50 7 -27 8 -27 8 -5 0 14 -4 36 -8 50 -6 20 -8 21 -8 5z"/>
        <motion.path variants={draw} custom={61} d="M7213 6263 c9 -2 23 -2 30 0 6 3 -1 5 -18 5 -16 0 -22 -2 -12 -5z"/>
        <motion.path variants={draw} custom={62} d="M7872 6241 c13 -15 25 -27 26 -25 6 4 -32 53 -41 54 -5 0 2 -13 15 -29z"/>
        <motion.path variants={draw} custom={63} d="M4457 6253 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9 2 -12 -2z"/>
        <motion.path variants={draw} custom={64} d="M6607 6253 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9 2 -12 -2z"/>
        <motion.path variants={draw} custom={65} d="M4441 6204 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={66} d="M6583 6185 c-3 -9 -3 -18 -1 -21 3 -3 8 4 11 16 6 23 -1 27 -10 5z"/>
        <motion.path variants={draw} custom={67} d="M4426 6165 c-3 -9 -6 -22 -5 -28 0 -7 5 -1 10 12 5 13 8 26 5 28 -2 2 -6 -3 -10 -12z"/>
        <motion.path variants={draw} custom={68} d="M7798 6143 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
        <motion.path variants={draw} custom={69} d="M7715 6110 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"/>
        <motion.path variants={draw} custom={70} d="M7895 6105 c-263 -71 -460 -290 -544 -605 -21 -81 -51 -259 -76 -460 -55 -428 -140 -641 -334 -830 -214 -209 -575 -371 -1111 -499 -272 -65 -351 -81 -890 -181 -447 -83 -736 -174 -1089 -342 -154 -73 -150 -69 -93 -105 205 -132 387 -187 612 -185 69 0 160 7 202 15 l78 14 59 -81 c63 -88 174 -201 237 -243 21 -15 41 -30 44 -33 22 -30 212 -114 340 -151 76 -21 104 -24 270 -24 158 1 197 4 266 23 97 26 240 85 290 118 19 13 39 24 44 24 4 0 10 3 12 8 2 4 21 19 42 34 66 45 185 168 243 251 39 55 60 76 71 73 112 -33 342 -38 472 -11 448 92 788 442 871 895 17 93 14 291 -5 378 -9 40 -16 75 -16 77 0 2 35 28 78 58 488 346 609 1010 274 1516 -64 97 -255 283 -288 280 -5 0 -31 -6 -59 -14z"/>
        <motion.path variants={draw} custom={71} d="M7653 6070 c-18 -11 -33 -22 -33 -25 0 -2 16 5 35 16 19 12 35 23 35 25 0 6 -3 5 -37 -16z"/>
        <motion.path variants={draw} custom={72} d="M6533 6035 c-6 -19 -7 -35 -3 -35 9 0 25 59 18 66 -3 2 -9 -12 -15 -31z"/>
        <motion.path variants={draw} custom={73} d="M6206 6035 c8 -37 14 -45 14 -19 0 10 -5 26 -10 34 -8 11 -9 7 -4 -15z"/>
        <motion.path variants={draw} custom={74} d="M4371 5964 c-7 -30 -11 -57 -8 -60 2 -2 9 21 16 52 7 30 11 57 8 60 -2 2 -9 -21 -16 -52z"/>
        <motion.path variants={draw} custom={75} d="M7537 5979 c-26 -30 -15 -34 13 -4 13 14 19 25 14 25 -5 0 -18 -9 -27 -21z"/>
        <motion.path variants={draw} custom={76} d="M6506 5935 c-3 -9 -6 -26 -5 -38 1 -16 4 -12 10 12 10 34 6 55 -5 26z"/>
        <motion.path variants={draw} custom={77} d="M7490 5939 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
        <motion.path variants={draw} custom={78} d="M4351 5883 c0 -6 -4 -20 -7 -30 -5 -14 -4 -15 5 -7 7 7 11 20 8 30 -3 11 -5 14 -6 7z"/>
        <motion.path variants={draw} custom={79} d="M7445 5870 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/>
        <motion.path variants={draw} custom={80} d="M4342 5810 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
        <motion.path variants={draw} custom={81} d="M6300 5817 c0 -4 5 -13 10 -20 6 -7 17 -21 25 -32 8 -11 14 -15 15 -10 0 12 -49 74 -50 62z"/>
        <motion.path variants={draw} custom={82} d="M7396 5805 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0 -6 -7 -10 -15z"/>
        <motion.path variants={draw} custom={83} d="M7376 5765 c-9 -26 -7 -32 5 -12 6 10 9 21 6 23 -2 3 -7 -2 -11 -11z"/>
        <motion.path variants={draw} custom={84} d="M6360 5730 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z"/>
        <motion.path variants={draw} custom={85} d="M6462 5715 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
        <motion.path variants={draw} custom={86} d="M7331 5664 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={87} d="M7300 5589 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
        <motion.path variants={draw} custom={88} d="M4295 5527 c-4 -36 -5 -71 -3 -79 3 -7 8 20 12 60 4 41 5 76 3 79 -3 2 -8 -25 -12 -60z"/>
        <motion.path variants={draw} custom={89} d="M7291 5554 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={90} d="M7265 5439 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
        <motion.path variants={draw} custom={91} d="M7251 5394 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={92} d="M4281 5364 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
        <motion.path variants={draw} custom={93} d="M7235 5280 c-4 -17 -5 -34 -2 -36 2 -3 7 10 11 27 3 18 4 34 2 36 -2 3 -7 -10 -11 -27z"/>
        <motion.path variants={draw} custom={94} d="M4274 5065 c0 -104 2 -146 3 -92 2 54 2 139 0 190 -1 51 -3 7 -3 -98z"/>
        <motion.path variants={draw} custom={95} d="M7212 5090 c0 -19 2 -27 5 -17 2 9 2 25 0 35 -3 9 -5 1 -5 -18z"/>
        <motion.path variants={draw} custom={96} d="M7202 5005 c0 -16 2 -22 5 -12 2 9 2 23 0 30 -3 6 -5 -1 -5 -18z"/>
        <motion.path variants={draw} custom={97} d="M7166 4804 c-4 -20 -5 -38 -3 -40 3 -3 8 11 11 32 4 20 5 38 3 40 -3 3 -8 -11 -11 -32z"/>
        <motion.path variants={draw} custom={98} d="M7141 4699 c-7 -27 -11 -52 -9 -54 2 -3 10 18 17 46 7 27 11 52 9 54 -2 3 -10 -18 -17 -46z"/>
        <motion.path variants={draw} custom={99} d="M4283 4680 c0 -25 2 -35 4 -22 2 12 2 32 0 45 -2 12 -4 2 -4 -23z"/>
        <motion.path variants={draw} custom={100} d="M4283 4515 c0 -27 2 -38 4 -22 2 15 2 37 0 50 -2 12 -4 0 -4 -28z"/>
        <motion.path variants={draw} custom={101} d="M7081 4529 c-6 -18 -9 -34 -7 -36 2 -2 9 10 15 28 6 18 9 34 7 36 -2 2 -9 -10 -15 -28z"/>
        <motion.path variants={draw} custom={102} d="M4266 4433 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
        <motion.path variants={draw} custom={103} d="M7000 4389 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
        <motion.path variants={draw} custom={104} d="M4217 4363 c-4 -3 -7 -11 -7 -17 0 -6 5 -5 12 2 6 6 9 14 7 17 -3 3 -9 2 -12 -2z"/>
        <motion.path variants={draw} custom={105} d="M6980 4359 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10 -5 -10 -11z"/>
        <motion.path variants={draw} custom={106} d="M4185 4319 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
        <motion.path variants={draw} custom={107} d="M6914 4278 l-19 -23 23 19 c12 11 22 21 22 23 0 8 -8 2 -26 -19z"/>
        <motion.path variants={draw} custom={108} d="M4156 4273 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z"/>
        <motion.path variants={draw} custom={109} d="M4125 4240 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"/>
        <motion.path variants={draw} custom={110} d="M6875 4240 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/>
        <motion.path variants={draw} custom={111} d="M4105 4210 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/>
        <motion.path variants={draw} custom={112} d="M6823 4201 c-13 -11 -23 -22 -23 -25 0 -10 39 18 44 31 7 17 6 16 -21 -6z"/>
        <motion.path variants={draw} custom={113} d="M6754 4145 c-10 -8 -14 -15 -8 -15 6 0 17 7 24 15 16 19 9 19 -16 0z"/>
        <motion.path variants={draw} custom={114} d="M4035 4119 c-4 -6 -5 -12 -2 -15 2 -3 7 2 10 11 7 17 1 20 -8 4z"/>
        <motion.path variants={draw} custom={115} d="M6715 4120 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z"/>
        <motion.path variants={draw} custom={116} d="M6635 4070 c-3 -5 -2 -10 4 -10 5 0 13 5 16 10 3 6 2 10 -4 10 -5 0 -13 -4 -16 -10z"/>
        <motion.path variants={draw} custom={117} d="M3962 4029 c-13 -16 -19 -29 -14 -29 10 0 46 49 40 55 -2 1 -13 -11 -26 -26z"/>
      </g>
    </motion.svg>
  );
};

export default AnimatedLogo;