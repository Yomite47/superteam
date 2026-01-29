'use client';

import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-32 bg-dark-bg relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-gradient-brazil opacity-[0.03]" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brazil-green/20 rounded-full blur-[120px] pointer-events-none" />
       
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-16 border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-brazil-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Stop Watching. <span className="text-gradient-brazil">Start Building.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            The next unicorn is being built right now. Be part of it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto px-12 h-14 text-lg bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-300">
              Join the Discord
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 h-14 text-lg hover:bg-white/5 border-white/20">
              View Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
