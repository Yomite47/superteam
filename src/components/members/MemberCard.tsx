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
        className="cursor-pointer h-full relative overflow-hidden group border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
        onClick={onClick}
      >
        {/* Core Team Glow */}
        {member.isCoreTeam && (
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-brazil-yellow/10 blur-2xl rounded-full pointer-events-none" />
        )}

        <div className="flex items-start justify-between mb-6">
          <div className="relative">
             <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-sm flex items-center justify-center text-2xl font-bold text-gray-700">
               {member.name.charAt(0)}
             </div>
             {member.isCoreTeam && (
               <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-brazil-green rounded-full border-2 border-white shadow-sm" />
             )}
          </div>
          {member.twitter && (
            <div
              className="text-gray-400 p-2 rounded-full cursor-default hover:text-brazil-blue transition-colors"
              title="Mockup profile"
            >
              <Twitter className="h-5 w-5" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold truncate pr-2 text-gray-900 group-hover:text-brazil-green transition-colors duration-300">
          {member.name}
        </h3>
        <p className="text-sm text-gray-500 mb-4 truncate font-medium">
          {member.role}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-gray-100">
          {member.skills.slice(0, 3).map((skill) => (
            <Badge 
              key={skill} 
              variant="outline" 
              className="text-[10px] py-0.5 px-2 bg-gray-50 border-gray-200 text-gray-600 group-hover:border-brazil-green/30 group-hover:text-gray-900 transition-colors"
            >
              {skill}
            </Badge>
          ))}
          {member.skills.length > 3 && (
             <Badge variant="outline" className="text-[10px] py-0.5 px-2 bg-gray-50 border-gray-200 text-gray-500">
              +{member.skills.length - 3}
            </Badge>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
