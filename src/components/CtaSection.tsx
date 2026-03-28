'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ui } from '@/asset/remoteAsset';

export default function CtaSection() {
    return (
        <section className="py-16 bg-[#0a3d2e]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-[#a8c5c5] mb-4">EARLY ACCESS IS HERE</div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                            Be among the<br />first to use <span className="italic text-gray-300">Gorro.</span>
                        </h2>
                        <p className="text-[#a8c5c5] text-sm leading-relaxed mb-6">
                            Gorro is in early access and we're inviting a select group of users to experience the platform before public launch. Download the APK, install it on your Android device, and start saving today.
                        </p>
                        <p className="text-[#a8c5c5] text-sm">Available on iOS — Android coming soon</p>
                    </div>
                    {/* Right – download card */}
                    <div className="bg-white rounded-2xl p-8">
                        <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3">CLOSE YOUR EYES & PICTURE</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>Download Gorro APK</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Gorro is currently in private beta on the Play Store and App Store. You can join the waitlist to get notified or download the APK for Android directly below.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600 mb-6">
                            {[
                                'Download the APK file below',
                                'Enable "Install from unknown sources" in settings',
                                'Open the file and install Gorro',
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
                        <Link
                            href="/download"
                            className="block w-full bg-[#0a3d2e] hover:bg-[#0d4f3c] text-white text-center py-3 rounded-lg font-semibold transition-colors duration-200"
                        >
                            Download APK
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
