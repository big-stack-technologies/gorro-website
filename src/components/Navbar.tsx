'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { logos } from '@/asset/remoteAsset';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'shadow-xl border-b border-gray-200' : 'border-b border-gray-100'
        }`}
    >
      <div className="px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src={logos.navbar}
              alt="Gorro Logo"
              width={130}
              height={40}
              className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10 ml-280">
            <Link
              href="#products"
              className="relative text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-all duration-300 group link-modern"
            >
              <span className="relative z-10">Products</span>
            </Link>
            <Link
              href="#how"
              className="relative text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-all duration-300 group link-modern"
            >
              <span className="relative z-10">How it works</span>
            </Link>
            <Link
              href="#for-you"
              className="relative text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-all duration-300 group link-modern"
            >
              <span className="relative z-10">Who's it for</span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">



            <Link
              href="#early-access"
              className="relative bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-sm font-medium px-6 py-2.5 rounded-lg btn-modern overflow-hidden group"
            >
              <span className="relative z-10">Get early access</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-[#0a3d2e] transition-all duration-300 hover:scale-110 active:scale-95 p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6 transition-transform duration-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-gray-100 bg-white overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-4 space-y-4">
          <Link
            href="#products"
            className="block text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:bg-gray-50 px-4 py-3 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          <Link
            href="#how"
            className="block text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:bg-gray-50 px-4 py-3 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            How it works
          </Link>
          <Link
            href="#for-you"
            className="block text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-all duration-300 hover:translate-x-3 hover:bg-gray-50 px-4 py-3 rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            Who's it for
          </Link>
          <Link
            href="#early-access"
            className="block w-full text-center bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-sm font-medium px-5 py-3 rounded-lg btn-modern"
            onClick={() => setMobileOpen(false)}
          >
            Get early access
          </Link>
        </div>
      </div>
    </nav>
  );
}
