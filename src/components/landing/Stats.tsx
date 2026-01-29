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
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-brazil-green/5 to-dark-bg" />
      
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
              <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-3 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-brazil-green font-bold uppercase tracking-widest text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
