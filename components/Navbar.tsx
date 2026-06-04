'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();

  const navLinks = ['Home', 'About', 'Founder', 'Programmes', 'Contact'];

  useEffect(() => {
    const currentPath = pathname.split('/')[1] || 'home';
    const active = navLinks.find(link => link.toLowerCase() === currentPath.toLowerCase());
    setActiveLink(active || '');
  }, [pathname]);

  const menuVariants: Variants = {
    closed: {
      y: '-100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 sm:py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpeg"
            alt="School of Excellence Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold tracking-tight hidden sm:block text-zinc-50">School of Excellence</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-zinc-300" onMouseLeave={() => {
          const currentPath = pathname.split('/')[1] || 'home';
          const active = navLinks.find(link => link.toLowerCase() === currentPath.toLowerCase());
          setActiveLink(active || '');
        }}>
          {navLinks.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="relative hover:text-blue-600 transition-colors"
              onMouseEnter={() => setActiveLink(item)}
            >
              <span className="relative z-10">{item}</span>
              {activeLink === item && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 rounded-full"
                  style={{ originX: 0.5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </Link>
          ))}
        </div>

        <motion.a
          href="#join"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-2xl font-medium hover:bg-blue-700 transition-all"
        >
          Join the School
        </motion.a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white z-60">
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={open ? 'open' : 'closed'}
        className="fixed inset-0 h-fit bg-zinc-950 z-55 md:hidden py-10"
      >
        <motion.div className="h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((item) => (
            <motion.div key={item} variants={linkVariants} className="w-full px-8">
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className={`block w-full py-3 text-center text-lg font-medium text-zinc-200 rounded-xl transition-colors ${activeLink === item
                    ? 'bg-blue-500/20 border-blue-500/50'
                    : 'bg-white/5 border-transparent hover:border-blue-500/30'
                  }`}
              >
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div variants={linkVariants} className="w-full px-8 pt-4">
            <motion.a
              href="#join"
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block w-full py-3 text-center bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all text-lg"
            >
              Join the School
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </nav>
  );
}