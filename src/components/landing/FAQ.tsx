'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Superteam Brazil?',
    answer: 'Superteam Brazil is a community of builders, creatives, and operators working together to launch products and grow the Solana ecosystem in Brazil. We provide funding, mentorship, and a network to help you succeed.',
  },
  {
    question: 'How do I become a member?',
    answer: 'You can start by joining our Discord community and participating in our events and bounties. Membership is earned through contribution—shipping code, creating content, or organizing events.',
  },
  {
    question: 'What opportunities are available?',
    answer: 'We offer various opportunities including bounties (paid tasks), grants for projects, hackathons, and job placements with top Solana projects. We also host educational workshops and IRL meetups.',
  },
  {
    question: 'How can projects partner with us?',
    answer: 'If you are a Solana project looking to expand in Brazil, we can help with go-to-market strategy, developer relations, and community building. Reach out to our leadership team or apply via our partner form.',
  },
  {
    question: 'Do I need to be a developer to join?',
    answer: 'No! While we have a strong developer focus, we also welcome designers, content creators, community managers, and business developers. The Web3 ecosystem needs diverse skills to thrive.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#FDFBF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Everything you need to know about our community.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors text-gray-900"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brazil-green transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}