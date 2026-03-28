'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import ProductsSection from '@/components/ProductsSection';
import GettingStartedSection from '@/components/GettingStartedSection';
import WhoIsItForSection from '@/components/WhoIsItForSection';
import QuoteSection from '@/components/QuoteSection';
import CtaSection from '@/components/CtaSection';

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
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={problemRef}>
        <ProblemSection />
      </div>
      <ProductsSection />
      <GettingStartedSection />
      <WhoIsItForSection />
      <QuoteSection />
      <CtaSection />
    </div>
  );
}
