'use client';

import Image from 'next/image';
import { features } from '@/asset/remoteAsset';

export default function ProblemSection() {
    return (
        <section className="bg-[#0A3F2F] py-16">
            <div className="w-fit px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">
                                THE PROBLEM WE SOLVE
                            </div>
                            <h2
                                className="text-white text-[42px] sm:text-[48px] leading-[52px] sm:leading-[56px] font-bold max-w-lg"
                                style={{
                                    fontFamily: 'Wittgenstein',
                                    fontWeight: '700',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                Community money has always moved on{' '}
                                <span className="text-[#c8602a] italic">trust alone.</span>
                            </h2>
                        </div>

                        <div className='flex flex-row gap-10 h-auto'>
                            <div className="bg-[#c8602a] w-1 h-53 rounded"></div>
                            <div className="space-y-6 text-[17px] leading-[28px] text-white/90" style={{ fontFamily: 'Wittgenstein', fontWeight: '400' }}>
                                <p>
                                    Every month, a church treasurer collects contributions from hundreds of members and records them in a notebook.
                                </p>
                                <p>
                                    Every week, an Ajo group relies on one person's memory to keep everything straight.
                                </p>
                                <p className="text-[#D17D62] font-medium">
                                    Billions of naira move through these networks — with nothing more than trust and a WhatsApp group to hold it all together.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Problem Cards */}
                    <div className="space-y-3">
                        {[
                            {
                                icon: features.noPermanent,
                                title: 'No permanent records',
                                desc: 'When a treasurer moves on, the financial history often disappears with them.'
                            },
                            {
                                icon: features.onePerson,
                                title: 'One person holds everything',
                                desc: 'Group funds pass through personal bank accounts, with no governance or oversight.'
                            },
                            {
                                icon: features.dispute,
                                title: 'Disputes with no trail',
                                desc: 'When records are unclear, trust breaks down — and money follows.'
                            },
                            {
                                icon: features.memberSee,
                                title: "Members can't see anything",
                                desc: 'Contributors have no visibility into how group funds are managed or spent.'
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 flex gap-4 items-start hover-lift shadow-sm border border-white/10"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#0A3F2F]/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <div
                                        className="font-semibold text-gray-900 text-[18px] leading-tight"
                                        style={{ fontFamily: 'Work Sans', fontWeight: '600' }}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className="text-gray-600 text-[15px] leading-relaxed"
                                        style={{ fontFamily: 'Work Sans', fontWeight: '400' }}
                                    >
                                        {item.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
