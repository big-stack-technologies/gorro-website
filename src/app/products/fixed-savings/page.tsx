'use client';

import Link from 'next/link';
import Image from 'next/image';
import { REMOTE_ASSETS, GORRO_FIXED, ARROWS } from '@/asset/remoteAsset';
import React from 'react';
import { FaLock, FaCheckCircle, FaCalendarAlt, FaChartLine, FaShieldAlt } from 'react-icons/fa';

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

export default function FixedSavingsPage() {
  const [downloadLink, setDownloadLink] = React.useState('https://play.google.com/store/apps/details?id=com.gorro.app');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    GORRO_FIXED.slideHero1,
    GORRO_FIXED.slideHero2,
    GORRO_FIXED.slideHero3,
    GORRO_FIXED.slideHero4,
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
      {/* Hero Section with Card */}
      <section className="py-20 bg-gradient-to-br from-[#7F3E82] to-[#6b3570] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#7F3E82] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9f4fa3] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: 'Work Sans' }}>
                FIXED SAVINGS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                Lock it away. <span className="text-blue-300">Earn higher interest.</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: 'Work Sans' }}>
                Fixed Savings lets you lock away a lump sum for a set period and earn higher interest. Perfect when you have money you don&apos;t need to touch right away.
              </p>
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
                        alt={`Fixed Savings ${index + 1}`}
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

      {/* How It Works */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              How Fixed Savings Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
              Simple. Secure. Rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Choose your amount',
                desc: 'Decide how much you want to lock away.',
                Icon: FaLock
              },
              {
                step: '02',
                title: 'Pick your duration',
                desc: 'Select how long you want to save (30, 60, 90, 180, or 365 days).',
                Icon: FaCalendarAlt
              },
              {
                step: '03',
                title: 'Earn interest',
                desc: 'Sit back and watch your money grow. Unlock it when the term ends.',
                Icon: FaChartLine
              }
            ].map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-indigo-500/20 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative"
              >
                <div className="absolute -top-4 left-8 bg-[#7F3E82] text-white px-4 py-2 rounded-full text-sm font-bold">
                  {step.step}
                </div>
                <div className="text-[#7F3E82] text-5xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                  <step.Icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal from="left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                Why choose <span className="text-[#7F3E82]">Fixed Savings</span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: 'Higher interest rates', desc: 'Earn more than regular savings accounts', Icon: FaChartLine },
                  { title: 'Discipline built in', desc: 'Money is locked, so you can\'t spend it impulsively', Icon: FaLock },
                  { title: 'Flexible terms', desc: 'Choose from 1 month to 1 year', Icon: FaCalendarAlt },
                  { title: 'Guaranteed returns', desc: 'Know exactly how much you\'ll earn upfront', Icon: FaCheckCircle },
                  { title: 'Safe and secure', desc: 'Your money is protected with bank-level security', Icon: FaShieldAlt }
                ].map((benefit, i) => (
                  <Reveal key={i} delay={i * 100} from="left">
                    <div className="flex items-start gap-4 p-4 bg-[#7F3E82]/10 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                      <span className="text-[#7F3E82] text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <benefit.Icon />
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Wittgenstein' }}>{benefit.title}</h4>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: 'Work Sans' }}>{benefit.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Two Standalone Images Side by Side */}
            <Reveal from="right" className="grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src={GORRO_FIXED.standAlone1}
                  alt="Fixed Savings Feature 1"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 mt-8">
                <Image
                  src={GORRO_FIXED.standAlone2}
                  alt="Fixed Savings Feature 2"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-[#7F3E82] to-[#6b3570] text-white relative overflow-hidden"> */}
       <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Arrow decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none">
          <Image src={ARROWS.fixedLeft} alt="" width={220} height={220} className="object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none" style={{ animationDelay: '0.6s' }}>
          <Image src={ARROWS.fixedRight} alt="" width={220} height={220} className="object-contain" />
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'Wittgenstein' }}>
            Start earning more on your savings
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Lock away your money and watch it grow with higher interest rates.
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
