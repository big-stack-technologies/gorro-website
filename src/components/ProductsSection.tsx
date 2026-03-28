'use client';

import Image from 'next/image';
import { features, hero, ui } from '@/asset/remoteAsset';

export default function ProductsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-4">
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-2">MORE GORRO OPTIONS</div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
                            Everything your money<br />needs <span className="text-[#c8602a] italic">in one place.</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm max-w-xs leading-relaxed lg:text-right">
                        Four products. One platform. Built around the way Nigerians actually save, personally and together.
                    </p>
                </div>

                {/* Gorro Cluster – full-width card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 bg-[#F5E7F7] border border-[#A00EB3]/20 px-4 py-4 rounded-2xl">
                    <div className="rounded-2xl p-8">
                        <div className="inline-block text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-[#A00EB3]"> ⭐ FLAGSHIP PRODUCT</div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Wittgenstein' }}>Gorro Cluster</h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            A structured digital treasury for any organised group. Three verified admins must co-approve every withdrawal. Every transaction is permanently recorded and visible to all members in real time. No one person holds the keys.
                        </p>
                        <div className="text-sm font-semibold text-gray-900 mb-3">One person holds everything</div>
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
                    <div className="overflow-hidden min-h-[300px] relative">
                        <div className="w-full h-full flex items-center justify-center">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="border border-gray-200 rounded-2xl p-8 bg-[#EDF4F2]">
                        <div className="inline-block bg-[#4F8F7A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">GROUP SAVINGS</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>Circle Savings</h3>
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
                        <div className="inline-block bg-[#4F8F7A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">ROTATIONAL SAVINGS</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>Ajo by Gorro</h3>
                        <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                            The rotational savings system you already know being digitalized. Automated contributions, scheduled payouts, transparent records. The trust stays. The paperwork disappears.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {['Automated rotation scheduling', 'Full contribution history', 'Member participation tracking'].map(item => (
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
                </div>

                {/* Individual Savings */}
                <div className="mb-2">
                    <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '16px', lineHeight: '24px', letterSpacing: '0%', backgroundColor: '#E6F2F2', color: '#4F8F7A', display: 'inline-flex', alignItems: 'center', padding: '4px 12px', borderRadius: '40px', gap: '8px' }}>PERSONAL SAVERS</div>
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
                                <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
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
    );
}
