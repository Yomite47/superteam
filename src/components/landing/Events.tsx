'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MapPin, CalendarClock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const events = [
  {
    type: 'Upcoming',
    title: 'Solana Rio Meetup',
    date: 'Oct 15, 2025',
    location: 'Rio de Janeiro',
    image: 'bg-gradient-to-br from-purple-900 to-blue-900',
  },
  {
    type: 'Upcoming',
    title: 'Builder House São Paulo',
    date: 'Nov 02, 2025',
    location: 'São Paulo',
    image: 'bg-gradient-to-br from-green-900 to-emerald-900',
  },
  {
    type: 'Past',
    title: 'Superteam Hacker House',
    date: 'Aug 10, 2025',
    location: 'Florianópolis',
    image: 'bg-gradient-to-br from-yellow-900 to-orange-900',
  },
  {
    type: 'Past',
    title: 'DeFi Summit Brazil',
    date: 'Jul 05, 2025',
    location: 'Online',
    image: 'bg-gradient-to-br from-gray-800 to-black',
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 bg-dark-bg relative overflow-hidden">
       {/* Background Decor */}
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brazil-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Events
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg"
            >
              Join us IRL and Online.
            </motion.p>
          </div>
          <Button variant="ghost" className="text-brazil-green hover:text-brazil-green hover:bg-brazil-green/10 hidden sm:flex gap-2">
            View all events <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hoverEffect className="overflow-hidden p-0 h-full group cursor-pointer border-white/5 bg-card-bg">
                <div className={`h-40 ${event.image} w-full relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={event.type === 'Upcoming' ? 'default' : 'outline'} className={event.type === 'Upcoming' ? 'bg-brazil-green/20 text-brazil-green border-brazil-green/50' : ''}>
                      {event.type}
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-brazil-green transition-colors duration-300 line-clamp-2">{event.title}</h3>
                  <div className="space-y-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CalendarClock className="h-4 w-4 mr-3 text-brazil-yellow" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-3 text-brazil-yellow" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center sm:hidden">
           <Button variant="ghost" className="text-brazil-green hover:text-brazil-green hover:bg-brazil-green/10 gap-2 w-full">
            View all events <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
