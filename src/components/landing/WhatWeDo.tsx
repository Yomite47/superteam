'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Hammer, Calendar, HandCoins, Briefcase, GraduationCap, Network } from 'lucide-react';

const features = [
  {
    icon: Hammer,
    title: 'Ship Faster',
    description: 'Direct access to technical support, audits, and feedback to get your dApp to mainnet.',
  },
  {
    icon: Calendar,
    title: 'IRL & Online',
    description: 'From hacker houses in Floripa to workshops in São Paulo. We meet where the builders are.',
  },
  {
    icon: HandCoins,
    title: 'No-Strings Funding',
    description: 'Equity-free grants for high-impact projects and public goods. You build, we fund.',
  },
  {
    icon: Briefcase,
    title: 'Get Paid to Learn',
    description: 'Earn USDC by completing tasks, winning hackathons, or landing full-time roles.',
  },
  {
    icon: GraduationCap,
    title: 'Level Up',
    description: 'Master Rust, Anchor, and Solana development with our free, hands-on bootcamps.',
  },
  {
    icon: Network,
    title: 'Global Reach',
    description: 'Connect with the founders and VCs moving the needle in the Solana ecosystem.',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden bg-[#FDFBF7]">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brazil-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brazil-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Why Superteam?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            We provide the unfair advantage you need to succeed in Web3.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hoverEffect variant="default" className="h-full group bg-white border-gray-200">
                <div className="h-14 w-14 rounded-2xl bg-brazil-green/5 flex items-center justify-center mb-6 group-hover:bg-brazil-green/10 transition-colors duration-300">
                  <feature.icon className="h-7 w-7 text-brazil-green group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-brazil-green transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
