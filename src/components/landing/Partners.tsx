'use client';

import { motion } from 'framer-motion';

const partners = ['Solana', 'Superteam', 'Jupiter', 'Magic Eden', 'Pyth', 'Wormhole'];

export function Partners() {
  return (
    <section className="py-12 border-y border-gray-200 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest font-medium">
          Powering the Ecosystem
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-gray-400 font-bold text-xl md:text-2xl hover:text-brazil-green transition-colors cursor-default opacity-70 hover:opacity-100"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
