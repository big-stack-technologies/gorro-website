'use client';

import Link from 'next/link';
import Image from 'next/image';
import { REMOTE_ASSETS, GORRO_AJO, ARROWS } from '@/asset/remoteAsset';
import React from 'react';
import { FaGlobe, FaLock } from 'react-icons/fa';

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

export default function AjoPage() {
  const [downloadLink, setDownloadLink] = React.useState('https://play.google.com/store/apps/details?id=com.gorro.app');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    GORRO_AJO.slideHero1,
    GORRO_AJO.slideHero2,
    GORRO_AJO.slideHero3,
    GORRO_AJO.slideHero4,
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
      <section className="py-20 bg-gradient-to-br from-[#2D78AE] to-[#245f8d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#2D78AE] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#245f8d] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: 'Work Sans' }}>
                AJO BY GORRO
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                The ajo you know, <span className="text-green-300">without the chasing</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: 'Work Sans' }}>
                Ajo works because it&apos;s simple. Everyone contributes a fixed amount, and each person takes the full pot in turn. Gorro keeps that simplicity and takes away the stress of late payees, lost records and collectors who disappear.
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
                        alt={`Ajo ${index + 1}`}
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

      {/* Two Ways to Join */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              Two ways to join
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
              Choose how you want to save with ajo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Public Ajo',
                desc: 'Join an open group listed on Gorro, like our 2k Weekly or 3k Weekly Ajo. Pick your slot, Gorro weighs your transaction behavior and automatically picks a turn for you, and you start saving.',
                Icon: FaGlobe,
                color: 'from-blue-500/10 to-blue-600/10',
                border: 'border-blue-500/20',
                badge: 'Open to all'
              },
              {
                title: 'Private Ajo',
                desc: 'Start your own ajo with friends, family, colleagues or your market association. Only people you invite into the ajo group can join.',
                Icon: FaLock,
                color: 'from-purple-500/10 to-purple-600/10',
                border: 'border-purple-500/20',
                badge: 'Invite only'
              }
            ].map((type, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${type.color} border-2 ${type.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden`}
              >
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {type.badge}
                </div>
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[#2D78AE]">
                  <type.Icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  {type.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ajo on Gorro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Two Standalone Images Side by Side */}
            <Reveal from="left" className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src={GORRO_AJO.standAlone1}
                  alt="Ajo Feature 1"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 mt-8">
                <Image
                  src={GORRO_AJO.standAlone2}
                  alt="Ajo Feature 2"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </Reveal>

            <Reveal from="right" className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                Why ajo on <span className="text-[#2D78AE]">Gorro</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Automatic contribution reminders',
                    desc: 'Never miss a payment. Get notified before your contribution is due.'
                  },
                  {
                    title: 'Clear payout order everyone can see',
                    desc: 'No confusion about whose turn is next. Full transparency for all members.'
                  },
                  {
                    title: 'Every payment recorded, every turn tracked',
                    desc: 'Digital records mean no disputes, no "I paid already" arguments.'
                  },
                  {
                    title: 'Your payout arrives when it\'s your turn',
                    desc: 'With no begging and no excuses. Automated and guaranteed.'
                  }
                ].map((feature, i) => (
                  <Reveal key={i} delay={i * 100} from="right">
                    <div className="flex items-start gap-4 p-4 bg-[#2D78AE]/10 rounded-xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                      <span className="text-[#2D78AE] text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">✓</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                          {feature.title}
                        </h4>
                        <p className="text-gray-700 text-sm" style={{ fontFamily: 'Work Sans' }}>
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-[#2D78AE] to-[#245f8d] text-white rounded-2xl">
                <p className="text-xl font-bold" style={{ fontFamily: 'Wittgenstein' }}>
                  Same ajo. Better system.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-[#2D78AE] to-[#245f8d] text-white relative overflow-hidden"> */}
       <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Arrow decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none">
          <Image src={ARROWS.ajoLeft} alt="" width={220} height={220} className="object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none" style={{ animationDelay: '0.6s' }}>
          <Image src={ARROWS.ajoRight} alt="" width={220} height={220} className="object-contain" />
        </div>

        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'Wittgenstein' }}>
            Join an ajo or start your own
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Experience the ajo you know and love, now with the safety and transparency you deserve.
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
