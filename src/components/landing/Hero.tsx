'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Refined Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brazil-green/5 rounded-full blur-[120px] -z-10 animate-pulse duration-[5000ms]" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-brazil-yellow/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-gray-200 text-sm font-medium text-brazil-green mb-8 hover:bg-gray-50 transition-colors cursor-default shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-brazil-yellow" />
            <span>Powered by the Solana Ecosystem</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] relative text-gray-900">
            {/* Subtle Brazilian Element */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-brazil-green/10 rounded-full blur-2xl animate-pulse opacity-50 hidden md:block" />
            
            Ship Products. <br />
            <span className="text-gray-500">Win Bounties.</span> <br />
            <span className="text-gradient-brazil relative inline-block">
              Get Funded.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brazil-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            The on-chain economy starts here. We help Brazilian builders, creatives, and operators <span className="text-brazil-green font-semibold">launch on Solana</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            <Button size="lg" className="w-full sm:w-auto px-8 py-6 text-lg shadow-xl shadow-brazil-green/20 hover:shadow-2xl hover:shadow-brazil-green/30">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
              Earn Crypto
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
