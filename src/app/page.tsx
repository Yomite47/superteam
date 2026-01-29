import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/landing/Hero';
import { WhatWeDo } from '@/components/landing/WhatWeDo';
import { Partners } from '@/components/landing/Partners';
import { SocialProof } from '@/components/landing/SocialProof';
import { Stats } from '@/components/landing/Stats';
import { Events } from '@/components/landing/Events';
import { FAQ } from '@/components/landing/FAQ';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg selection:bg-brazil-green/30">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Partners />
      <SocialProof />
      <Stats />
      <Testimonials />
      <Events />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
