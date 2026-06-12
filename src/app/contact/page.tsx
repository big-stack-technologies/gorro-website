'use client';

import { useState } from 'react';

const categories = [
  {
    id: 'account',
    label: 'Account & Wallet',
    description: 'Login issues, wallet top-up, withdrawals, KYC verification.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    id: 'ajo',
    label: 'Ajo / Circle / Cluster',
    description: 'Group savings queries, admin permissions, payout schedules.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-5.477-3.72M9 20H4v-2a4 4 0 015.477-3.72M15 11a4 4 0 11-8 0 4 4 0 018 0zm6-1a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 'technical',
    label: 'Technical / App Issues',
    description: 'Bugs, crashes, slow loading, transaction errors.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'partnership',
    label: 'Partnership Inquiries',
    description: 'Business collaborations, API integrations, investor relations.',
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const subjectMap: Record<string, string> = {
  account: 'Account & Wallet Issue',
  ajo: 'Ajo / Circle / Cluster Query',
  technical: 'Technical / App Issue',
  partnership: 'Partnership Inquiry',
};

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleCategorySelect = (id: string) => {
    setSelectedCategory(id);
    setForm(prev => ({ ...prev, subject: subjectMap[id] ?? '' }));
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setStatus('sending');
  //   // Simulate submission — wire to your real endpoint
  //   await new Promise(res => setTimeout(res, 1800));
  //   setStatus('sent');
  // };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('sending');

  try {
    const response = await fetch('https://gorro.online/tickets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        fullName: form.name,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit ticket');
    }

    const data = await response.json();
    if (data.ok) {
      setStatus('sent');
    } else {
      throw new Error(data.message || 'Failed to submit ticket');
    }
  } catch (error) {
    console.error('Error submitting ticket:', error);
    setStatus('error');
  }
};

  return (
    <div className="flex-1 bg-white">

      {/* ── HERO ── */}
      <section className="bg-[#0a3d2e] py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="text-xs font-semibold uppercase tracking-widest text-[#a8c5c5] mb-4"
            style={{ fontFamily: 'Work Sans' }}
          >
            SUPPORT &amp; CONTACT
          </div>
          <h1
            className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Wittgenstein' }}
          >
            We&apos;re here to{' '}
            <span className="italic text-[#c8602a]">help.</span>
          </h1>
          <p
            className="text-[#a8c5c5] text-lg leading-relaxed max-w-2xl"
            style={{ fontFamily: 'Inter', lineHeight: '1.7' }}
          >
            Whether you have a question about your wallet, a group savings circle, or a partnership
            idea — our team is ready to respond.
          </p>
        </div>
      </section>

      {/* ── SELF-ROUTE CATEGORIES ── */}
      <section className="py-16 px-6 sm:px-8 lg:px-12 bg-[#f7f5f2]">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3"
            style={{ fontFamily: 'Work Sans' }}
          >
            WHAT BRINGS YOU HERE?
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10"
            style={{ fontFamily: 'Wittgenstein' }}
          >
            Select a category to get started faster.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`text-left p-6 rounded-2xl border-2 transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'border-[#0a3d2e] bg-[#0a3d2e] text-white shadow-lg scale-[1.02]'
                    : 'border-gray-200 bg-white text-gray-900 hover:border-[#0a3d2e] hover:shadow-md'
                }`}
              >
                <div
                  className={`mb-4 ${
                    selectedCategory === cat.id ? 'text-[#a8c5c5]' : 'text-[#4F8F7A]'
                  }`}
                >
                  {cat.icon}
                </div>
                <div
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: 'Wittgenstein' }}
                >
                  {cat.label}
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    selectedCategory === cat.id ? 'text-[#a8c5c5]' : 'text-gray-500'
                  }`}
                >
                  {cat.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT METHODS + FORM ── */}
      <section id="contact-form" className="py-16 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left – contact methods */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div
                className="text-xs font-semibold uppercase tracking-widest text-[#0a3d2e] mb-3"
                style={{ fontFamily: 'Work Sans' }}
              >
                CONTACT METHODS
              </div>
              <h2
                className="text-2xl font-bold text-gray-900 mb-6 leading-snug"
                style={{ fontFamily: 'Wittgenstein' }}
              >
                Reach us directly.
              </h2>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EDF4F2] flex items-center justify-center flex-shrink-0 text-[#4F8F7A]">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1" style={{ fontFamily: 'Work Sans' }}>
                  Email Support
                </div>
                <a
                  href="mailto:support@gorro.ng"
                  className="text-[#0a3d2e] font-semibold text-sm hover:underline"
                >
                  support@gorro.ng
                </a>
                <p className="text-xs text-gray-400 mt-1">We respond within 24 hours on business days.</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EDF4F2] flex items-center justify-center flex-shrink-0 text-[#4F8F7A]">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1" style={{ fontFamily: 'Work Sans' }}>
                  WhatsApp (Urgent)
                </div>
                <a
                  href="https://wa.me/2348110011847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a3d2e] font-semibold text-sm hover:underline"
                >
                  +234 811 001 1847
                </a>
                <p className="text-xs text-gray-400 mt-1">For urgent issues only. Mon–Fri, 9am–6pm WAT.</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EDF4F2] flex items-center justify-center flex-shrink-0 text-[#4F8F7A]">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1" style={{ fontFamily: 'Work Sans' }}>
                  Phone
                </div>
                <a
                  href="tel:+2348110011847"
                  className="text-[#0a3d2e] font-semibold text-sm hover:underline"
                >
                  +234 811 001 1847
                </a>
                <p className="text-xs text-gray-400 mt-1">Mon–Fri, 9am–6pm WAT.</p>
              </div>
            </div>

            {/* Reassurance note */}
            <div className="bg-[#f7f5f2] rounded-2xl p-5 border-l-4 border-[#4F8F7A]">
              <p className="text-xs text-gray-600 leading-relaxed">
                <span className="font-semibold text-[#0a3d2e]">Your data is safe.</span> Gorro will never
                ask for your PIN, password, or OTP over email, phone, or WhatsApp. If someone contacts
                you claiming to be Gorro and requests these, please report it immediately.
              </p>
            </div>
          </div>

          {/* Right – form */}
          <div className="lg:col-span-3">
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8 bg-[#EDF4F2] rounded-2xl">
                <div className="w-14 h-14 bg-[#0a3d2e] rounded-full flex items-center justify-center mb-6">
                  <svg width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'Wittgenstein' }}>
                  Message received.
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                  Thank you for reaching out. Our support team will get back to you within 24 hours on business days.
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', subject: '', message: '' }); setSelectedCategory(null); }}
                  className="mt-8 text-xs font-semibold text-[#0a3d2e] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#0a3d2e] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#0a3d2e] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans' }}>
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#0a3d2e] transition-colors duration-200 bg-white"
                  >
                    <option value="" disabled>Select a subject…</option>
                    <option value="Account & Wallet Issue">Account &amp; Wallet Issue</option>
                    <option value="Ajo / Circle / Cluster Query">Ajo / Circle / Cluster Query</option>
                    <option value="Technical / App Issue">Technical / App Issue</option>
                    <option value="Partnership Inquiry">Partnership Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2" style={{ fontFamily: 'Work Sans' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your issue or question in as much detail as possible…"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#0a3d2e] transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#0a3d2e] text-white font-semibold text-sm py-4 rounded-xl hover:bg-[#0d4f3c] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  style={{ fontFamily: 'Work Sans' }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center leading-relaxed">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="underline hover:text-[#0a3d2e]">Privacy Policy</a>.
                  We&apos;ll only use your details to respond to your enquiry.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ── BOTTOM QUOTE ── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <blockquote
            className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-relaxed mb-4"
            style={{ fontFamily: 'Wittgenstein' }}
          >
            &ldquo;Community finance has existed for generations. What has been missing is the{' '}
            <span className="text-[#c8602a] italic">infrastructure to protect it.</span>&rdquo;
          </blockquote>
          <cite className="text-sm text-gray-500 not-italic">Thomas Agba · Founder, Gorro</cite>
        </div>
      </section>

    </div>
  );
}
