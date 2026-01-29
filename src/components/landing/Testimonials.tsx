'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Superteam Brazil helped me find my first job in crypto. The mentorship and community support are unmatched.",
    author: "Maria S.",
    role: "Frontend Developer",
    gradient: "from-brazil-green/20 to-brazil-blue/20"
  },
  {
    content: "The best place to learn Solana development. I went from zero to shipping my first dApp in 4 weeks.",
    author: "João P.",
    role: "Solana Engineer",
    gradient: "from-brazil-yellow/20 to-brazil-green/20"
  },
  {
    content: "Won my first bounty thanks to the workshops here. It's real value, not just hype.",
    author: "Ana L.",
    role: "UI Designer",
    gradient: "from-blue-500/20 to-purple-500/20"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Wall of Love
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            What our community says about us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="h-full relative overflow-hidden group hover:border-gray-300 transition-colors bg-white/50">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-brazil-green/20 mb-4" />
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">"{item.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brazil-green/10 flex items-center justify-center font-bold text-brazil-green">
                      {item.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{item.author}</div>
                      <div className="text-sm text-gray-500">{item.role}</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}