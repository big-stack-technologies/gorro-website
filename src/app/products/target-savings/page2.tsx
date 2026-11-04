'use client';

import Link from 'next/link';
import Image from 'next/image';
import { REMOTE_ASSETS, TARGET_SAVINGS } from '@/asset/remoteAsset';
import React from 'react';
import { FaHome, FaGraduationCap, FaMobileAlt, FaRing, FaPlane, FaShieldAlt, FaBullseye, FaMoneyBillWave, FaCalendarAlt, FaRocket, FaChartLine, FaEye } from 'react-icons/fa';

export default function TargetSavingsPage() {
  const [downloadLink, setDownloadLink] = React.useState('https://play.google.com/store/apps/details?id=com.gorro.app');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    TARGET_SAVINGS.slideHero1,
    TARGET_SAVINGS.slideHero2,
    TARGET_SAVINGS.slideHero3,
    TARGET_SAVINGS.slideHero4,
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
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: 'Work Sans' }}>
                TARGET SAVINGS
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                Set a goal. <span className="text-green-300">Save toward it.</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: 'Work Sans' }}>
                Set a goal, such as rent, school fees or a new phone, and save toward it steadily while earning huge interest on your savings.
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
                        alt={`Target Savings ${index + 1}`}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* CSS Animation */}
              <style jsx>{`
                @keyframes dropIn {
                  0% {
                    opacity: 0;
                    transform: translateY(-30px) scale(0.95);
                  }
                  50% {
                    transform: translateY(5px) scale(1.02);
                  }
                  100% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              Perfect for your big goals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
              Whatever you&apos;re saving for, Target Savings helps you get there
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Rent',
                desc: 'Save monthly toward your annual rent payment',
                Icon: FaHome,
                color: 'from-blue-500/10 to-blue-600/10',
                border: 'border-blue-500/20'
              },
              {
                title: 'School Fees',
                desc: 'Plan ahead for education expenses',
                Icon: FaGraduationCap,
                color: 'from-purple-500/10 to-purple-600/10',
                border: 'border-purple-500/20'
              },
              {
                title: 'New Phone',
                desc: 'Get that upgrade you\'ve been eyeing',
                Icon: FaMobileAlt,
                color: 'from-pink-500/10 to-pink-600/10',
                border: 'border-pink-500/20'
              },
              {
                title: 'Wedding',
                desc: 'Save for your big day or aso-ebi',
                Icon: FaRing,
                color: 'from-red-500/10 to-red-600/10',
                border: 'border-red-500/20'
              },
              {
                title: 'Travel',
                desc: 'Fund your dream vacation',
                Icon: FaPlane,
                color: 'from-orange-500/10 to-orange-600/10',
                border: 'border-orange-500/20'
              },
              {
                title: 'Emergency Fund',
                desc: 'Build your financial safety net',
                Icon: FaShieldAlt,
                color: 'from-emerald-500/10 to-emerald-600/10',
                border: 'border-emerald-500/20'
              }
            ].map((goal, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${goal.color} border ${goal.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 text-emerald-600">
                  <goal.Icon />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Wittgenstein' }}>
                  {goal.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'Work Sans' }}>
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Two Standalone Images Side by Side */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={TARGET_SAVINGS.standAlone2}
                  alt="Target Savings Feature 1"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={TARGET_SAVINGS.standAlone3}
                  alt="Target Savings Feature 2"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                Save smarter with <span className="text-emerald-600">Target</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Name your goal',
                    desc: 'Give your savings target a name that motivates you',
                    Icon: FaBullseye
                  },
                  {
                    title: 'Set your target amount',
                    desc: 'Decide how much you need to save',
                    Icon: FaMoneyBillWave
                  },
                  {
                    title: 'Choose your timeline',
                    desc: 'Pick when you want to reach your goal',
                    Icon: FaCalendarAlt
                  },
                  {
                    title: 'Save at your pace',
                    desc: 'Contribute weekly, monthly, or whenever you can',
                    Icon: FaRocket
                  },
                  {
                    title: 'Earn interest',
                    desc: 'Watch your savings grow with competitive interest rates',
                    Icon: FaChartLine
                  },
                  {
                    title: 'Track your progress',
                    desc: 'See how close you are to your goal in real-time',
                    Icon: FaEye
                  }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl hover:shadow-md transition-shadow">
                    <span className="text-emerald-600 text-3xl flex-shrink-0">
                      <step.Icon />
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                        {step.title}
                      </h4>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: 'Work Sans' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'Wittgenstein' }}>
            Start saving toward your goals today
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Whether it&apos;s rent, school fees, or that dream purchase, Target Savings helps you get there.
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
    </div>
  );
}
