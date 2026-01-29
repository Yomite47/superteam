'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Twitter, Globe, MapPin } from 'lucide-react';
import { Member } from '@/data/members';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

interface MemberModalProps {
  member: Member | null;
  onClose: () => void;
}

export function MemberModal({ member, onClose }: MemberModalProps) {
  return (
    <AnimatePresence>
      {member && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card-bg border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl pointer-events-auto"
            >
              <div className="relative h-32 bg-gradient-brazil opacity-20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="px-8 pb-8 -mt-16">
                <div className="w-32 h-32 rounded-full bg-dark-bg border-4 border-card-bg flex items-center justify-center mb-6">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-700 to-gray-900" />
                </div>
                
                <h2 className="text-2xl font-bold mb-1">{member.name}</h2>
                <p className="text-brazil-green font-medium mb-4">{member.role}</p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} className="bg-white/5 text-white border-white/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-6 border-t border-white/5">
                   {member.twitter && (
                      <Button variant="outline" size="sm" className="gap-2 cursor-default hover:bg-transparent hover:text-white" onClick={(e) => e.preventDefault()}>
                         <Twitter className="h-4 w-4" /> Twitter
                      </Button>
                   )}
                   <Button variant="ghost" size="sm" className="gap-2 cursor-default hover:bg-transparent hover:text-white">
                      <Globe className="h-4 w-4" /> Website
                   </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
