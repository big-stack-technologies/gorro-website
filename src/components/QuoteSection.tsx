'use client';

export default function QuoteSection() {
    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-2 text-center">
                <blockquote className="text-2xl font-bolder sm:text-3xl font-medium text-gray-900 leading-relaxed mb-6 font-semibold" style={{ fontFamily: 'Wittgenstein' }}>
                    "Community finance has existed for generations. What has been missing is the{' '}
                    <span className="text-[#c8602a] italic">infrastructure to protect it.</span>"
                </blockquote>
                <cite className="text-sm text-gray-500 not-italic">Thomas Agba · Founder, Gorro</cite>
            </div>
        </section>
    );
}
