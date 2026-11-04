'use client';

import Link from 'next/link';
import Image from 'next/image';
import { REMOTE_ASSETS, GORRO_VAULT, ARROWS } from '@/asset/remoteAsset';
import React from 'react';
import { FaGem, FaLock, FaCoins, FaClock } from 'react-icons/fa';

function Reveal({
  children, delay = 0, from = 'up', className = '',
}: {
  children: React.ReactNode; delay?: number;
  from?: 'up' | 'left' | 'right' | 'zoom'; className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  const hidden = { up: 'translate-y-10', left: '-translate-x-10', right: 'translate-x-10', zoom: 'scale-90' }[from];
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : `opacity-0 ${hidden}`} ${className}`}>
      {children}
    </div>
  );
}

export default function VaultPage() {
  const [downloadLink, setDownloadLink] = React.useState('https://play.google.com/store/apps/details?id=com.gorro.app');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    GORRO_VAULT.slideHero1,
    GORRO_VAULT.slideHero2,
    GORRO_VAULT.slideHero3,
    GORRO_VAULT.slideHero4,
  ];

  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      setDownloadLink('https://apps.apple.com/app/gorro/id6761542565');
    } else {
      setDownloadLink('https://play.google.com/store/apps/details?id=com.gorro.app');
    }

    // Image rotation every 5 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#D59A2F] to-[#b8821a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#D59A2F] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#b8821a] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: 'Work Sans' }}>
                GORRO VAULT
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                Lock it. <span className="text-yellow-400">Earn upfront.</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: 'Work Sans' }}>
                Lock your savings and earn interest upfront, for money you&apos;re serious about not touching. The ultimate commitment to your financial discipline.
              </p>
              
              {/* Download Button */}
              <div className="flex justify-start mb-8">
                <Link
                  href={downloadLink}
                  className="flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105"
                >
                  <Image
                    src={REMOTE_ASSETS.downloads.download}
                    alt="Download Gorro App"
                    width={250}
                    height={70}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>

            {/* Animated Hero Card with Rotating Images */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <div className="aspect-[3/4] relative">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentImageIndex 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-10'
                      }`}
                      style={{
                        animation: index === currentImageIndex ? 'dropIn 1s ease-out' : 'none'
                      }}
                    >
                      <Image
                        src={image}
                        alt={`Vault ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CSS Animation handled in global style below */}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Vault Different */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              What makes Vault different
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
              Maximum security. Maximum returns. Maximum discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {[
              {
                title: 'Interest paid upfront',
                desc: 'Unlike other savings, your interest is calculated and paid to you immediately when you lock your money. You know exactly what you\'ll earn from day one.',
                Icon: FaGem,
                color: 'from-yellow-500/10 to-amber-600/10',
                border: 'border-yellow-500/20'
              },
              {
                title: 'Seriously locked',
                desc: 'This isn\'t "lock with option to break." Vault money stays locked until maturity. No exceptions. That\'s why the interest is higher.',
                Icon: FaLock,
                color: 'from-gray-500/10 to-gray-600/10',
                border: 'border-gray-500/20'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} border-2 ${feature.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[#D59A2F]">
                  <feature.Icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal from="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                Who is <span className="text-[#D59A2F]">Vault</span> for?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                <p>Vault is designed for people who:</p>
                <ul className="space-y-3">
                  {[
                    'Want the highest possible interest on their savings',
                    'Have lump sums they don\'t need to access anytime soon',
                    'Need external accountability to avoid impulse spending',
                    'Are saving for long-term goals (1+ years out)',
                    'Value discipline and delayed gratification',
                    'Want their interest paid upfront and guaranteed'
                  ].map((item, i) => (
                    <Reveal key={i} delay={i * 80} from="left">
                      <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                        <span className="text-[#D59A2F] text-xl flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <div className="mt-8 p-6 bg-gradient-to-r from-[#D59A2F] to-[#b8821a] text-white rounded-2xl">
                  <p className="text-xl font-bold mb-2" style={{ fontFamily: 'Wittgenstein' }}>
                    For money you&apos;re serious about not touching.
                  </p>
                  <p className="text-sm text-white/80">
                    If you want flexibility, choose Fixed or Target Savings instead.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Two Standalone Images Side by Side */}
            <Reveal from="right" className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src={GORRO_VAULT.standAlone1}
                  alt="Vault Feature 1"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 mt-8">
                <Image
                  src={GORRO_VAULT.standAlone2}
                  alt="Vault Feature 2"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              How Vault Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Choose amount',
                desc: 'Decide how much to lock',
                Icon: FaCoins
              },
              {
                step: '2',
                title: 'Set duration',
                desc: 'Pick your lock period',
                Icon: FaClock
              },
              {
                step: '3',
                title: 'Get interest',
                desc: 'Receive interest upfront',
                Icon: FaGem
              },
              {
                step: '4',
                title: 'Wait & earn',
                desc: 'Money stays locked until maturity',
                Icon: FaLock
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-[#D59A2F] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
                <div className="text-4xl mb-3 text-[#D59A2F]">
                  <step.Icon className="mx-auto" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'Wittgenstein' }}>
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-[#D59A2F] to-[#b8821a] text-white relative overflow-hidden"> */}
       <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Arrow decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none">
          <Image src={ARROWS.vaultLeft} alt="" width={220} height={220} className="object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none" style={{ animationDelay: '0.6s' }}>
          <Image src={ARROWS.vaultRight} alt="" width={220} height={220} className="object-contain" />
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'Wittgenstein' }}>
            Ready to lock your money and earn maximum returns?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Vault is for serious savers who want the highest interest rates and the discipline to match.
          </p>
          <div className="flex justify-center">
            <Link
              href={downloadLink}
              className="flex items-center justify-center rounded-lg transition-all duration-200 hover:scale-105"
            >
              <Image
                src={REMOTE_ASSETS.downloads.download}
                alt="Download Gorro App"
                width={300}
                height={80}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blinkSlow {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 0.3; }
        }
        .animate-blink-slow { animation: blinkSlow 2.4s ease-in-out infinite; }
        @keyframes dropIn {
          0% { opacity: 0; transform: translateY(-30px) scale(0.95); }
          50% { transform: translateY(5px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-blink-slow { animation: none; opacity: 0.9; }
        }
      `}</style>
    </div>
  );
}
