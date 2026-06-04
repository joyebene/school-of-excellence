import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-white">
            <div className="bg-linear-to-r from-blue-600 via-purple-600 to-amber-500 h-px w-full" />
            <div className="max-w-8xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
                    {/* About Section */}
                    <div className='md:col-span-5 md:pl-20'>
                        <div className='flex items-center gap-4 mb-4'>
                            <Image
                                src="/logo.jpeg"
                                alt="School of Excellence Logo"
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                            <h4 className="text-2xl font-bold">School of Excellence</h4>
                        </div>
                        <p className="text-zinc-400 max-w-md">
                            Empowering the next generation of leaders and innovators through mentorship and skill development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="/programmes" className="text-zinc-400 hover:text-white transition-colors duration-300">Programmes</Link></li>
                            <li><Link href="/founder" className="text-zinc-400 hover:text-white transition-colors duration-300">About Us</Link></li>
                            <li><Link href="/#join" className="text-zinc-400 hover:text-white transition-colors duration-300">Join</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">Contact</h4>
                        <a href="mailto:info@schoolofexcellence.com" className="text-zinc-400 hover:text-white transition-colors duration-300">info@schoolofexcellence.com</a>
                    </div>

                    {/* Social Media */}
                    <div className="md:col-span-3">
                        <h4 className="text-lg font-semibold mb-4 tracking-wider uppercase">Follow Us</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"><Facebook /></Link>
                            <Link href="#" className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"><Twitter /></Link>
                            <Link href="#" className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"><Instagram /></Link>
                            <Link href="#" className="text-zinc-400 hover:text-white hover:scale-110 transition-all duration-300"><Linkedin /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-800 pt-8 text-center text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} School of Excellence. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;