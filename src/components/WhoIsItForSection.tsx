'use client';

import Image from 'next/image';
import { ui } from '@/asset/remoteAsset';

export default function WhoIsItForSection() {
    return (
        <section className="py-20 bg-white">
            <div className="px-6 sm:px-8 lg:px-12">
                <div className="mb-12">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '16px', lineHeight: '24px', color: '#4F8F7A' }}>WHO GORRO IS BUILT FOR</div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Wittgenstein', fontWeight: '700', fontSize: '48px', lineHeight: '56px' }}>
                        Whether you save alone<br />or <span className="text-[#c8602a] italic" style={{ fontFamily: 'Wittgenstein', fontWeight: '700', fontSize: '48px', lineHeight: '56px', fontStyle: 'italic' }}>lead a community.</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Individual */}
                    <div className="bg-[#0A3F2F] border border-gray-200 rounded-2xl p-8">
                        <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '16px', color: 'white', display: 'inline-flex', alignItems: 'center' }}>FOR INDIVIDUALS</div>
                        <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Wittgenstein', fontWeight: '600', fontSize: '28px' }}>The disciplined <span className="text-gray-300 italic">personal saver.</span></h3>
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
                        <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '16px', color: 'white', display: 'inline-flex', alignItems: 'center' }}>FOR GROUPS & COMMUNITIES</div>
                        <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Wittgenstein', fontWeight: '600', fontSize: '28px' }}>The treasurer who <span className="text-gray-300 italic">needs backup.</span></h3>
                        <p className="text-sm text-white mb-6 leading-relaxed">
                            You're managing money on behalf of people who trust you like a church, a cooperative, an alumni group, an Ajo circle. Gorro takes the weight off your shoulders by distributing governance across three admins, so no single person carries the burden alone.
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
    );
}
