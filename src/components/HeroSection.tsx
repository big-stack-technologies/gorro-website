'use client';

import Image from 'next/image';
import { features, hero } from '@/asset/remoteAsset';

export default function HeroSection() {
    return (
        <section className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* Left Column */}
                    <div className="space-y-8">
                        <h1
                            className="text-center lg:text-left font-bold tracking-tight text-balance"
                            style={{
                                fontFamily: 'Wittgenstein, serif',
                                fontWeight: 700,
                                fontSize: 'clamp(42px, 8vw, 72px)',
                                lineHeight: '1.1',
                                letterSpacing: '-0.04em',
                                color: '#1a1a1a'
                            }}
                        >
                            Your money.<br />
                            Your people.<br />
                            <span style={{ color: '#c8602a', fontStyle: 'italic' }}>Your rules.</span>
                        </h1>

                        <p
                            className="text-center lg:text-left text-[#475467] max-w-xl mx-auto lg:mx-0 text-balance"
                            style={{
                                fontFamily: 'Inter, sans-serif',
                                fontSize: 'clamp(16px, 4vw, 18px)',
                                lineHeight: '1.65'
                            }}
                        >
                            Gorro is the savings and treasury platform built for how Nigerians actually manage money — together.
                            Save personally. Save as a group. Govern community funds with full transparency.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src={features.bank}
                                        alt="Bank-Backed"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-[#1a1a1a]">Bank-Backed</div>
                                    <div className="text-xs text-[#64748B]">Licensed &amp; Regulated</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#F1F5F9] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Image
                                        src={features.secure}
                                        alt="100% Secure"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold text-[#1a1a1a]">100% Secure</div>
                                    <div className="text-xs text-[#64748B]">Your money is safe</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Feature Cards */}
                    <div className="flex flex-col gap-6 pt-2 md:pt-4">

                        {/* Individuals Card */}
                        <div className="bg-[#EDF4F2] border-l-4 border-l-[#4F8F7A] rounded-3xl p-6 sm:p-8 hover:shadow-xl">
                            <div className="uppercase text-xs font-semibold tracking-[0.08em] text-[#4F8F7A] mb-4">
                                FOR INDIVIDUALS
                            </div>
                            <h3 className="font-bold text-[#1a1a1a] text-[21px] sm:text-[23px] leading-tight mb-1">
                                Save with discipline.
                            </h3>
                            <h3 className="font-bold text-[#1a1a1a] text-[21px] sm:text-[23px] leading-tight mb-5">
                                Earn with confidence.
                            </h3>
                            <p className="text-[#475467] leading-relaxed text-[15px] sm:text-base">
                                Fixed savings, target goals, vault plans — structured products that grow your money while you focus on life.
                            </p>
                        </div>

                        {/* Groups & Communities Card */}
                        <div className="bg-[#EDF4F2] border-l-4 border-l-[#C65D3B] rounded-3xl p-6 sm:p-8 hover:shadow-xl">
                            <div className="uppercase text-xs font-semibold tracking-[0.08em] text-[#C65D3B] mb-4">
                                FOR GROUPS &amp; COMMUNITIES
                            </div>
                            <h3 className="font-bold text-[#1a1a1a] text-[21px] sm:text-[23px] leading-tight mb-5">
                                A treasury your whole group can trust.
                            </h3>
                            <p className="text-[#475467] leading-relaxed text-[15px] sm:text-base">
                                Cluster brings three-admin governance, a transparent ledger, and dispute protection to any community fund — church, cooperative, alumni, or Ajo group.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

