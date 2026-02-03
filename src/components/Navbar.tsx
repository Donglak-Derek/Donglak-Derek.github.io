import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#333] bg-black/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-xs">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 22h20L12 2z" />
                </svg>
            </div>
            <span>Derek Han</span>
        </Link>
        
        {/* Links */}
        <div className="flex items-center gap-8 text-sm font-medium text-[#888]">
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
          <Link href="#about" className="hover:text-white transition-colors">About</Link>
          <a href="mailto:donglak.han@gmail.com" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
