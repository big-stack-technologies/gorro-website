'use client';

import { useState, useMemo, useEffect } from 'react';
import { features, ui } from '@/asset/remoteAsset';
import Image from 'next/image';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // About Gorro
  {
    id: 'what-is-gorro',
    question: 'What is Gorro?',
    answer: 'Gorro is a digital finance platform that helps individuals and groups manage money more transparently. With Gorro, you can: Save towards personal goals, Participate in group savings (Ajo & Circle), Manage association or church funds using Gorro Cluster, Access financial services through regulated partners.',
    category: 'About Gorro'
  },
  {
    id: 'is-gorro-a-bank',
    question: 'Is Gorro a bank?',
    answer: 'No, Gorro is not a bank. Gorro is a financial technology platform that works in partnership with licensed financial institutions to provide savings and lending services.',
    category: 'About Gorro'
  },
  {
    id: 'money-safe',
    question: 'Is my money safe on Gorro',
    answer: 'Yes. Your funds are handled through secure and regulated financial infrastructure provided by licensed banking partners. We also implement: Secure payment integrations, Data encryption, Multi-level access controls (especially for group funds).',
    category: 'About Gorro'
  },
  
  // Account & Onboarding
  {
    id: 'create-account',
    question: 'How do I create an account on Gorro?',
    answer: 'Download the Gorro app, sign up using your phone number, and complete the required verification (KYC). Once verified, your wallet will be created and you can start saving or joining groups.',
    category: 'Account & Onboarding'
  },
  {
    id: 'account-secure',
    question: 'Is my account secure?',
    answer: 'Yes. Gorro uses secure authentication, encryption, and verification processes to protect your account and transactions. We also partner with licensed financial institutions for regulated services.',
    category: 'Account & Onboarding'
  },
  
  // Payments & Transactions
  {
    id: 'payments-work',
    question: 'How do payments work on Gorro?',
    answer: 'You can fund your wallet using bank transfer or other supported payment methods. Funds can then be used for savings, contributions, or group activities such as Circle or Cluster.',
    category: 'Payments & Transactions'
  },
  {
    id: 'receive-money-non-user',
    question: 'Can I receive money from someone who is not on Gorro into my Cluster?',
    answer: 'Yes. A Gorro cluster user can generate a temporary payment account for the contributor. Once payment is made, it is recorded in the cluster/group accordingly.',
    category: 'Payments & Transactions'
  },
  {
    id: 'transaction-time',
    question: 'How long do transactions take?',
    answer: 'Most transactions are processed instantly. However, certain actions like early withdrawals from savings may take up to 24 hours to complete.',
    category: 'Payments & Transactions'
  },
  
  // Savings & Withdrawals
  {
    id: 'withdraw-anytime',
    question: 'Can I withdraw my savings anytime?',
    answer: 'It depends on the savings type: Fixed Savings: Can be broken early with penalties, Target Savings: Can be withdrawn early with penalties, Gorro Vault: Cannot be withdrawn until maturity.',
    category: 'Savings & Withdrawals'
  },
  {
    id: 'early-withdrawal',
    question: 'What happens if I withdraw my savings early?',
    answer: 'If you withdraw before maturity: You will lose all accrued interest, A 2% fee (capped at ₦3,000) will apply, Funds will be released within 24 hours.',
    category: 'Savings & Withdrawals'
  },
  
  // Group Features
  {
    id: 'what-is-circle',
    question: 'What is Gorro Circle?',
    answer: 'Circle is a group savings feature that allows users to contribute towards a shared financial goal. Circles can be private or public, depending on the creator\'s preference.',
    category: 'Group Features (Circle & Cluster)'
  },
  {
    id: 'what-is-cluster',
    question: 'What is Gorro Cluster?',
    answer: 'Cluster is a community treasury system that allows groups (e.g., associations, churches) to manage funds transparently using multiple administrators and approval controls.',
    category: 'Group Features (Circle & Cluster)'
  },
  {
    id: 'cluster-withdrawals',
    question: 'How do withdrawals work in a Cluster?',
    answer: 'Withdrawals must be: Initiated by one admin, Approved by the other two admins, Funds are only released after all approvals are completed.',
    category: 'Group Features (Circle & Cluster)'
  },
  {
    id: 'cluster-admin-change',
    question: 'Can a Cluster admin be changed?',
    answer: 'Yes. However: Admin removal triggers a 24-hour cooling period, Withdrawals are paused during this time, A new admin must be added before transactions resume.',
    category: 'Group Features (Circle & Cluster)'
  },
  
  // Troubleshooting
  {
    id: 'payment-not-reflect',
    question: 'My payment didn\'t reflect. What should I do?',
    answer: 'Please: Confirm the payment was successful from your bank, Wait a few minutes, Contact support if the issue persists.',
    category: 'Troubleshooting'
  },
  {
    id: 'cannot-access-account',
    question: 'I can\'t access my account. What should I do?',
    answer: 'Use the "Forgot Password" option or contact support for assistance.',
    category: 'Troubleshooting'
  },
  
  // Support
  {
    id: 'contact-support',
    question: 'How can I contact Gorro support?',
    answer: 'You can reach us via: Email: support@gorro.ng, In-app support chat, Help section within the app.',
    category: 'Support'
  },
  
  // Account Deletion & Data Privacy
  {
    id: 'delete-account',
    question: 'How can I delete my account?',
    answer: 'You can delete your account by: Navigating to Account > Close Account within the app OR Sending a request to our support email.',
    category: 'Account Deletion & Data Privacy'
  },
  {
    id: 'what-happens-delete',
    question: 'What happens when I delete my account?',
    answer: 'Once your request is confirmed: Your account will be deactivated, Access to the platform will be removed, Personal data will be scheduled for deletion.',
    category: 'Account Deletion & Data Privacy'
  },
  {
    id: 'data-deleted',
    question: 'What data will be deleted?',
    answer: 'We will delete: Personal profile information, Account access credentials, Non-essential usage data.',
    category: 'Account Deletion & Data Privacy'
  },
  {
    id: 'data-retained',
    question: 'Will any data be retained?',
    answer: 'Yes. Certain data may be retained where required by law or regulatory obligations, including: Transaction records, Compliance/KYC data, Fraud prevention records.',
    category: 'Account Deletion & Data Privacy'
  },
  {
    id: 'deletion-time',
    question: 'How long does account deletion take?',
    answer: 'Account deletion is typically processed in 72 hours after confirmation.',
    category: 'Account Deletion & Data Privacy'
  },
  {
    id: 'recover-deleted',
    question: 'Can I recover my account after deletion?',
    answer: 'No. Once your account is deleted, it cannot be restored. You will need to create a new account if you wish to use Gorro again.',
    category: 'Account Deletion & Data Privacy'
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = 'Frequently Asked Questions';
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    if (isTyping && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (displayedText.length === fullText.length && isTyping) {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isTyping, fullText]);

  const filteredFAQs = useMemo(() => {
    let filtered = faqData;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const expandAll = () => {
    setExpandedItems(new Set(filteredFAQs.map(item => item.id)));
  };

  const collapseAll = () => {
    setExpandedItems(new Set());
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#0A3F2F] py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Wittgenstein' }}>
              {displayedText}
              {isTyping && <span className="inline-block w-1 h-12 bg-white ml-1 animate-pulse" />}
            </h1>
            <p className="text-[#a8c5c5] text-lg max-w-2xl mx-auto" style={{fontFamily: 'Work Sans'}}>
              Everything you need to know about Gorro and how it works
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Support Info */}
          <div className="lg:col-span-1">
            <div className="bg-[#EDF4F2] rounded-xl p-6 sticky top-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#4F8F7A] rounded-full flex items-center justify-center">
                  <Image
                    src={features.secure}
                    alt="Support"
                    width={20}
                    height={20}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
                <h3 className="font-bold text-gray-900" style={{ fontFamily: 'Wittgenstein' }}>Support</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Can&apos;t find what you&apos;re looking for? Our support team is here to help.
              </p>
              <div className="space-y-2">
                <a href="mailto:support@gorro.ng" className="flex items-center gap-2 text-sm text-[#4F8F7A] hover:text-[#0A3F2F] transition-colors">
                  <Image
                    src={ui.greenArrowLeft}
                    alt="Email"
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                  support@gorro.ng
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - FAQ Items */}
          <div className="lg:col-span-3">
            {/* Search and Controls */}
            <div className="mb-8">
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border text-black border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8F7A] focus:border-transparent"
                  style={{ fontFamily: 'Inter' }}
                />
                <div className="absolute left-4 top-3.5">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-[#0A3F2F] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#0A3F2F] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Expand/Collapse All */}
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="text-sm text-[#4F8F7A] hover:text-[#0A3F2F] transition-colors"
                >
                  Expand all
                </button>
                <span className="text-gray-300">•</span>
                <button
                  onClick={collapseAll}
                  className="text-sm text-[#4F8F7A] hover:text-[#0A3F2F] transition-colors"
                >
                  Collapse all
                </button>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No results found for &quot;{searchQuery}&quot;</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('All');
                    }}
                    className="mt-4 text-[#4F8F7A] hover:text-[#0A3F2F] transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              ) : (
                filteredFAQs.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-sm"
                  >
                    <button
                      onClick={() => toggleExpanded(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 bg-[#EDF4F2] rounded-full flex items-center justify-center flex-shrink-0">
                          <Image
                            src={ui.greenArrowLeft}
                            alt="Arrow"
                            width={16}
                            height={16}
                            className={`object-contain transition-transform duration-200 ${
                              expandedItems.has(item.id) ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'Work Sans' }}>
                            {item.question}
                          </h3>
                          <p className="text-xs text-[#4F8F7A] mt-1">{item.category}</p>
                        </div>
                      </div>
                    </button>
                    
                    {expandedItems.has(item.id) && (
                      <div className="px-6 pb-4 pl-17">
                        <div className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Work Sans' }}>
                          {item.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Still need help */}
            <div className="mt-12 bg-[#0A3F2F] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: 'Work Sans' }}>
                Still need help?
              </h3>
              <p className="text-[#a8c5c5] mb-6" style={{ fontFamily: 'Work Sans' }}>
                Our support team is available to answer any questions you might have.
              </p>
              <a
                href="mailto:support@gorro.ng"
                className="inline-flex items-center gap-2 bg-white text-[#0A3F2F] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
                <Image
                  src={ui.greenArrowLeft}
                  alt="Arrow"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
