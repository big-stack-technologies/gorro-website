{/* ── HERO ── */}
      <section className="bg-white" ref={heroRef}>
        <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <div>
              <h1
                className="text-center lg:text-left lg:text-7xl text-4xl font-bold text-[#272A2A]"
                style={{ fontFamily: 'Wittgenstein' }}
              >
                Your money.<br />
                Your people.<br />
                <span style={{ color: '#c8602a', fontStyle: 'italic' }}>Your rules.</span>
              </h1>

              <p
                className="text-center lg:text-left text-gray-600 mb-6 max-w-2xl leading-relaxed"
                style={{ fontFamily: 'Inter', fontSize: '18px', lineHeight: '1.6' }}
              >
                Gorro is the savings and treasury platform built for how
                Nigerians actually manage money together. Save personally.
                Save as a group. Govern community funds with full transparency.
              </p>

              {/* Sponsored by badge */}
              <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
                <span className="text-sm text-gray-500">Sponsored by</span>
                <span className="text-sm font-semibold text-gray-800">Ekondo Microfinance Bank</span>
                <Image
                  src={features.bank}
                  alt="Ekondo MFB"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-700 mb-10 items-center justify-center lg:justify-start">
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

              {/* Phone mockup — visible only on desktop, sits here and overflows into problem section */}
              <div className="hidden lg:block relative">
                <Image
                  src={hero.mobile}
                  alt="Gorro app on mobile"
                  width={320}
                  height={480}
                  className="object-contain relative z-10"
                  style={{ marginBottom: '-180px' }}
                />
              </div>
            </div>

            {/* Right – two feature cards */}
            <div className="flex flex-col gap-4 pt-4">
              {/* Card 1 */}
              <div className="border-l-4 border-l-[#4F8F7A] bg-[#EDF4F2] rounded-xl p-6">
                <div className="text-xs font-semibold text-[#4F8F7A] uppercase tracking-widest mb-2">
                  FOR INDIVIDUALS
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1" style={{ fontFamily: 'Wittgenstein' }}>
                  Save with discipline.
                </h3>
                <h3 className="font-bold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  Earn with confidence.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Fixed savings, target goals, vault plans are structured products that grow your money while you focus on life.
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-l-4 border-l-[#C65D3B] bg-[#F9EFEB] rounded-xl p-6">
                <div className="text-xs font-semibold text-[#C65D3B] uppercase tracking-widest mb-2">
                  FOR GROUPS &amp; COMMUNITIES
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  A treasury your whole group can trust.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cluster brings three-admin governance, a transparent ledger, and dispute protection to any community fund e.g church group, cooperative or alumni.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile phone mockup – shown only on mobile, below content */}
        <div className="flex lg:hidden items-center justify-center mt-8 pb-10">
          <Image
            src={hero.mobile}
            alt="mobile view"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>
      </section>

      {/* ── PROBLEM SECTION ── */}
      <section className="bg-[#0A3F2F] pt-48 pb-16" ref={problemRef}>
        <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Left – problem copy */}
            <div>
              <div className="mb-10">
                <div className="text-xs font-semibold uppercase tracking-widest text-[#4F8F7A] mb-3">
                  THE PROBLEM AT SCALE
                </div>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white max-w-lg leading-tight border-l-4 border-l-[#c8602a] pl-4"
                  style={{ fontFamily: 'Wittgenstein', fontWeight: '700' }}
                >
                  Community money has always moved on{' '}
                  <span className="text-[#c8602a] italic">trust alone.</span>
                </h2>
              </div>

              <div className="border-l-4 border-l-[#C65D3B] pl-4 max-w-[600px]">
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

            {/* Right – problem cards */}
            <div className="space-y-3" ref={cardsRef}>
              {[
                {
                  icon: features.noPermanent,
                  color: 'bg-white',
                  title: 'No permanent records',
                  desc: 'Groups lack a shared memory for all financial history, often relying on one person to remember.',
                },
                {
                  icon: features.dispute,
                  color: 'bg-white',
                  title: 'Disputes with no trail',
                  desc: 'When conflict arises, there are no records. Trust breaks down and money follows.',
                },
                {
                  icon: features.memberSee,
                  color: 'bg-white',
                  title: "Members can't see anything",
                  desc: 'Contributors have no visibility into how their group funds are managed or spent.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`flex gap-4 items-start p-4 rounded-xl border shadow-sm ${item.color}`}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-gray-900 text-sm mb-0.5"
                      style={{ fontFamily: 'Work Sans', fontWeight: '500', fontSize: '18px', lineHeight: '28px' }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="text-xs text-gray-500 leading-relaxed"
                      style={{ fontFamily: 'Work Sans', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}
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