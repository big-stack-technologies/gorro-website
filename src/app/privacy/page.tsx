import Link from 'next/link';
import Image from 'next/image';
import { ui } from '@/asset/remoteAsset';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0a3d2e] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Wittgenstein' }}>GORRO</h2>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Wittgenstein' }}>Privacy Policy</h1>
              <p className="text-[#a8c5c5] text-sm mb-6">Effective Date: 12th April 2026  ·  Version 1.0</p>
              <p className="text-[#a8c5c5] text-lg mb-6 leading-relaxed">
                This Privacy Policy explains how Gorro (&quot;Gorro&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, stores, shares, and protects your personal information when you use the Gorro platform, including our mobile application, website, and all associated services. Please read this policy carefully before using Gorro.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src={ui.privacy}
                  alt="Privacy Policy"
                  width={600}
                  height={700}
                  className="object-contain max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Sections */}
          <div className="space-y-12">
            {/* Who We Are */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>1. Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gorro is a community finance infrastructure platform developed and operated by Bigstack Technologies Ltd, and sponsored by Ekondo Microfinance Bank.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gorro provides savings, group treasury management, and credit access services provided by Ekondo Microfinance Bank, a licensed microfinance bank regulated by the Central Bank of Nigeria (CBN). All banking and financial services on the Gorro platform are delivered by Ekondo MFB.
              </p>
              <p className="text-gray-600 leading-relaxed">
                For any privacy-related enquiries, you may contact us at: <a href="mailto:privacy@gorro.ng" className="text-[#0a3d2e] hover:underline">privacy@gorro.ng</a>
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>2. Information We Collect</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We collect different types of information depending on how you interact with the Gorro platform. The categories of personal data we collect include the following:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Information You Provide Directly</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Identity information: your full name, date of birth, gender, and nationality.</li>
                    <li>Contact information: your phone number, email address, and residential address.</li>
                    <li>Identity verification documents: Bank Verification Number (BVN), National Identity Number (NIN), and government-issued identification documents required for KYC compliance.</li>
                    <li>Financial information: bank account details, transaction history, savings balances, and credit-related information.</li>
                    <li>Account credentials: your username and password.</li>
                    <li>Next-of-kin details: name and contact information for your nominated next of kin.</li>
                    <li>Communications: any messages, queries, or feedback you send to us through the app or via support channels.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Information We Collect Automatically</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Device information: hardware model, operating system, unique device identifiers, and mobile network information.</li>
                    <li>Usage data: log data including access times, pages viewed, features used, and actions taken within the app.</li>
                    <li>IP address and browser type (for web access).</li>
                    <li>Transaction data: the details of every transaction you carry out on the platform, including amounts, timestamps, product types, and counterparties.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 Information From Third Parties</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Identity verification data from licensed identity verification providers.</li>
                    <li>Credit information from CRC Credit Bureau, used to assess creditworthiness for loan products.</li>
                    <li>Payment and transaction data from our payment service providers, Paystack and Fincra.</li>
                    <li>Banking and account data from Ekondo Microfinance Bank in connection with the delivery of financial services on the platform.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.4 Community and Group Information</h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    Gorro is a community finance platform. When you participate in a Cluster, Circle, or Ajo group, certain information is shared within that group by design:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Your contributions, withdrawals, and participation activity within a group are visible to other members of that group.</li>
                    <li>Your name and profile identity are visible to other group members.</li>
                    <li>Your personal KYC documents, identity information, and private account details are never shared with other group members. This information remains strictly private to you and to Gorro.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We use your personal data only for lawful purposes. Specifically, we use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Create and manage your Gorro account and savings wallet.</li>
                <li>Verify your identity and carry out Know Your Customer (KYC) checks as required by applicable regulations.</li>
                <li>Provide, operate, and improve the Gorro platform and all its features.</li>
                <li>Process your transactions, savings plans, group contributions, and withdrawals.</li>
                <li>Assess your eligibility for credit products through our banking partner, Ekondo Microfinance Bank.</li>
                <li>Report credit activity to CRC Credit Bureau as required by law and in accordance with your agreement to our terms.</li>
                <li>Send you transaction notifications, account updates, security alerts, and service-related communications.</li>
                <li>Respond to your enquiries and provide customer support.</li>
                <li>Comply with our legal and regulatory obligations under applicable Nigerian law.</li>
                <li>Detect, prevent, and investigate fraud, unauthorised access, and other illegal activities.</li>
                <li>Analyse usage patterns to improve platform performance and user experience.</li>
                <li>Communicate with you about new products, features, or promotions (where you have not opted out of marketing communications).</li>
              </ul>
            </section>

            {/* Legal Basis for Processing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>4. Legal Basis for Processing Your Data</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We process your personal data in accordance with the Nigeria Data Protection Act (NDPA) 2023 and the NDPA General Application and Implementation Directive (GAID) 2025. The lawful bases on which we rely include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Consent: where you have explicitly agreed to the processing of your personal data for a specific purpose.</li>
                <li>Contractual necessity: where processing is necessary to fulfil our obligations to you under the Gorro Terms of Service.</li>
                <li>Legal obligation: where we are required by law or regulation to process your data — for example, for KYC, anti-money laundering (AML), and credit bureau reporting obligations.</li>
                <li>Legitimate interests: where processing is necessary for our legitimate business interests or the interests of third parties, provided those interests are not overridden by your rights and freedoms.</li>
              </ul>
            </section>

            {/* How We Share Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>5. How We Share Your Information</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We treat your personal data with care and do not sell it to third parties. We may share your information only in the following circumstances:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.1 With Our Banking and Financial Partners</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We share necessary personal and financial data with Ekondo Microfinance Bank for the purpose of delivering regulated financial services — including savings products, loan disbursements, and account management — on the Gorro platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.2 With Payment Service Providers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We share transaction data with Paystack and Fincra solely for the purpose of processing payments, deposits, and withdrawals on the platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.3 With Credit Bureaus</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We share credit-relevant data with CRC Credit Bureau as required by law and for the purpose of credit scoring and responsible lending. By using Gorro&apos;s credit features, you consent to the sharing and reporting of your credit activity.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.4 With Identity Verification Providers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We share identity information with licensed identity and KYC verification providers for the purpose of verifying your BVN, NIN, and other identity documents.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.5 With Regulators and Law Enforcement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may disclose your personal data to government agencies, regulators, law enforcement bodies, or courts where we are required to do so by law, court order, or regulatory direction — including the Central Bank of Nigeria (CBN), the Nigeria Financial Intelligence Unit (NFIU), and other competent authorities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.6 In a Business Transaction</h3>
                  <p className="text-gray-600 leading-relaxed">
                    If Bigstack Technologies Ltd undergoes a merger, acquisition, restructuring, or sale of assets, your personal data may be transferred to the successor entity as part of that transaction. We will notify you of any such change in advance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">5.7 With Your Consent</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may share your information with other third parties where you have given us your explicit consent to do so.
                  </p>
                </div>
              </div>
            </section>

            {/* How Long We Keep Your Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>6. How Long We Keep Your Data</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We retain your personal data for as long as is necessary to provide you with our services and to fulfil the purposes described in this policy. Specifically:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Account data is retained for the duration of your active account and for a minimum of five (5) years after account closure, in compliance with applicable financial regulations.</li>
                <li>Transaction records are retained for a minimum of seven (7) years in accordance with Nigerian financial record-keeping requirements.</li>
                <li>KYC and identity verification data is retained for the period required by CBN regulations and applicable anti-money laundering legislation.</li>
                <li>Where you have exercised a right to erasure (subject to legal and regulatory obligations), we will delete or anonymise your data accordingly.</li>
              </ul>
            </section>

            {/* How We Protect Your Data */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>7. How We Protect Your Data</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We take the security of your personal data seriously and have implemented appropriate technical and organisational measures to protect it against unauthorised access, loss, alteration, or disclosure. These measures include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Encryption of sensitive data in transit and at rest.</li>
                <li>Secure access controls and authentication mechanisms.</li>
                <li>Regular security assessments and monitoring of our systems.</li>
                <li>Restricted access to personal data on a need-to-know basis within our team.</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                While we take all reasonable steps to protect your information, no system is entirely immune to risk. You are responsible for keeping your account credentials confidential and for notifying us immediately of any suspected unauthorised access to your account.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>8. Your Rights</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Under the Nigeria Data Protection Act (NDPA) 2023, you have the following rights with respect to your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Right of access: you may request a copy of the personal data we hold about you.</li>
                <li>Right to rectification: you may request that we correct any inaccurate or incomplete personal data.</li>
                <li>Right to erasure: you may request the deletion of your personal data, subject to our legal and regulatory retention obligations.</li>
                <li>Right to restrict processing: you may request that we limit how we use your personal data in certain circumstances.</li>
                <li>Right to data portability: you may request a copy of your data in a structured, machine-readable format.</li>
                <li>Right to object: you may object to the processing of your personal data for direct marketing purposes at any time.</li>
                <li>Right to withdraw consent: where processing is based on consent, you may withdraw your consent at any time without affecting the lawfulness of processing carried out before withdrawal.</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@gorro.ng" className="text-[#0a3d2e] hover:underline">privacy@gorro.ng</a>. We will respond to all legitimate requests within the timeframes required by applicable law.
              </p>
            </section>

            {/* Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>9. Cookies and Tracking Technologies</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We use cookies and similar tracking technologies on our website to improve your browsing experience, analyse platform usage, and deliver relevant content. You may configure your browser to refuse cookies, though some features of the platform may not function correctly if you do so.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {` Our mobile application may use analytics and crash-reporting tools to help us improve the app's performance and stability. These tools may collect device information and usage data as described in Section 2.2 above.`}
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>10. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Gorro is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from minors. If we become aware that a minor has created an account or provided us with personal data, we will take steps to delete that information and close the account promptly.
              </p>
            </section>

            {/* Updates to This Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>11. Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. Where we make material changes, we will notify you via the app or by email before the changes take effect. The date at the top of this policy indicates when it was last revised. Your continued use of Gorro after any update constitutes your acceptance of the revised policy.
              </p>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        {/* <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-[#f5f5f0] rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>Contact Us</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> <a href="mailto:privacy@gorro.ng" className="text-[#0a3d2e] hover:underline">privacy@gorro.ng</a>
              </p>
              <p className="text-gray-600">
                <strong>Company:</strong> Bigstack Technologies Ltd
              </p>
              <p className="text-gray-600">
                <strong>Banking Partner:</strong> Ekondo Microfinance Bank (Licensed by CBN)
              </p>
            </div>
          </div>
        </div> */}

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-[#0a3d2e] hover:text-[#0d4f3c] font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
