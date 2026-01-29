'use client';

import { Button } from '@/components/ui/Button';

export function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute inset-0 bg-gradient-brazil opacity-[0.03]" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brazil-green/10 rounded-full blur-[120px] pointer-events-none" />
       
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-16 border border-gray-200 relative overflow-hidden group bg-white/60 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brazil-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
            Stop Watching. <span className="text-gradient-brazil">Start Building.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            The next unicorn is being built right now. Be part of it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" className="w-full sm:w-auto px-12 h-14 text-lg bg-brazil-green text-white hover:bg-brazil-green/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brazil-green/20">
              Join the Discord
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-12 h-14 text-lg hover:bg-gray-50 border-gray-300 text-gray-700">
              View Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
