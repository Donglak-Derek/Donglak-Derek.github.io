"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#333] bg-black/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity"
          onClick={() => setIsOpen(false)}
        >
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 22h20L12 2z" />
                </svg>
            </div>
            <span>Derek Han</span>
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
