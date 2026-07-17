import Link from 'next/link';
import Image from 'next/image';
import { ui } from '@/asset/remoteAsset';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0a3d2e] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Wittgenstein' }}>GORRO</h2>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'Wittgenstein' }}>Terms of Service</h1>
              <p className="text-[#a8c5c5] text-sm mb-6">Effective Date: 1st June 2026  ·  Version 1.0</p>
              <p className="text-[#a8c5c5] text-lg mb-6 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Gorro platform, including the Gorro mobile application, website, and all associated financial services. By creating an account or using Gorro in any way, you agree to be bound by these Terms. Please read them carefully.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <Image
                  src={ui.termservice}
                  alt="Terms of Service"
                  width={400}
                  height={400}
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
            {/* About Gorro */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>1. About Gorro</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {/* Gorro is a community finance infrastructure platform developed and operated by Bigstack Technologies Ltd, and sponsored by Ekondo Microfinance Bank. */}
                Gorro is a community finance infrastructure platform developed and operated by Bigstack Technologies Ltd.
              </p>
              {/* <p className="text-gray-600 leading-relaxed">
                Gorro provides savings, group treasury management, and credit access services provided by Ekondo Microfinance Bank, a licensed microfinance bank regulated by the Central Bank of Nigeria (CBN). All banking and financial services on the Gorro platform are delivered by Ekondo MFB.
              </p> */}
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gorro provides savings, group treasury management. <br />
                 {/* and credit access services provided by  Ekondo Microfinance Bank, a licensed microfinance bank regulated by the Central Bank of Nigeria (CBN). <br /> */}
                  {/* All banking and financial services on the Gorro platform are delivered by Ekondo MFB. */}
                  All financial services on the Gorro platform are delivered by licence financial institution.
              </p>
            </section>

            {/* Eligibility */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>2. Eligibility</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                To create a Gorro account and use our services, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Be at least 18 years of age.</li>
                <li>Be a resident of Nigeria or a Nigerian citizen.</li>
                <li>Provide accurate, complete, and current information during registration.</li>
                <li>Successfully complete our identity verification (KYC) process.</li>
                <li>Not have been previously barred from using Gorro or any related financial service.</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                By creating an account, you represent and warrant that all of the above conditions are met and that the information you have provided is true and accurate to the best of your knowledge.
              </p>
            </section>

            {/* Your Gorro Account */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>3. Your Gorro Account</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 Account Registration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You must register for a Gorro account to access the platform&apos;s features. During registration, you will be required to provide personal information and complete a KYC verification process. You are responsible for ensuring that the information you provide is accurate and up to date.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.2 Account Security</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You are solely responsible for maintaining the confidentiality of your account credentials, including your password and PIN. You must not share your login details with any other person. You agree to notify us immediately at <a href="mailto:support@gorro.ng" className="text-[#0a3d2e] hover:underline">support@gorro.ng</a> if you suspect any unauthorised access to your account. Gorro will not be liable for any loss arising from your failure to keep your account credentials secure.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.3 One Account Per User</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each individual may hold only one Gorro personal account. Creating multiple accounts is prohibited and may result in the suspension or permanent closure of all associated accounts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">3.4 Account Closure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may close your Gorro account at any time through the Gorro App or by contacting our support team. Before closure, all active savings plans must be resolved, all outstanding balances must be settled, and any group memberships must be addressed. We reserve the right to close your account if you breach these Terms or engage in fraudulent, abusive, or unlawful activity.
                  </p>
                </div>
              </div>
            </section>

            {/* Savings Wallet */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>4. Savings Wallet</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Upon successful account creation and KYC verification, a Gorro Savings Wallet will be opened for you. Your wallet is your primary financial account on the platform and is the gateway to all Gorro savings products and group features.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
                {/* <li>Your wallet balance is held in trust by Ekondo Microfinance Bank and is protected under the bank&apos;s licence.</li> */}
                <li>All wallet transactions are permanently recorded in an immutable ledger.</li>
                <li>You may fund your wallet via bank transfer or other payment methods supported by the platform.</li>
                <li>Withdrawals from your wallet are processed to any registered Nigerian bank account.</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 Smart Wallet</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  You may activate the Smart Wallet feature through your profile settings to earn interest at a rate of 12% per annum on your wallet balance. The following rules apply:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Interest accrues daily on balances of ₦1,000 and above.</li>
                  <li>Accrued interest is credited to your wallet at the end of each calendar month.</li>
                  <li>You are permitted up to four (4) qualifying withdrawals from your wallet per calendar month. A qualifying withdrawal is any transfer out of the platform — including to a personal bank account or to another Gorro user. Transfers into Gorro savings products (Fixed Savings, Target Savings, Gorro Vault, Circle, Cluster) do not count as withdrawals for this purpose.</li>
                  <li>If you make a fifth qualifying withdrawal within the same calendar month, all interest accrued from the 1st of that month is forfeited. Forfeited interest is not recovered or carried forward.</li>
                  <li>Your principal balance is never affected by a Smart Wallet forfeiture — only accrued interest is lost.</li>
                  <li>The withdrawal counter resets on the 1st of each calendar month.</li>
                  <li>Smart Wallet can be activated or deactivated at any time from your profile settings.</li>
                </ul>
              </div>
            </section>

            {/* Savings Products */}
            {/* <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>5. Savings Products</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.1 Fixed Savings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may lock a chosen amount for a fixed period and earn interest upon maturity. Early withdrawal is permitted but will result in forfeiture of all accrued interest and a 2% early exit fee, capped at ₦3,000. A 24-hour processing delay applies to early withdrawals.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.2 Target Savings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may set a savings goal with a target amount, maturity date, and auto-save frequency (daily, weekly, or monthly). Interest accrues daily. Early withdrawal results in forfeiture of all accrued interest and a 2% fee, capped at ₦3,000.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.3 Gorro Vault</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may lock funds for a fixed duration of 3 months, 6 months, or 1 year. Interest for the full duration is paid upfront into your wallet at the time of creation. The principal is strictly locked until maturity and cannot be withdrawn early under any circumstances.
                  </p>
                </div>
              </div>
            </section> */}

            {/* Circle Savings */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>5. Circle Savings</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Circle Savings allows users to save collectively towards a shared goal. When you create or join a Circle, the following terms apply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Circles may be public (open to any Gorro user) or private (admission requires admin approval).</li>
                <li>Each member&apos;s contributions belong to them individually and are tracked separately.</li>
                <li>A member may withdraw their own contributions at any time without requiring admin approval. Early withdrawal rules apply: accrued interest is forfeited and a 2% fee (capped at ₦3,000) applies, with a 24-hour processing delay.</li>
                <li>As a Circle admin, you are responsible for managing membership in accordance with these Terms.</li>
              </ul>
            </section>

            {/* Gorro Cluster */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>6. Gorro Cluster — Community Treasury</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Gorro Cluster is a shared digital treasury for organised groups, governed by three verified administrators. The following terms apply to all Cluster participants:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.1 Cluster Creation and Activation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A Cluster must be created with exactly three (3) verified admins. The Cluster is not active until all three admins have been verified by Gorro. Each admin must be a registered Gorro user who has completed KYC verification.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.2 Admin Governance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All withdrawals from a Cluster treasury require the approval of all three admins. No single admin may authorise a withdrawal unilaterally. By accepting admin status, you accept a fiduciary responsibility to all members of the Cluster.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.3 Admin Changes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The removal of an admin triggers a mandatory 24-hour cooling-off period during which all withdrawals are paused and a dispute window is open. A new admin may only be added after the cooling-off period has ended and the new admin has been verified by Gorro.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.4 Member Transparency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    All Cluster members have the right to view the Cluster&apos;s current balance, full transaction history, all contributions, and all withdrawals at any time. Individual KYC data and private admin communications are not visible to members.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.5 Disputes</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Any Cluster member may raise a dispute through the platform. Upon submission of a dispute, all pending Cluster withdrawals are immediately paused and all admins are notified. Gorro reserves the right to investigate and take appropriate action in respect of any dispute raised.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.6 Cluster Closure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Closure of a Cluster requires the initiation by one admin and the approval of both remaining admins. Upon approved closure, the remaining Cluster balance is transferred to the designated admin and all members are notified. The Cluster&apos;s transaction history is archived permanently.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">6.7 Off-Platform Contributions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cluster members may record contributions from individuals who are not registered Gorro users. A temporary virtual account is generated for each off-platform contribution and expires upon receipt of payment. All such contributions are recorded against the contributor&apos;s name in the Cluster ledger.
                  </p>
                </div>
              </div>
            </section>

            {/* Ajo by Gorro */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>7. Ajo by Gorro</h2>
              <p className="text-gray-600 leading-relaxed">
                Ajo by Gorro is a digitised rotational savings product. Members contribute on a scheduled basis and receive the pooled contributions in rotation. The platform automates contributions, rotation scheduling, and record-keeping. Specific terms governing your participation in an Ajo group will be communicated within the app at the time of creation or joining.
              </p>
            </section>

            {/* Credit and Loan Products */}
            {/* <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>9. Credit and Loan Products</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Loan products available on the Gorro platform are offered by Ekondo Microfinance Bank under its regulatory licence. By applying for a loan through Gorro, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Provide accurate information in your loan application.</li>
                <li>Consent to the retrieval and use of your credit history from CRC Credit Bureau for the purpose of assessing your application.</li>
                <li>Consent to the reporting of your loan repayment behaviour to CRC Credit Bureau.</li>
                <li>Repay the loan in accordance with the agreed repayment schedule.</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Loan origination and servicing are subject to the specific terms and conditions communicated by Ekondo Microfinance Bank at the time of application. Bigstack Technologies Ltd earns fees in connection with loan origination and servicing but is not the lender.
              </p>
            </section> */}

            {/* Prohibited Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>8. Prohibited Conduct</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You agree not to use the Gorro platform for any of the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Money laundering, terrorist financing, or any other unlawful financial activity.</li>
                <li>Fraud, impersonation, or misrepresentation of your identity or the identity of others.</li>
                <li>Creating multiple accounts or using accounts on behalf of others without authorisation.</li>
                <li>Circumventing or attempting to circumvent the platform&apos;s security measures or governance controls.</li>
                <li>Misusing the Cluster or Circle features to defraud other members of a group.</li>
                <li>Using the platform in any way that violates applicable Nigerian law or regulation.</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Violation of this section may result in immediate suspension or permanent closure of your account, reporting to relevant law enforcement or regulatory authorities, and legal action where appropriate.
              </p>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>9. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                To the fullest extent permitted by applicable law, Bigstack Technologies Ltd shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Any indirect, incidental, consequential, or punitive damages arising from your use of the Gorro platform.</li>
                <li>Any loss of funds arising from your failure to maintain the security of your account credentials.</li>
                <li>Any loss or damage arising from events beyond our reasonable control, including system outages, network failures, or force majeure events.</li>
                <li>The acts or omissions of third-party service providers, including payment processors and banking partners, where such acts or omissions are outside our reasonable control.</li>
              </ul>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Our total liability to you in connection with any claim arising from your use of Gorro shall not exceed the value of the funds held in your Gorro account at the time the claim arises.
              </p>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Nothing in these Terms limits or excludes liability for fraud, gross negligence, or any other liability that cannot be excluded under applicable law.
              </p>
            </section>

            {/* Governing Law and Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>10. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                These Terms are governed by and shall be construed in accordance with the laws of the Federal Republic of Nigeria.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                In the event of any dispute arising from or in connection with these Terms or your use of the Gorro platform, we encourage you to first contact us at <a href="mailto:support@gorro.ng" className="text-[#0a3d2e] hover:underline">support@gorro.ng</a> to seek an amicable resolution. If a dispute cannot be resolved informally, it shall be referred to and finally resolved by arbitration in accordance with the Arbitration and Conciliation Act of Nigeria, with the seat of arbitration in Lagos, Nigeria.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nothing in this section prevents either party from seeking urgent injunctive or other equitable relief from a court of competent jurisdiction.
              </p>
            </section>

            {/* Amendments to These Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>11. Amendments to These Terms</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We may update these Terms of Service from time to time. Where we make material changes, we will notify you via the app or by email at least 14 days before the changes take effect. Your continued use of Gorro after the effective date of any updated Terms constitutes your acceptance of those changes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you do not agree with any changes to these Terms, you must stop using the platform and close your account before the changes take effect.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600">
              <strong>Gorro</strong> · A product of Bigstack Technologies Ltd · RC 1807221
            </p>
          </div>
        </div> */}

        {/* Contact Section */}
        {/* <div className="mt-12">
          <div className="bg-[#f5f5f0] rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Wittgenstein' }}>Contact Us</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> <a href="mailto:support@gorro.ng" className="text-[#0a3d2e] hover:underline">support@gorro.ng</a>
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
