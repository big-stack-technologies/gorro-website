'use client';

import Image from 'next/image';
import { hero } from '@/asset/remoteAsset';

export default function GettingStartedSection() {
    return (
        <section className="py-20 bg-[#f8f7f4] overflow-hidden" id="how">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="text-xs font-semibold uppercase tracking-[3px] text-[#0a3d2e] mb-4">
                        GETTING STARTED
                    </div>
                    <h2 className="text-[42px] sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
                        Up and saving in<br />
                        <span className="text-[#c8602a] italic">four simple steps.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Left: Woman Image */}
                    <div className="lg:col-span-5">
                        <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
                            <Image
                                src={hero.womanSaving}
                                alt="Woman using Gorro app"
                                width={520}
                                height={420}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* Center: Steps */}
                    <div className="lg:col-span-5 relative">
                        <div className="space-y-10 pl-2">
                            {[
                                {
                                    num: "01",
                                    title: "Download the app",
                                    desc: "Get the Gorro APK for Android. Install it in seconds. No app store required."
                                },
                                {
                                    num: "02",
                                    title: "Create your account",
                                    desc: "Sign up and complete a quick identity verification. Takes about two minutes."
                                },
                                {
                                    num: "03",
                                    title: "Open your wallet",
                                    desc: "Your Gorro wallet is your financial home. Fund it and you are ready to save."
                                },
                                {
                                    num: "04",
                                    title: "Start saving your way",
                                    desc: "Choose a savings product, join or create a group, or set up your Cluster treasury."
                                },
                            ].map((step) => (
                                <div key={step.num} className="flex gap-6">
                                    {/* Green Circle */}
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-[#0a3d2e] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                                            {step.num}
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="pt-1">
                                        <h3 className="font-semibold text-xl text-gray-900 mb-1.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-[15px] text-gray-600 leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative Green Squiggle (positioned like Figma) */}
                        <div className="absolute -right-8 top-20 hidden xl:block pointer-events-none">
                            <svg width="140" height="160" viewBox="0 0 140 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 25 Q35 10 55 40 Q85 75 70 105 Q50 135 95 145"
                                    stroke="#0a3d2e"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Right: Man Image (smaller, bottom-aligned) */}
                    <div className="lg:col-span-2 lg:mt-auto hidden lg:block">
                        <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
                            <Image
                                src={hero.manSaving}
                                alt="Man using Gorro app"
                                width={300}
                                height={380}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom left decorative asterisk */}
                <div className="mt-16 flex justify-start">
                    <span className="text-[#c8602a] text-5xl opacity-75">✦</span>
                </div>
            </div>
        </section>
    );
}
