'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Twitter } from 'lucide-react';
import { Member } from '@/data/members';

interface MemberCardProps {
  member: Member;
  onClick: () => void;
}

export function MemberCard({ member, onClick }: MemberCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <Card
        hoverEffect
        className="cursor-pointer h-full relative overflow-hidden group border-white/5 bg-card-bg/50 backdrop-blur-sm"
        onClick={onClick}
      >
        {/* Core Team Glow */}
        {member.isCoreTeam && (
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-brazil-yellow/20 blur-2xl rounded-full pointer-events-none" />
        )}

        <div className="flex items-start justify-between mb-6">
          <div className="relative">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 shadow-lg flex items-center justify-center text-2xl font-bold text-gray-700">
               {member.name.charAt(0)}
             </div>
             {member.isCoreTeam && (
               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brazil-green rounded-full border-2 border-card-bg shadow-[0_0_10px_rgba(0,230,118,0.5)]" />
             )}
          </div>
          {member.twitter && (
            <div
              className="text-gray-600 p-2 rounded-full cursor-default opacity-70"
              title="Mockup profile"
            >
              <Twitter className="h-5 w-5" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold truncate pr-2 group-hover:text-brazil-green transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-gray-400 mb-4 truncate font-medium">
          {member.role}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-white/5">
          {member.skills.slice(0, 3).map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="text-[10px] py-0.5 px-2 bg-white/5 border-white/5 text-gray-400 group-hover:border-brazil-green/20 group-hover:text-gray-300 transition-colors"
            >
              {skill}
            </Badge>
          ))}
          {member.skills.length > 3 && (
             <Badge variant="outline" className="text-[10px] py-0.5 px-2 bg-white/5 border-white/5 text-gray-500">
              +{member.skills.length - 3}
            </Badge>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
