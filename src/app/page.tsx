'use client';

import Link from 'next/link';
import Image from 'next/image';
import { features, hero, products, ui } from '@/asset/remoteAsset';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const individualSavingsRef = useRef<HTMLDivElement>(null);
  const howItWorksRef = useRef<HTMLDivElement>(null);
  const whoItsForRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Mouse tracking state for parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animations
    const heroElements = heroRef.current?.querySelectorAll('h1, p, .flex-wrap > div');
    if (heroElements) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }

    // Hero feature cards animation
    const heroFeatureCards = heroRef.current?.querySelectorAll('.border-l-4');
    if (heroFeatureCards) {
      gsap.from(heroFeatureCards, {
        opacity: 0,
        x: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5
      });
    }

    // Mobile image float animation
    const mobileImage = heroRef.current?.querySelector('.mobile-float');
    if (mobileImage) {
      gsap.from(mobileImage, {
        opacity: 0,
        y: 100,
        scale: 0.8,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.8
      });
      
      // Continuous float effect
      gsap.to(mobileImage, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    // Problem section animations
    const problemElements = problemRef.current?.querySelectorAll('h2, p, .space-y-3 > div');
    if (problemElements) {
      gsap.from(problemElements, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: problemRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // Card animations
    const cardElements = cardsRef.current?.querySelectorAll('.space-y-3 > div');
    if (cardElements) {
      gsap.from(cardElements, {
        opacity: 0,
        scale: 0.9,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // Products section animations
    const productsHeader = productsRef.current?.querySelector('.products-header');
    if (productsHeader) {
      gsap.from(productsHeader, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: productsHeader,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // Gorro Cluster card animation
    const clusterCard = productsRef.current?.querySelector('.cluster-card');
    if (clusterCard) {
      gsap.from(clusterCard, {
        opacity: 0,
        scale: 0.95,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: clusterCard,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // Group savings cards animation - REMOVED to prevent fading
    // Cards will appear normally without animation

    // Individual savings cards animation
    const individualCards = individualSavingsRef.current?.querySelectorAll('.individual-card');
    if (individualCards) {
      gsap.from(individualCards, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: individualSavingsRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    }

    // How it works section animations
    const stepsElements = howItWorksRef.current?.querySelectorAll('.step-item');
    if (stepsElements) {
      gsap.from(stepsElements, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: howItWorksRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
    }

    // Who its for cards animation - REMOVED to prevent fading
    // Cards will appear normally without animation

    // CTA section animation
    const ctaElements = ctaRef.current?.querySelectorAll('.cta-content, .cta-card');
    if (ctaElements) {
      gsap.from(ctaElements, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex-1 bg-white">

      {/* ── HERO ── */}
      <section className="bg-white relative" ref={heroRef}>
        {/* <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-16"> */}
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>
              <h1 className="text-center lg:text-left lg:text-7xl text-4xl font-bold text-[#272A2A]" style={{ fontFamily: 'Wittgenstein' }}>
                Your money.<br />
                Your people.<br />
                <span style={{ color: '#c8602a', fontStyle: 'italic' }}>Your rules.</span>
              </h1>
              <p className="text-center lg:text-left text-gray-600 text-lg mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '1.6' }}>
                Gorro is the savings and treasury platform built for how
                Nigerians actually manage money together. Save personally.
                Save as a group. Govern community funds with full transparency.
              </p>
              {/* <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-8 block items-center text-center justify-center md:justify-start md:items-center ">
                <div className="flex items-center gap-2 text-start">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center ">
                    <Image
                      src={features.bank}
                      alt="Bank-Backed"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Banking by Ekondo MFB</div>
                    <div className="text-xs  text-gray-400">CBN Licensed</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-start">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image
                      src={features.secure}
                      alt="Secure"
                      width={15}
                      height={15}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Bank-grade protection</div>
                    <div className="text-xs  text-gray-400">100% Secure</div>
                  </div>
                </div>
              </div> */}
             
            </div>

            {/* Right – two feature cards */}
            <div className="flex flex-col gap-4 pt-4">
              {/* Card 1 */}
              <div className="border-l-4 border-l-[#4F8F7A] bg-[#EDF4F2] rounded-xl p-6">
                <div className="text-xs font-semibold text-[#4F8F7A] uppercase tracking-widest mb-2">FOR INDIVIDUALS</div>
                <h3 className="font-bold text-gray-900 text-lg mb-1" style={{fontFamily:'Wittgenstein'}}>Save with discipline.</h3>
                <h3 className="font-bold text-gray-900 text-lg mb-3" style={{fontFamily:'Wittgenstein'}}>Earn with confidence.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                    Fixed savings, target goals, vault plans are structured products that grow your money while you focus on life.
                </p>
              </div>
              {/* Card 2 */}
              <div className="border-l-4 border-l-[#C65D3B] bg-[#F9EFEB] rounded-xl p-6">
                <div className="text-xs font-semibold text-[#C65D3B] uppercase tracking-widest mb-2">FOR GROUPS &amp; COMMUNITIES</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3" style={{fontFamily:'Wittgenstein'}}>A treasury your whole group can trust.</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {/* Manage contributions, approvals, and payouts transparently — so no single member holds all the power, and the community wins together. */}
                  Cluster brings three-admin governance, a transparent ledger, and dispute protection to any community fund e.g church group, cooperative or alumni.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile phone image - Smaller, shows only top half, with spacing */}
        <div className="w-full overflow-hidden relative h-[450px] -mb-32 z-0 mt-5 pt-8">
          <div className="flex items-center justify-center mobile-float">
            <Image
              src={hero.mobile}
              alt="mobile view"
              width={400}
              height={400}
              className="object-contain w-[280px] sm:w-[320px] md:w-[360px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="bg-[#0A3F2F] py-16 rounded-t-[50px] rounded-b-[50px] mt-0 mb-8 relative z-10" ref={problemRef}>
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          {/* <div className="mb-10">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">THE PROBLEM AT SCALE</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-lg leading-tight" style={{ fontFamily: 'Wittgenstein', fontWeight: '700', fontSize: '48px', lineHeight: '56px', letterSpacing: '-4%', borderLeft: '4px solid #c8602a', paddingLeft: '16px' }}>
              Community money has always moved on <span className="text-[#c8602a] italic">trust alone.</span>
            </h2>
          </div> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed" style={{ fontFamily: 'Wittgenstein', fontWeight: '400', fontSize: '23px', lineHeight: '28px', letterSpacing: '-2%', verticalAlign: 'middle' }}>
              <div className="mb-10">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">THE PROBLEM AT SCALE</div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-lg leading-tight" style={{ fontFamily: 'Wittgenstein', fontWeight: '700',  paddingLeft: '16px' }}>
                    Community money has always moved on <span className="text-[#c8602a] italic">trust alone.</span>
                  </h2>
              </div>
              <div className='border-l-4 border-l-[#C65D3B] pl-4 max-w-[600px]'>
                <p className="text-base md:text-lg text-white mb-2">
                Every month, a treasurer collects contributions from members and records them in a notebook — posting updates on WhatsApp.
              </p>
              <p className="text-base md:text-lg text-white mb-4">
                {`Every month, an Ajo group relies on one person's memory to keep everything straight.`}
              </p>
              <p className="text-base md:text-lg text-[#D17D62]">
                {`Billions of naira move through these networks with nothing more than trust and a WhatsApp group to hold it all together.`}
              </p>
              </div>
            </div>
            <div className="space-y-3" ref={cardsRef}>
              {[
                { icon: features.noPermanent, color: 'bg-white ', title: 'No permanent records', desc: 'Groups lack a shared memory for all financial history, often relying on one person to remember.' },
                // { icon: features.onePerson, color: 'bg-white ', title: 'One person holds everything', desc: 'One trusted person controls contributions, distributions and decisions.' },
                { icon: features.dispute, color: 'bg-white ', title: 'Disputes with no trail', desc: 'When conflict arises, there are no records. Trust breaks down and money follows.' },
                { icon: features.memberSee, color: 'bg-white ', title: "Members can't see anything", desc: 'Contributors have no visibility into how their group funds are managed or spent.' },
              ].map((item) => (
                <div key={item.title} className={`flex gap-4 items-start p-4 rounded-xl border shadow-sm ${item.color}`}>
                  <div className="w-10 h-10  rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '18px', lineHeight: '28px', letterSpacing: '0%' }}>{item.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: 'Work Sans', fontWeight: '400', fontSize: '16px', lineHeight: '24px', letterSpacing: '0%' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS OVERVIEW ── */}
      <section id="products" className="py-20 bg-white" ref={productsRef}>
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4 products-header">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-2">MORE GORRO OPTIONS</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 md:w-[60%] leading-tight" style={{fontFamily:'Wittgenstein'}}>
                Everything your money needs <span className="text-[#c8602a] italic">in one place.</span>
              </h2>
            </div>
            <p className="text-gray-500 text-md max-w-md leading-relaxed lg:text-left">
              Four products. One platform. Built around the way Nigerians actually save, personally and together.
            </p>
          </div>

          {/* Gorro Cluster – full-width card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 bg-[#F5E7F7] border border-[#A00EB3]/20 px-4 py-4 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 cluster-card"  >
            <div className="  rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={ui.cluster}
                    alt="Cluster icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                {/* <div className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full bg-[#A00EB3]"> ⭐ FLAGSHIP PRODUCT</div> */}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{fontFamily:'Wittgenstein'}}>Gorro Cluster</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                A structured digital treasury for any organised group. Three verified admins must co-approve every withdrawal. Every transaction is permanently recorded and visible to all members in real time. No one person holds the keys.
              </p>
              {/* <div className="text-sm font-semibold text-gray-900 mb-3">One person holds everything</div> */}
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Three-admin co-approval for all withdrawals',
                  'Transparent member ledger — everyone sees everything',
                  '24-hour cooling period for admin changes',
                  'Built-in dispute mechanism to protect members',
                  'Off-platform contributions via virtual accounts',
                  'Permanent, tamper-proof transaction history',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    {/* <span className="w-4 h-4 rounded-full bg-[#0a3d2e] flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </span> */}
                     <Image
                        src={ui.purpleCheck}
                        alt="Check"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" overflow-hidden min-h-[300px] relative">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0a3d2e]/20 to-transparent z-10"></div> */}
              <div className="w-full h-full  flex items-center justify-centerl">
                 <Image
                        src={hero.gorroCluster}
                        alt="Gorro Cluster"
                        width={500}
                        height={450}
                        className="object-contain rounded-2xl"
                      />
              </div>
            </div>
          </div>

          {/* Circle Savings + Ajo by Gorro */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
            <div className="border border-gray-200 rounded-3xl p-8 bg-[#EDF4F2] shadow-md hover:shadow-lg transition-all duration-300 group-savings-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={ui.circle}
                    alt="Circle icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                {/* <div className="inline-block bg-[#4F8F7A] text-white text-xs font-semibold px-3 py-1 rounded-full">GROUP SAVINGS</div> */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily:'Wittgenstein'}}>Circle Savings</h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                {`Save collectively towards a shared goal. From friends, to family, and even colleagues, everyone contributes at their own pace, with full visibility into the group's progress.`}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Private or public circles', 'Shared progress visible to all', 'Your contributions, your withdrawal'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={ui.greenCheck}
                        alt="Check"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-gray-200 rounded-3xl p-8 bg-[#EDF4F2] shadow-md hover:shadow-lg transition-all duration-300 group-savings-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={ui.ajo}
                    alt="Ajo icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                {/* <div className="inline-block bg-[#4F8F7A] text-white text-xs font-semibold px-3 py-1 rounded-full">ROTATIONAL SAVINGS</div> */}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily:'Wittgenstein'}}>Ajo by Gorro</h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
               The rotational savings system you already know — now digitised. Automated contributions, scheduled payouts, transparent records. The trust stays. The paperwork disappears.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {['Automated rotation scheduling', 'Full contribution history', 'Member participation tracking'].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <div className="w-4 h-4  flex items-center justify-center flex-shrink-0">
                      <Image
                        src={ui.greenCheck}
                        alt="Check"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Individual Savings */}
          <div className="mb-2" ref={individualSavingsRef}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: '0%',backgroundColor:'#E6F2F2', color: '#4F8F7A', display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '40px', gap: '8px' }}>PERSONAL SAVERS</div>
            <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Wittgenstein', fontWeight: '600', fontSize: '28px', lineHeight: '34px', letterSpacing: '-2%', verticalAlign: 'middle' }}>Individual Savings</h3>
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'Work Sans', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Four ways to grow your money. Each designed for a different life stage and a different relationship with savings.</p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-5"> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { color: 'bg-[#E3EFFC]', accent: 'text-[#272A2A]', icon: features.fixedSavingIcon, image: products.fixedSaving, hoverImage: products.fixedSavingHover, title: 'Fixed Savings', desc: 'Lock money for a set period. Earn interest when it matures. Simple, committed, rewarding.', id: 'fixed' },
              { color: 'bg-[#EDF4F2]', accent: 'text-[#272A2A]', icon: features.targetSavingIcon, image: products.targetSaving, hoverImage: products.targetSavingHover, title: 'Target Savings', desc: 'Set a goal. Set a pace. Gorro auto-saves for you and accrues interest daily until you get there.', id: 'target' },
              { color: 'bg-[#FFFBEB]', accent: 'text-[#272A2A]', icon: features.gorroVaultIcon, image: products.gorroVault, hoverImage: products.gorroVaultHover, title: 'Gorro Vault', desc: 'Lock your money. Collect your interest upfront. The full return hits your wallet the moment you commit.', id: 'vault' },
              { color: 'bg-[#FFF5F5]', accent: 'text-[#272A2A]', icon: features.smartWalletIcon, image: products.smartWallet, hoverImage: products.smartWalletHover, title: 'Smart Wallet', desc: 'Your everyday money hub. Instant transfers, bill payments, and seamless transactions — all in one place.', id: 'smart' },
            ].map(item => (
              <div 
                key={item.title} 
                className={`${item.color} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 individual-card overflow-hidden relative`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
                  const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
                  setMousePosition({ x, y });
                  setHoveredCard(item.id);
                }}
                onMouseLeave={() => {
                  setMousePosition({ x: 0, y: 0 });
                  setHoveredCard(null);
                }}
              >
                <div className="flex flex-col h-full relative z-10">
                  {/* Content at top */}
                  <div>
                    {/* Icon at the top */}
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                      <Image
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <h3 className={`font-extrabold text-xl mb-3 ${item.accent}`} style={{ fontFamily: 'Wittgenstein', fontWeight: '700' }}>{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6 font-semibold" style={{ fontFamily: 'Work Sans', fontWeight: '600' }}>{item.desc}</p>
                  </div>

                  {/* Spacer to push image to bottom */}
                  <div className="flex-grow"></div>

                  {/* Image at bottom - fixed height */}
                  <div className="w-full flex items-end justify-center mt-auto relative h-[200px]">
                    <div 
                      className="transition-all duration-300 ease-out relative w-full h-full flex items-end justify-center"
                      style={{
                        transform: hoveredCard === item.id 
                          ? `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.05)` 
                          : 'translate(0, 0) scale(1)'
                      }}
                    >
                      {/* Default Image */}
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={280}
                        height={200}
                        className={`object-contain object-bottom drop-shadow-2xl transition-opacity duration-300 ${hoveredCard === item.id ? 'opacity-0' : 'opacity-100'}`}
                      />
                      {/* Hover Image */}
                      <Image
                        src={item.hoverImage}
                        alt={`${item.title} hover`}
                        width={280}
                        height={200}
                        className={`object-contain object-bottom drop-shadow-2xl transition-opacity duration-300 absolute bottom-0 ${hoveredCard === item.id ? 'opacity-100' : 'opacity-0'}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 bg-[#f5f5f0] overflow-hidden rounded-t-[50px] rounded-b-[50px]" ref={howItWorksRef}>
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">GETTING STARTED</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{fontFamily:'Wittgenstein'}}>
              Up and saving in<br />
              <span className="text-[#c8602a] italic">four simple steps.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Left photo */}
            <div className="flex flex-col items-center justify-start h-full">
              <div className="w-full max-w-[400px] mb-6">
                <Image
                  src={hero.womanImageOnborading}
                  alt="woman saving"
                  width={320}
                  height={400}
                  className="object-cover w-full h-auto rounded-[10px]"
                />
              </div>
              {/* Red Arrow - Blinking */}
              <div className="w-full flex items-center justify-center hidden md:block">
                <Image
                  src={hero.redArrowOnborading}
                  alt="arrow indicator"
                  width={100}
                  height={100}
                  className="object-contain mx-auto animate-blink"
                />
              </div>
            </div>
            {/* Steps */}
            <div className="space-y-6 items-center  justify-center text-center">
              {[
                { num: '01', title: 'Download the app', desc: 'Get the Gorro App on the Google Play Store and App Store. Install it in seconds.', divider: "" },
                { num: '02', title: 'Create your account', desc: 'Sign up and complete a quick identity verification. Takes about two minutes.', divider: "" },
                { num: '03', title: 'Open your wallet', desc: 'Your Gorro wallet is your financial home. Fund it and you\'re ready to save.',  divider: ""  },
                { num: '04', title: 'Start saving your way', desc: 'Choose a savings product, join or create a group, or set up your Cluster treasury.',   },
              ].map(step => (
                <div key={step.num} className="flex gap-5 items-center justify-center step-item">
                  {/* <div className="w-10 h-10 rounded-full bg-[#0a3d2e] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{step.num}</div> */}
                  <div className='block text-center'>
                    <div className="w-15 h-15 mx-auto items-center text-center justify-center rounded-full bg-[#0A3F2F] text-white flex  font-bold text-lg flex-shrink-0" style={{fontFamily:'Wittgenstein'}}>{step.num}</div>
                    <div className="font-semibold text-gray-900 mb-1 text-center" style={{fontFamily:'Work Sans'}}>{step.title}</div>
                    <div className="text-sm text-gray-500 leading-relaxed max-w-4xl text-center" style={{fontFamily:'Work Sans'}}>{step.desc}</div>
                    {step.divider && <div className="border-t border-gray-900 my-4 w-12 h-0.5">{step.divider}</div>}
                  </div>
                </div>
              ))}
            </div>
            {/* Right photo */}
            <div className="flex flex-col items-center justify-start h-full">
              {/* Green Arrow - Blinking */}
              <div className="w-full flex items-center justify-center mb-6 hidden md:block">
                <Image
                  src={hero.greenArrowOnborading}
                  alt="arrow indicator"
                  width={100}
                  height={100}
                  className="object-contain mx-auto animate-blink"
                />
              </div>
              <div className="w-full max-w-[400px]">
                <Image
                  src={hero.manImageOnborading}
                  alt="man saving"
                  width={320}
                  height={400}
                  className="object-cover w-full h-auto rounded-[10px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section id="who-its-for" className="py-20 bg-white" ref={whoItsForRef}>
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3" style={{ fontFamily: 'Work Sans'}}>WHO GORRO IS BUILT FOR</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 md:w-[35%] leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
              Whether you save alone or <span className="text-[#c8602a] italic" style={{ fontFamily: 'Wittgenstein', fontStyle: 'italic' }}>lead a community.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual */}
            <div className="bg-[#0A3F2F] border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 who-card">
              <div className="text-xs text-white font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans'}}>FOR INDIVIDUALS</div>
              <h3 className="text-2xl md:w-[50%] w-[70%]  font-bold text-white mb-4" style={{ fontFamily: 'Wittgenstein'}}>The disciplined <span className="text-gray-300 italic">personal saver.</span></h3>
              <p className="text-sm text-white mb-6 leading-relaxed">
                {`You have goals. Maybe it's a new device, a trip, an emergency fund, or just the discipline to save consistently every month. Gorro gives you the structure to get there and interest that rewards you for staying committed.`}
              </p>
              <ul className="space-y-3 text-sm text-white">
                {[
                  'Set a savings goal and auto-save towards it',
                  'Lock money away and earn interest upfront',
                  'Track every kobo in a clear, permanent record'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={ui.arrowLeft}
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Community */}
            <div className="bg-[#9E4A2F] border border-[#0a3d2e]/20 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 who-card">
              <div className="text-xs text-white font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans'}}>FOR GROUPS &amp; COMMUNITIES</div>
              <h3 className="text-2xl md:w-[50%] w-[80%] font-bold text-white mb-4" style={{ fontFamily: 'Wittgenstein', }}>The treasurer who <span className="text-gray-300 italic">needs backup.</span></h3>
              <p className="text-sm text-white mb-6 leading-relaxed">
                You&apos;re managing money on behalf of people who trust you like a church, a cooperative, an alumni group, an Ajo circle. Gorro takes the weight off your shoulders by distributing governance across three admins, so no single person carries the burden alone.
              </p>
              <ul className="space-y-3 text-sm text-white">
                {[
                  'Three admins share every financial decision',
                  'Members see every transaction in real time',
                  'Disputes can be raised and funds frozen instantly'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <Image
                        src={ui.arrowLeft}
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-2 text-center">
          <blockquote className="text-2xl font-bolder sm:text-3xl font-medium text-gray-900 leading-relaxed mb-6 font-semibold" style={{fontFamily:'Wittgenstein'}}>
            &ldquo;Community finance has existed for generations. What has been missing is the{'   '}
            <span className="text-[#c8602a] italic" >infrastructure to protect it.</span>&rdquo;
          </blockquote>
          <cite className="text-sm text-gray-500 not-italic">Thomas Agba · Founder, Gorro</cite>
        </div>
      </section>

      {/* ── CTA + APP DOWNLOAD ── */}
      <section id="early-access" className="py-16 bg-[#0a3d2e] rounded-t-[50px]" ref={ctaRef}>
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="cta-content">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a8c5c5] mb-4">EARLY ACCESS IS HERE</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight" style={{fontFamily:'Wittgenstein'}}>
                Be among the<br />first to use <span className="italic text-gray-300">Gorro.</span>
              </h2>
              <p className="text-[#a8c5c5] text-sm leading-relaxed mb-6">
                {/* Gorro is in early access and we're inviting a select group of users to experience the platform before public launch. Download the APK, install it on your Android device, and start saving today. */}
                {`Gorro is now live and we're inviting you to be among the first to experience the platform. Download the app, create your account, and start saving today.`}
              </p>
              <p className="text-[#a8c5c5] text-sm ">Available on the App Store and Google Play Store</p>
            </div>
            {/* Right – download card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl cta-card">
              {/* <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">CLOSE YOUR EYES &amp; PICTURE</div> */}
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{fontFamily:'Wittgenstein'}}>Download Gorro</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Gorro is currently available on the Google Play Store and App Store. Download the app to start saving today.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                {[
                  'Download from your preferred app store',
                  'Install the app on your device',
                  'Create your account and start saving',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <Image
                        src={ui.greenArrowLeft}
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="space-y-1 mb-6 flex gap-2 items-center ">
                <Link
                  href="https://apps.apple.com/app/gorro/id6761542565"
                  className="flex items-center justify-center gap-3 bg-black text-white  rounded-lg transition-colors duration-200"
                >
                  <Image
                    src={ui.appStore}
                    alt="Download on App Store"
                    width={150}
                    height={30}
                    className="object-contain"
                  />
                </Link>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.gorro.app"
                  className="flex items-center justify-center gap-3 bg-black  text-white rounded-lg transition-colors duration-200"
                >
                  <Image
                    src={ui.playStore}
                    alt="Get it on Google Play"
                    width={150}
                    height={30}
                    className="object-contain"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}