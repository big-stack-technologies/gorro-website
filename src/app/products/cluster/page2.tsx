'use client';

import Link from 'next/link';
import Image from 'next/image';
import { REMOTE_ASSETS, GORRO_CLUSTER } from '@/asset/remoteAsset';
import React from 'react';
import { FaUniversity, FaCheckDouble, FaEye, FaHandshake } from 'react-icons/fa';

export default function ClusterPage() {
  const [downloadLink, setDownloadLink] = React.useState('https://play.google.com/store/apps/details?id=com.gorro.app');
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const heroImages = [
    GORRO_CLUSTER.slideHero1,
    GORRO_CLUSTER.slideHero2,
    GORRO_CLUSTER.slideHero3,
    GORRO_CLUSTER.slideHero4,
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
      <section className="py-20 bg-gradient-to-br from-[#0A3F2F] to-[#0a5d44] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#4F8F7A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c8602a] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#4F8F7A]/20 rounded-full text-sm font-semibold mb-6" style={{ fontFamily: 'Work Sans' }}>
                GORRO CLUSTER
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                Your community&apos;s treasury, <span className="text-[#c8602a]">managed together</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: 'Work Sans' }}>
                Every association, church group, cooperative and alumni set has the same problem: someone has to hold the money, and everyone has to trust them. Cluster removes that problem.
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
                        alt={`Cluster ${index + 1}`}
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

      {/* Features Grid */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              How Cluster Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
              Built for church associations, town unions, school groups, alumni associations, estate and landlord associations, and any group saving toward a shared project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Shared treasury',
                desc: 'One place for all group contributions, visible to members.',
                Icon: FaUniversity,
                color: 'from-blue-500/10 to-blue-600/10',
                border: 'border-blue-500/20'
              },
              {
                title: 'Co-approval on every withdrawal',
                desc: 'Multiple admins must approve before funds move.',
                Icon: FaCheckDouble,
                color: 'from-green-500/10 to-green-600/10',
                border: 'border-green-500/20'
              },
              {
                title: 'Full transparency',
                desc: 'Every contribution and payout is recorded, so there are no more "where did the money go?" meetings.',
                Icon: FaEye,
                color: 'from-purple-500/10 to-purple-600/10',
                border: 'border-purple-500/20'
              },
              {
                title: 'Accountability built in',
                desc: 'Leadership can change without the group\'s money changing hands.',
                Icon: FaHandshake,
                color: 'from-orange-500/10 to-orange-600/10',
                border: 'border-orange-500/20'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${feature.color} border ${feature.border} rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 text-[#0A3F2F]">
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

      {/* Visual Feature Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Two Standalone Images Side by Side */}
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={GORRO_CLUSTER.standAlone1}
                  alt="Cluster Feature 1"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src={GORRO_CLUSTER.standAlone2}
                  alt="Cluster Feature 2"
                  width={400}
                  height={500}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                Your group&apos;s money, <span className="text-[#c8602a]">governed by your group</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                <p>
                  It gives your group a shared treasury where members contribute, everyone can see the balance, and no money leaves without approval from more than one admin.
                </p>
                <p className="font-semibold text-[#0A3F2F]">
                  One person can&apos;t move funds alone.
                </p>
                <ul className="space-y-3 mt-6">
                  {[
                    'Transparent record of all transactions',
                    'Multi-signature approval system',
                    'Real-time balance updates',
                    'Automated contribution tracking',
                    'Secure digital governance'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-[#4F8F7A] text-xl">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0A3F2F] to-[#0a5d44] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: 'Wittgenstein' }}>
            Ready to transform how your community manages money?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Join thousands of groups already using Gorro Cluster for transparent, secure community finance.
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
