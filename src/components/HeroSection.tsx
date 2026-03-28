'use client';

import Image from 'next/image';
import { features, hero } from '@/asset/remoteAsset';

export default function HeroSection() {
    return (
        <section className="bg-white animate-fade-in-up">
            <div className="px-6 sm:px-8 lg:px-12 pt-16 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left */}
                    <div>
                        <h1 className="text-center lg:text-left font-bold" style={{ fontFamily: 'Wittgenstein', fontWeight: '700', fontSize: '72px', lineHeight: '80px', letterSpacing: '-4%', color: '#1a1a1a' }}>
                            Your money.<br />
                            Your people.<br />
                            <span style={{ color: '#c8602a', fontStyle: 'italic' }}>Your rules.</span>
                        </h1>
                        <p className="text-center lg:text-left text-gray-600 text-lg mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '1.6' }}>
                            Gorro is the savings and treasury platform built for how
                            Nigerians actually manage money together. Save personally.
                            Save as a group. Govern community funds with full transparency.
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Image
                                        src={features.bank}
                                        alt="Bank-Backed"
                                        width={16}
                                        height={16}
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="font-semibold">Bank-Backed</div>
                                    <div className="text-xs text-gray-400">Licensed & Regulated</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Image
                                        src={features.secure}
                                        alt="Secure"
                                        width={16}
                                        height={16}
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
                    <div className="flex flex-col gap-4 pt-4 animate-fade-in-right">
                        {/* Card 1 */}
                        <div className="border-l-4 border-l-[#4F8F7A] bg-[#EDF4F2] rounded-r-xl p-6 hover-lift">
                            <div className="text-xs font-semibold text-[#4F8F7A] uppercase tracking-widest mb-2">FOR INDIVIDUALS</div>
                            <h3 className="font-bold text-gray-900 text-lg mb-1">Save with discipline.</h3>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">Learn with confidence.</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Fixed savings, target goals, vault plans are structured products that grow your money while you focus on life.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="border-l-4 border-l-[#C65D3B] bg-[#F9EFEB] rounded-r-xl p-6 hover-lift">
                            <div className="text-xs font-semibold text-[#C65D3B] uppercase tracking-widest mb-2">FOR GROUPS & COMMUNITIES</div>
                            <h3 className="font-bold text-gray-900 text-lg mb-3">A treasury your whole group can trust.</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Cluster brings three-admin governance, a transparent ledger, and dispute protection to any community fund e.g church, cooperative, alumni, or Ajo group.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
