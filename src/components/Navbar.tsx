'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { logos, ui } from '@/asset/remoteAsset';
import { features, hero, products, REMOTE_ASSETS } from '@/asset/remoteAsset';


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setProductsDropdownOpen(false);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  const handleProductsClick = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const scrollToSection = (sectionId: string) => {
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage with section hash
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
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
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={handleProductsClick}
                className="flex items-center gap-1 text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
              >
                Products
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div 
                  className="absolute left-0 top-full mt-2 w-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-2 px-4">
                    {/* Gorro Cluster */}
                    <Link
                      href="/products/cluster"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#EDF4F2] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#0A3F2F] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={ui.cluster}
                          alt="Cluster"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          Gorro Cluster
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Community treasury
                        </p>
                      </div>
                    </Link>

                    {/* Circle Savings */}
                    <Link
                      href="/products/circle"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#FFF4E6] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#c8602a] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={ui.circle}
                          alt="Circle"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          Circle Savings
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Group goals
                        </p>
                      </div>
                    </Link>

                    {/* Ajo */}
                    <Link
                      href="/products/ajo"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#EDF4F2] transition-colors group"
                    >
                      <div className="w-10 h-10 bg-[#4F8F7A] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Image
                          src={ui.ajo}
                          alt="Ajo"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          Ajo
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Rotating contributions
                        </p>
                      </div>
                    </Link>

                    {/* Fixed Savings */}
                    <Link
                      href="/products/fixed-savings"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-indigo-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform p-2">
                        <Image
                          src="https://res.cloudinary.com/dhipowibc/image/upload/v1790372016/Fixed_Savings_hdvqr5.svg"
                          alt="Fixed Savings"
                          width={24}
                          height={24}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          Fixed Savings
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Lock & earn interest
                        </p>
                      </div>
                    </Link>

                    {/* Target Savings */}
                    <Link
                      href="/products/target-savings"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-emerald-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform p-2">
                        <Image
                          src="https://res.cloudinary.com/dhipowibc/image/upload/v1790372041/Target_Savings_jemqsj.svg"
                          alt="Target Savings"
                          width={24}
                          height={24}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          Target Savings
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Goal-oriented saving
                        </p>
                      </div>
                    </Link>

                    {/* Gorro Vault */}
                    <Link
                      href="/products/vault"
                      onClick={() => setProductsDropdownOpen(false)}
                      className="flex items-start gap-3 p-4 rounded-xl hover:bg-yellow-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform p-2">
                        <Image
                          src="https://res.cloudinary.com/dhipowibc/image/upload/v1790372034/Vault_dj2zgi.svg"
                          alt="Vault"
                          width={24}
                          height={24}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          Gorro Vault
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Upfront returns
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
            >
              How it works
            </button>
            <button
              onClick={() => scrollToSection('who-its-for')}
              className="text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
            >
              Who&apos;s it for
            </button>
            {/* <Link
              href="/faq"
              className="text-gray-700 hover:text-[#0a3d2e] text-sm font-medium transition-colors"
            >
              FAQ
            </Link> */}
             <button
              onClick={() => scrollToSection('early-access')}
              className="bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-150"
            >
              Get access
            </button>
          </div>

          {/* CTA Button */}
          {/* <div className="hidden md:flex items-center">
            <button
              onClick={() => {
                const element = document.getElementById('early-access');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-150"
            >
              Get access
            </button>
          </div> */}

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

      {/* Mobile Menu - Full Screen Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
          <div className="flex flex-col h-full px-6 py-8">
            {/* Menu Items */}
            <div className="space-y-8">
              {/* Products Dropdown */}
              <div>
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="flex items-center justify-between w-full text-left text-gray-900 text-lg font-medium transition-colors py-2"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  Products
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Products List */}
                {productsDropdownOpen && (
                  <div className="mt-4 space-y-3 pl-4">
                    <Link
                      href="/products/cluster"
                      onClick={() => { setMobileOpen(false); setProductsDropdownOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                    >
                      <div className="w-10 h-10 bg-[#0A3F2F] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src={ui.cluster}
                          alt="Cluster"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Wittgenstein' }}>
                          Gorro Cluster
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Community treasury
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/circle"
                      onClick={() => { setMobileOpen(false); setProductsDropdownOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                    >
                      <div className="w-10 h-10 bg-[#c8602a] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src={ui.circle}
                          alt="Circle"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Wittgenstein' }}>
                          Circle Savings
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Group goals
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/ajo"
                      onClick={() => { setMobileOpen(false); setProductsDropdownOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                    >
                      <div className="w-10 h-10 bg-[#4F8F7A] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Image
                          src={ui.ajo}
                          alt="Ajo"
                          width={20}
                          height={20}
                          className="object-contain"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Wittgenstein' }}>
                          Ajo
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Rotating contributions
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/fixed-savings"
                      onClick={() => { setMobileOpen(false); setProductsDropdownOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                    >
                      <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <Image
                          src="https://res.cloudinary.com/dhipowibc/image/upload/v1790372016/Fixed_Savings_hdvqr5.svg"
                          alt="Fixed Savings"
                          width={20}
                          height={20}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Wittgenstein' }}>
                          Fixed Savings
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Lock & earn interest
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/target-savings"
                      onClick={() => { setMobileOpen(false); setProductsDropdownOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                    >
                      <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <Image
                          src="https://res.cloudinary.com/dhipowibc/image/upload/v1790372041/Target_Savings_jemqsj.svg"
                          alt="Target Savings"
                          width={20}
                          height={20}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Wittgenstein' }}>
                          Target Savings
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Goal-oriented saving
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/vault"
                      onClick={() => { setMobileOpen(false); setProductsDropdownOpen(false); }}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all"
                    >
                      <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 p-2">
                        <Image
                          src="https://res.cloudinary.com/dhipowibc/image/upload/v1790372034/Vault_dj2zgi.svg"
                          alt="Vault"
                          width={20}
                          height={20}
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'Wittgenstein' }}>
                          Gorro Vault
                        </h4>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                          Upfront returns
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Navigation Links */}
              <div className="space-y-6 border-t border-gray-100 pt-6">
                <button
                  onClick={() => {
                    scrollToSection('how-it-works');
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left text-gray-900 text-lg font-medium transition-colors py-2"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  How it works
                </button>

                <button
                  onClick={() => {
                    scrollToSection('who-its-for');
                    setMobileOpen(false);
                  }}
                  className="block w-full text-left text-gray-900 text-lg font-medium transition-colors py-2"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  Who&apos;s it for
                </button>

                <button
                  onClick={() => {
                    scrollToSection('early-access');
                    setMobileOpen(false);
                  }}
                  className="block w-full bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-base font-medium px-6 py-3 rounded-lg transition-colors"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  Get access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}