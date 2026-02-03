"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#333] bg-black/50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-3 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
            <div className="relative w-8 h-8">
                <Image 
                    src="/logo.png" 
                    alt="Derek Han Logo" 
                    fill 
                    className="object-contain" 
                    priority 
                />
            </div>
            <span className="hidden md:block">Derek Han</span>
        </Link>
        
        {/* Desktop Links (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888]">
          <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <a href="mailto:donglak.han@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button (Hidden on Desktop) */}
        <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black border-b border-[#333] p-4 flex flex-col gap-4 text-center">
             <Link 
                href="/#work" 
                className="block py-4 text-[#888] hover:text-white hover:bg-[#111] rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
            >
                Work
            </Link>
            <Link 
                href="/about" 
                className="block py-4 text-[#888] hover:text-white hover:bg-[#111] rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
            >
                About
            </Link>
            <a 
                href="mailto:donglak.han@gmail.com" 
                className="block py-4 text-[#888] hover:text-white hover:bg-[#111] rounded-lg transition-all"
                onClick={() => setIsOpen(false)}
            >
                Contact
            </a>
        </div>
      )}
    </nav>
  );
}
