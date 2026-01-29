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
              className="bg-white border border-gray-200 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl pointer-events-auto"
            >
              <div className="relative h-32 bg-gradient-brazil opacity-20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full text-gray-900 transition-colors shadow-sm"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="px-8 pb-8 -mt-16">
                <div className="w-32 h-32 rounded-full bg-white border-4 border-white flex items-center justify-center mb-6 shadow-md">
                   <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-100 to-gray-200" />
                </div>
                
                <h2 className="text-2xl font-bold mb-1 text-gray-900">{member.name}</h2>
                <p className="text-brazil-green font-medium mb-4">{member.role}</p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Badge key={skill} className="bg-gray-100 text-gray-700 border-gray-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-6 border-t border-gray-100">
                   {member.twitter && (
                      <Button variant="outline" size="sm" className="gap-2 cursor-default hover:bg-gray-50 hover:text-brazil-blue" onClick={(e) => e.preventDefault()}>
                         <Twitter className="h-4 w-4" /> Twitter
                      </Button>
                   )}
                   <Button variant="ghost" size="sm" className="gap-2 cursor-default hover:bg-gray-50 hover:text-brazil-green">
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
