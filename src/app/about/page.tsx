'use client';

import Link from 'next/link';
import Image from 'next/image';
import { logos, ui, features } from '@/asset/remoteAsset';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#0A3F2F] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-xs font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Work Sans' }}>
              OUR STORY
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: 'Wittgenstein' }}>
              Built for the way
              <br />
              Nigerians have <span className="text-[#c8602a]">always</span>
              <br /> managed money.
            </h2>
            <p className="text-lg text-white leading-relaxed mb-12" style={{ fontFamily: 'Work Sans' }}>
              Gorro didn&apos;t start with a product idea. It started with a problem we saw everywhere 
              communities managing billions of naira through trust alone, with no infrastructure to protect them.
            </p>
            
          </div>
        </div>
      </section>

      {/* Where It Started */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-semibold text-gray-900 mb-6 text-[#0a3d2e] " style={{ fontFamily: 'Work Sans' }}>
                WHERE IT STARTED
              </h2>
              <h3 className="text-3xl sm:text-4xl font-semibold text-[#c8602a] mb-6" style={{ fontFamily: 'Wittgenstein' }}>
                A problem hiding in plain sight.
              </h3>
              <div className="space-y-4 text-[#272A2A] leading-relaxed " style={{ fontFamily: 'Wittgenstein' }}>
                <p className="mb-2 border-l-4 border-l-[#4F8F7A] pl-4">
                  Every Sunday, a church treasurer collects contributions from hundreds of members and records them in a notebook. 
                  Every month, an alumni association moves its welfare fund through one person&apos;s personal bank account. 
                  Every week, a market women&apos;s Ajo group relies on the same trusted neighbour to run the rotation from memory.
                </p>
                <p className="mb-2 border-l-4 border-l-[#4F8F7A] pl-4">
                 <span className=" text-[#4F8F7A]">These systems work. </span> They&apos;ve worked for generations. They are built on something powerful 
                  community trust, shared purpose, and social accountability.
                </p>
                <p className="mb-2" style={{ fontFamily: 'Work Sans' }}>
                  But without proper infrastructure, they are fragile. Records disappear when a treasurer moves on. 
                  Disputes arise when contributions go undocumented. Leaders are left personally exposed when group 
                  funds flow through their private accounts. Members have no way to verify that their money is safe.
                </p>
                <p className="mb-2" style={{ fontFamily: 'Work Sans' }}>
                  The problem was never trust. The problem was the absence of tools built for the way communities 
                  actually manage money. Gorro exists to fill that gap.
                </p>
              </div>
            </div>
          
            <div className="mt-12">
              <div className="space-y-4">
                {[
                  { color: 'bg-white', title: '₦Trillions', desc: 'moves through informal community finance across Nigeria every year — churches, cooperatives, alumni groups, and Ajo circles — almost entirely outside formal infrastructure.' },
                  {  color: 'bg-white', title: '0', desc: 'Nigerian fintech platforms had built a governed digital treasury specifically for community groups before Gorro. This gap has existed for decades.' },
                  {  color: 'bg-white', title: "1 platform", desc: 'Now exists that combines savings, group treasury governance, and community finance infrastructure in a single, culturally-aligned product. That platform is Gorro.' },
                ].map((item) => (
                  <div key={item.title} className={`flex gap-4 items-start p-4 rounded-xl border shadow-sm ${item.color}`}>
                    {/* <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div> */}
                    <div>
                      <div className="font-semibold text-4xl mb-0.5 text-[#4F8F7A]" style={{ fontFamily: 'Wittgenstein',}}>
                        {item.title}
                      </div>
                      <div className="leading-relaxed text-black" style={{ fontFamily: 'Work Sans'}}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-xs font-semibold text-[#0a3d2e] mb-6" style={{ fontFamily: 'Work Sans' }}>
              OUR MISSION
            </h2>
            <h3 className="text-2xl font-semibold text-[#0a3d2e] mb-8" style={{ fontFamily: 'Wittgenstein' }}>
              What we&apos;re here to do.
            </h3>
            {/* <blockquote className="text-2xl  italic mb-8 leading-relaxed" style={{ fontFamily: 'Wittgenstein' }}>
              &ldquo;Community finance has existed for generations. What has been missing is the infrastructure to protect it.&rdquo;
            </blockquote> */}
              <blockquote className="text-2xl font-bolder sm:text-3xl font-medium text-gray-900 leading-relaxed mb-6 font-semibold" style={{fontFamily:'Wittgenstein'}}>
                &ldquo;Community finance has existed for generations. What has been missing is the{'   '}
                <span className="text-[#c8602a] italic" >infrastructure to protect it.</span>&rdquo;
              </blockquote>
            <div className="text-gray-600 leading-relaxed space-y-4" style={{ fontFamily: 'Work Sans' }}>
              <p>
                Gorro is building the financial infrastructure for community finance across Nigeria 
                and eventually across Africa. We are not trying to replace the way communities save and 
                manage money together. We are giving that behaviour structure, transparency, and permanence. 
                The trust stays. The paperwork disappears. The money is protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              What We Stand For
            </h2>
            <h3 className="text-2xl font-semibold text-[#0a3d2e]" style={{ fontFamily: 'Wittgenstein' }}>
              The principles behind
              <br />
              every decision we make.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Transparency is non-negotiable.',
                desc: 'Every transaction on Gorro is permanently recorded. Every Cluster member can see every kobo. We built this not because regulations require it but because communities deserve it. No hidden activity. No missing records. No surprises.'
              },
              {
                num: '02',
                title: 'No single person should carry the weight.',
                desc: 'The treasurer who manages group funds on behalf of people who trust them is one of the most exposed individuals in any community. Gorro distributes that burden. Three admins. Collective approval. Nobody holds the keys alone.'
              },
              {
                num: '03',
                title: 'Culture is not a barrier. It\'s the product.',
                desc: 'Ajo, Esusu, cooperative savings, church welfare funds these are not problems to be solved. They are deeply embedded financial behaviours that deserve better tools. We build with cultural intelligence, not against it.'
              },
              {
                num: '04',
                title: 'Trust is earned through evidence.',
                desc: 'We do not ask you to trust us because we say so. We ask you to watch what happens when people use Gorro their money comes back, their records are intact, their groups stay together. That is the only trust that matters.'
              },
              {
                num: '05',
                title: 'Financial inclusion starts with community.',
                desc: 'Formal banking has struggled to reach every Nigerian. But communities have always found a way. By digitising how communities manage money, we extend financial inclusion not one individual at a time but one community at a time.'
              },
              {
                num: '06',
                title: 'We build for the long term.',
                desc: 'Gorro is infrastructure not just an app. Infrastructure takes time to build right. We are not chasing shortcuts. Every governance feature, every ledger entry, every audit trail is designed to last for decades, not months.'
              }
            ].map((principle, index) => (
              // <div key={index} className="bg-[#f5f5f0] rounded-2xl p-6">
              <div key={index} className="bg-[#EDF4F2] border-t-4 border-[#4F8F7A] rounded-2xl p-6">
                <div className="text-xs font-bold text-[#0a3d2e] mb-3" style={{ fontFamily: 'Work Sans' }}>{principle.num}</div>
                <h4 className="font-semibold text-gray-900 text-xl mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  {principle.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    

      {/* CTA Section */}
      {/* <section className="py-20 bg-[#EDF4F2]"> */}
      <section className="py-20 bg-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>
            Join Gorro
          </h2>
          <h3 className="text-2xl font-semibold text-[#0a3d2e] mb-8" style={{ fontFamily: 'Wittgenstein' }}>
            Ready to give your money
            <br />
            a proper home?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Work Sans' }}>
            Whether you&apos;re saving personally or managing funds for a group, Gorro is built for you. 
            Download the app and start today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="flex items-center justify-center gap-30 text-white  duration-200"
              // className="flex items-center justify-center gap-3 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-200"
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
              className="flex items-center justify-center gap-3 text-white  duration-200"
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
      </section>
    </div>
  );
}
