import Link from 'next/link';
import { Twitter, Instagram, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1B4B36] text-white border-t border-white/10 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="font-bold text-xl tracking-tighter text-white">
              Superteam <span className="text-brazil-yellow">Brazil</span>
            </Link>
            <p className="mt-2 text-sm text-white/70">
              Building the Solana ecosystem in Brazil.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-colors">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Superteam Brazil. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 w-24 h-1 bg-gradient-to-r from-white/20 to-white/5 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
