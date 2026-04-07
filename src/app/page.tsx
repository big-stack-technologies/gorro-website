'use client';

import Link from 'next/link';
import Image from 'next/image';
import { features, hero, ui } from '@/asset/remoteAsset';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        ease: "back.out(1.7)"
      });
    }

    // Feature cards animations
    const featureCardElements = heroRef.current?.querySelectorAll('.border-l-4, .bg-white');
    if (featureCardElements) {
      gsap.from(featureCardElements, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });
    }

    // Badge animations
    const badgeElements = heroRef.current?.querySelectorAll('.bg-gray-100');
    if (badgeElements) {
      gsap.from(badgeElements, {
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });
    }

    // Parallax effect on hero cards
    const heroCards = heroRef.current?.querySelectorAll('.border, .rounded-xl');
    if (heroCards) {
      gsap.to(heroCards, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
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
      <section className="bg-white" ref={heroRef}>
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-16">
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
              <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-8 block items-center text-center justify-center md:justify-start md:items-center ">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image
                      src={features.bank}
                      alt="Bank-Backed"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">Bank-Backed</div>
                    <div className="text-xs text-gray-400">Licensed &amp; Regulated</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Image
                      src={features.secure}
                      alt="Secure"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">100% Secure</div>
                    <div className="text-xs text-gray-400">Your money is safe</div>
                  </div>
                </div>
              </div>
             
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
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="bg-[#0A3F2F] py-16" ref={problemRef}>
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
                Every month, an Ajo group relies on one person's memory to keep everything straight.
              </p>
              <p className="text-base md:text-lg text-[#D17D62]">
                Billions of naira move through these networks with nothing more than trust and a WhatsApp group to hold it all together.
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
      <section id="products" className="py-20 bg-white">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 bg-[#F5E7F7] border border-[#A00EB3]/20 px-4 py-4 rounded-2xl"  >
            <div className="  rounded-2xl p-8">
              <div className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-[#A00EB3]"> ⭐ FLAGSHIP PRODUCT</div>
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
            <div className="border border-gray-200 rounded-2xl p-8 bg-[#EDF4F2]">
              <div className="inline-block bg-[#4F8F7A] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">GROUP SAVINGS</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily:'Wittgenstein'}}>Circle Savings</h3>
              <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                Save collectively towards a shared goal. From friends, to family, and even colleagues, everyone contributes at their own pace, with full visibility into the group's progress.
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
            <div className="border border-gray-200 rounded-2xl p-8 bg-[#EDF4F2]">
              <div className="inline-block bg-[#4F8F7A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 ">ROTATIONAL SAVINGS</div>
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
          <div className="mb-2">
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: '0%',backgroundColor:'#E6F2F2', color: '#4F8F7A', display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '40px', gap: '8px' }}>PERSONAL SAVERS</div>
            <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: 'Wittgenstein', fontWeight: '600', fontSize: '28px', lineHeight: '34px', letterSpacing: '-2%', verticalAlign: 'middle' }}>Individual Savings</h3>
            <p className="text-sm text-gray-500 mb-6" style={{ fontFamily: 'Work Sans', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}>Three ways to grow your money. Each designed for a different life stage and a different relationship with savings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { color: 'bg-[#E3EFFC]', border: '1px solid #1671D9', accent: 'text-[#272A2A]', icon: features.fixedSaving, title: 'Fixed Savings', desc: 'Lock money for a set period. Earn interest when it matures. Simple, committed, rewarding.' },
              { color: 'bg-[#EDF4F2]', border: '1px solid #4F8F7A', accent: 'text-[#272A2A]', icon: features.targetSaving, title: 'Target Savings', desc: 'Set a goal. Set a pace. Gorro auto-saves for you and accrues interest daily until you get there.' },
              { color: 'bg-[#FFFBEB]', border: '1px solid #F59E0B', accent: 'text-[#272A2A]', icon: features.gorroVault, title: 'Gorro Vault', desc: 'Lock your money. Collect your interest upfront. The full return hits your wallet the moment you commit.' },
            ].map(item => (
              <div key={item.title} className={`${item.color} rounded-2xl p-6`} style={{ border: item.border }}>
                <div className="block items-center gap-4 mb-3">
                  <div className="w-12 h-12  flex items-center justify-center flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${item.accent}`}>{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 bg-[#f5f5f0] overflow-hidden">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">GETTING STARTED</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900" style={{fontFamily:'Wittgenstein'}}>
              Up and saving in<br />
              <span className="text-[#c8602a] italic">four simple steps.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left photo */}
            <div className=" overflow-hidden block items-center justify-center">
              
              <div className="w-100 h-100  mx-auto flex items-center justify-center flex-shrink-0">
                <Image
                    src={hero.womanSaving}
                    alt="woman savaing"
                    width={500}
                    height={400}
                    className="object-contain  mb-10"
                  />
              </div>
              {/* <div className="w-100 h-100 mx-auto flex flex-col items-center justify-center  hidden md:block"> */}
              <div className="w-100  mx-auto flex items-center text-center justify-center flex-shrink-0 hidden md:block">

                <Image
                    src={hero.belowWoman}
                    alt="claude ai"
                    width={100}
                    height={100}
                    className="object-contain mx-auto"
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
                <div key={step.num} className="flex gap-5 items-center justify-center">
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
            <div className=" overflow-hidden block items-center justify-center">
              {/* <span className="text-8xl">📱</span> */}
              <div className="w-100 h-50  mx-auto flex items-center justify-center flex-shrink-0 hidden md:block">
                <Image
                    src={hero.aboveMan}
                    alt="woman savaing"
                    width={300}
                    height={300}
                    className="object-contain w-"
                  />
              </div>
              <div className="w-100 h-100  mx-auto flex items-center justify-center flex-shrink-0">
                <Image
                    src={hero.manSaving}
                    alt="claude ai"
                    width={500}
                    height={500}
                    className="object-contain"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section id="who-its-for" className="py-20 bg-white">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3" style={{ fontFamily: 'Work Sans'}}>WHO GORRO IS BUILT FOR</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 md:w-[35%] leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
              Whether you save alone or <span className="text-[#c8602a] italic" style={{ fontFamily: 'Wittgenstein', fontStyle: 'italic' }}>lead a community.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual */}
            <div className="bg-[#0A3F2F] border border-gray-200 rounded-2xl p-8">
              <div className="text-xs text-white font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans'}}>FOR INDIVIDUALS</div>
              <h3 className="text-2xl md:w-[50%] w-[70%]  font-bold text-white mb-4" style={{ fontFamily: 'Wittgenstein'}}>The disciplined <span className="text-gray-300 italic">personal saver.</span></h3>
              <p className="text-sm text-white mb-6 leading-relaxed">
                You have goals. Maybe it's a new device, a trip, an emergency fund, or just the discipline to save consistently every month. Gorro gives you the structure to get there and interest that rewards you for staying committed.
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
            <div className="bg-[#9E4A2F] border border-[#0a3d2e]/20 rounded-2xl p-8">
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
      <section id="early-access" className="py-16 bg-[#0a3d2e]">
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a8c5c5] mb-4">EARLY ACCESS IS HERE</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight" style={{fontFamily:'Wittgenstein'}}>
                Be among the<br />first to use <span className="italic text-gray-300">Gorro.</span>
              </h2>
              <p className="text-[#a8c5c5] text-sm leading-relaxed mb-6">
                Gorro is in early access and we're inviting a select group of users to experience the platform before public launch. Download the APK, install it on your Android device, and start saving today.
              </p>
              <p className="text-[#a8c5c5] text-sm ">Available on iOS — Android coming soon</p>
            </div>
            {/* Right – download card */}
            <div className="bg-white rounded-2xl p-8">
              {/* <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">CLOSE YOUR EYES &amp; PICTURE</div> */}
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{fontFamily:'Wittgenstein'}}>Download Gorro</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Gorro is currently available on the Play Store and App Store. Download the app to start saving today.
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
                  href="#"
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
                  href="#"
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