'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Members', value: '2,500+' },
  { label: 'Events Hosted', value: '150+' },
  { label: 'Bounties Won', value: '500+' },
  { label: 'USDC Paid Out', value: '$250k+' },
];

export function Stats() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-[#1B4B36]">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8"
            >
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-brazil-yellow font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
