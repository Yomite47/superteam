'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Code, Palette, Rocket, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const members = [
  {
    name: 'Dev Member',
    role: 'Rust Developer',
    icon: Code,
    color: 'text-brazil-green',
    bg: 'bg-brazil-green/10',
    description: "Building DeFi protocols and winning hackathons on Solana.",
  },
  {
    name: 'Creative Member',
    role: 'UI/UX Designer',
    icon: Palette,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    description: "Designing the next generation of consumer crypto apps.",
  },
  {
    name: 'Operator Member',
    role: 'Community Lead',
    icon: Rocket,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    description: "Organizing events and growing the ecosystem in Brazil.",
  },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brazil-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Meet Our Members
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            A diverse community of builders shipping products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {members.map((member, index) => (
            <motion.div
              key={member.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="default" className="h-full border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                   <div className={`w-12 h-12 rounded-xl ${member.bg} flex items-center justify-center`}>
                      <member.icon className={`h-6 w-6 ${member.color}`} />
                   </div>
                   <div>
                     <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                     <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{member.role}</p>
                   </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "{member.description}"
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/members">
            <Button size="lg" variant="outline" className="gap-2 group">
              View All Members
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
