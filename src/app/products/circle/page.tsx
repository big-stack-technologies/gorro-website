'use client';

import Link from 'next/link';
import Image from 'next/image';
import { REMOTE_ASSETS, GORRO_CIRCLE, ARROWS } from '@/asset/remoteAsset';
import React from 'react';
import { FaBullseye, FaChartBar, FaUsers } from 'react-icons/fa';

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

export default function CirclePage() {
  const [downloadLink, setDownloadLink] = React.useState('https://play.google.com/store/apps/details?id=com.gorro.app');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    GORRO_CIRCLE.slideHero1,
    GORRO_CIRCLE.slideHero2,
    GORRO_CIRCLE.slideHero3,
    GORRO_CIRCLE.slideHero4,
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
      <section className="py-20 bg-gradient-to-br from-[#C55D3E] to-[#a04d1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: 'Work Sans' }}>
                CIRCLE SAVINGS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                Save together <span className="text-yellow-300">toward one goal</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: 'Work Sans' }}>
                Some goals are better reached together, like the December trip, the group vacation, the wedding aso-ebi, the end-of-year party.
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
                        alt={`Circle ${index + 1}`}
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

      {/* Features Grid */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              Why Circle works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
              With Circle, a group pools savings toward a shared target. Everyone contributes, everyone sees the progress, and the group reaches the goal together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'One shared goal',
                desc: 'Set the target and the deadline. Everyone knows what you\'re saving for.',
                Icon: FaBullseye,
                color: 'from-[#C55D3E]/10 to-[#a04d1f]/10',
                border: 'border-[#C55D3E]/20'
              },
              {
                title: 'Live progress',
                desc: 'See how close the group is at any time. Watch the goal get closer.',
                Icon: FaChartBar,
                color: 'from-blue-500/10 to-blue-600/10',
                border: 'border-blue-500/20'
              },
              {
                title: 'Group motivation',
                desc: 'Nobody wants to be the one holding the Circle back. Social accountability works.',
                Icon: FaUsers,
                color: 'from-green-500/10 to-green-600/10',
                border: 'border-green-500/20'
              }
            ].map((feature, index) => (
              <Reveal key={index} delay={index * 120} from="up">
                <div
                  className={`bg-gradient-to-br ${feature.color} border ${feature.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[#C55D3E]">
                    <feature.Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Two Standalone Images Side by Side */}
            <Reveal from="left" className="order-2 lg:order-2 grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
                <Image
                  src={GORRO_CIRCLE.standAlone1}
                  alt="Circle Feature 1"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500 mt-8">
                <Image
                  src={GORRO_CIRCLE.standAlone2}
                  alt="Circle Feature 2"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </Reveal>

            <Reveal from="right" className="order-1 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                <span className="text-[#c8602a]">Detty December</span> doesn&apos;t fund itself
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  Whether it&apos;s a group trip, wedding expenses, or that epic year-end party, Circle helps your crew save together without the stress.
                </p>
                <p className="font-semibold text-[#c8602a]">
                  Start a Circle. Set the goal. Watch it happen.
                </p>
                <div className="bg-[#FFF4E6] border-l-4 border-[#c8602a] p-6 rounded-r-2xl mt-6">
                  <h4 className="font-bold text-gray-900 mb-2">Perfect for:</h4>
                  <ul className="space-y-2">
                    {[
                      'Group vacations and trips',
                      'Wedding aso-ebi and parties',
                      'Birthday surprise funds',
                      'Office end-of-year parties',
                      'Family reunion expenses',
                      'Friends owambe contributions'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#c8602a] text-xl">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
       <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Arrow decorations */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none">
          <Image src={ARROWS.circleLeft} alt="" width={220} height={220} className="object-contain" />
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 md:w-56 opacity-90 animate-blink-slow pointer-events-none select-none" style={{ animationDelay: '0.6s' }}>
          <Image src={ARROWS.circleRight} alt="" width={220} height={220} className="object-contain" />
        </div>

        <Reveal from="zoom" className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'Wittgenstein' }}>
            Start your Circle today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Bring your group together and save toward the goal that matters to all of you.
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
        </Reveal>
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
