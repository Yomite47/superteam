'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'What we do', href: '#what-we-do' },
    { name: 'Impact', href: '#impact' },
    { name: 'Events', href: '#events' },
    { name: 'Members', href: '/members' },
    { name: 'Apply', href: 'https://superteam.fun', external: true },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-brazil-green/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-3 font-bold text-xl tracking-tighter group text-brazil-green">
              <div className="relative w-10 h-10 overflow-hidden rounded-full border border-brazil-green/10 group-hover:border-brazil-green/50 transition-colors shadow-lg shadow-black/5">
                <Image 
                  src="/images/logo.svg" 
                  alt="Superteam Brazil Logo" 
                  fill 
                  className="object-cover"
                  sizes="40px"
                />
              </div>
              <span className="hidden sm:inline-block">Superteam <span className="text-gradient-brazil">Brazil</span></span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-brazil-green px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  target={link.external ? '_blank' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden md:block">
            <Button size="sm">Join Community</Button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-brazil-green hover:bg-brazil-green/5 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FDFBF7] border-b border-brazil-green/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brazil-green block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
                target={link.external ? '_blank' : undefined}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Button className="w-full">Join Discord</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
