'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { logos } from '@/asset/remoteAsset';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logos.navbar}
              alt="Gorro Logo"
              width={130}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/products"
              className="text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors duration-150"
            >
              Products
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors duration-150"
            >
              How it works
            </Link>
            <Link
              href="/who-its-for"
              className="text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors duration-150"
            >
              Who&apos;s it for
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/early-access"
              className="bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-150"
            >
              Get early access
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 hover:text-[#0a3d2e] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-4">
          <Link
            href="/products"
            className="block text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/how-it-works"
            className="block text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            How it works
          </Link>
          <Link
            href="/who-its-for"
            className="block text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Who&apos;s it for
          </Link>
          <Link
            href="/early-access"
            className="block w-full text-center bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get early access
          </Link>
        </div>
      )}
    </nav>
  );
}