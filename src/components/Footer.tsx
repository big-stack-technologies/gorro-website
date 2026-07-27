import Link from 'next/link';
import Image from 'next/image';
import { logos, social } from '@/asset/remoteAsset';

export default function Footer() {
  return (
    <footer className="bg-[#05201A] text-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">

        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-5">
              <Image
                src={logos.footer}
                alt="Gorro Logo"
                width={130}
                height={40}
                className="object-contain brightness-0 invert"
              />
            </div>

            {/* Tagline */}
            <p className="text-[#a8c5c5] text-sm leading-relaxed mb-3">
              The financial infrastructure for community finance.
               Save personally. Save together.<br />
              Govern transparently.
            </p>
          

            {/* Sponsor note */}
            <p className="text-[#6a9999] text-xs leading-relaxed mb-8">
              A product of Bigstack Technologies Ltd ·<br />
              {/* Sponsored by  Ekondo Microfinance Bank */}
            </p>

            {/* Social Icons */}
           
          </div>

          {/* Spacer on large screens */}
          {/* <div className="hidden lg:block" /> */}

          {/* Products Column */}
          <div>
            <h3 className="text-xs font-semibold text-[#a8c5c5] uppercase tracking-widest mb-6">
              Products
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Gorro Cluster', href: '#' },
                { label: 'Circle savings', href: '#' },
                { label: 'Fixed Savings', href: '#' },
                { label: 'Target Savings', href: '#' },
                { label: 'Gorro Vault', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[#c8dcdc] text-sm hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal combined column */}
          <div className="grid grid-cols-2 gap-32">
            {/* Company */}
            <div>
              <h3 className="text-xs font-semibold text-[#a8c5c5] uppercase tracking-widest mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {[
                  { label: 'About Gorro', href: '/about' },
                  // { label: 'For investors', href: '#' },
                   { label: 'FAQs', href: '/faq' },
                  // { label: 'Contact us', href: '#' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[#c8dcdc] text-sm hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-xs font-semibold text-[#a8c5c5] uppercase tracking-widest mb-6">
                Legal
              </h3>
              <ul className="space-y-2">
                {[
                  { label: 'Privacy Policy', href: '/privacy' },
                  { label: 'Terms of Service', href: '/terms' },
                  // { label: 'Compliance', href: '#' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[#c8dcdc] text-sm hover:text-white transition-colors duration-150"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
            {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold text-[#a8c5c5] uppercase tracking-widest mb-3">
              Support
            </h3>
                {/* Social */}
             <div className="flex items-center space-x-4 mb-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/gorromoney/"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80"
              >
                <Image
                  src={social.linkedin}
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/gorroapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80"
              >
                <Image
                  src={social.facebook}
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/gorroapp"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80"
              >
                <Image
                  src={social.instagram}
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/gorroapp"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80"
              >
                <Image
                  src={social.xTwitter}
                  alt="X (Twitter)"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@gorroapp"
                aria-label="TikTok"
                className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80"
              >
                <Image
                  src={social.tiktok}
                  alt="TikTok"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </a>
            </div>
            <ul className="space-y-3">
              {/* Address */}
              <li className="text-[#c8dcdc] text-sm leading-relaxed">
               J43 Rd 3, VGC, Lekki Ekpe Expy<br />
                Lagos, Nigeria.
              </li>

              {/* Email */}
              <li>
                <a
                  href="/contact"
                  className="text-[#c8dcdc] text-sm hover:text-white transition-colors duration-150"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@gorro.ng"
                  className="text-[#c8dcdc] text-sm hover:text-white transition-colors duration-150"
                >
                  support@gorro.ng
                </a>
              </li>

              {/* Phone */}
              <li>
                <a
                  href="tel:+2340000000000"
                  className="text-[#c8dcdc] text-sm hover:text-white transition-colors duration-150"
                >
                  +234 811 001 1847
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e4545]" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between text-sm items-start md:items-center gap-3 pt-6">
          <p className="text-[#6a9999] text-md">
            © {new Date().getFullYear()} Bigstack Technologies Ltd. All rights reserved.
          </p>
          <p className="text-[#6a9999] text-md text-left md:text-right">
            Gorro is not a bank. Savings and treasury services are provided by  Ekondo Microfinance Bank.
          </p>
        </div>

      </div>
    </footer>
  );
}