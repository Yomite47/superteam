'use client';

import { useState, useMemo, useEffect } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MemberCard } from '@/components/members/MemberCard';
import { MemberModal } from '@/components/members/MemberModal';
import { members, Member } from '@/data/members';
import { Search, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Skeleton } from '@/components/ui/Skeleton';
import { motion, AnimatePresence } from 'framer-motion';

const skills = ['All', 'Dev', 'Design', 'Content', 'Marketing', 'Community', 'AI'];

export default function MembersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'active'>('newest');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            member.role.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSkill = selectedSkill === 'All' || member.skills.includes(selectedSkill);
      return matchesSearch && matchesSkill;
    }).sort((a, b) => {
        if (sortBy === 'active') {
             return b.bio.length - a.bio.length;
        }
        return 0;
    });
  }, [searchQuery, selectedSkill, sortBy]);

  const coreTeam = filteredMembers.filter(m => m.isCoreTeam);
  const communityMembers = filteredMembers.filter(m => !m.isCoreTeam);

  // Calculate counts for filters
  const getSkillCount = (skill: string) => {
    if (skill === 'All') return members.length;
    return members.filter(m => m.skills.includes(skill)).length;
  };

  return (
    <main className="min-h-screen bg-[#FDFBF7] selection:bg-brazil-green/30">
      <Navbar />
      
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 relative">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
             <h1 className="text-5xl font-bold mb-4 tracking-tight text-gray-900">
               Community Directory
               <Sparkles className="inline-block ml-4 text-brazil-yellow w-8 h-8 animate-pulse" />
             </h1>
             <p className="text-gray-600 text-lg max-w-2xl">
               Meet the builders, creatives, and operators shaping the future of Solana in Brazil.
             </p>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-start lg:items-center justify-between sticky top-20 z-40 bg-[#FDFBF7]/95 backdrop-blur-xl py-4 border-b border-gray-200 -mx-4 px-4 lg:mx-0 lg:px-0 lg:rounded-2xl lg:border lg:p-4">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brazil-green transition-colors" />
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-10 pr-4 text-gray-900 focus:outline-none focus:border-brazil-green/50 focus:ring-1 focus:ring-brazil-green/50 transition-all placeholder:text-gray-400 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center w-full lg:w-auto">
             <div className="flex overflow-x-auto pb-2 lg:pb-0 gap-2 no-scrollbar w-full lg:w-auto">
                {skills.map(skill => {
                  const isActive = selectedSkill === skill;
                  return (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                        isActive 
                          ? 'bg-brazil-green text-white border-brazil-green shadow-lg shadow-brazil-green/20 scale-105' 
                          : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      {skill}
                      <span className={`text-[10px] py-0.5 px-1.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-500'}`}>
                        {getSkillCount(skill)}
                      </span>
                    </button>
                  );
                })}
             </div>
             
             <div className="hidden lg:block w-px h-8 bg-gray-200 mx-2" />

             <div className="relative ml-auto lg:ml-0 group w-full lg:w-auto">
                 <button className="flex items-center justify-between lg:justify-start w-full lg:w-auto space-x-2 text-sm font-medium text-gray-600 hover:text-brazil-green px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    <span>{sortBy === 'newest' ? 'Newest First' : 'Most Active'}</span>
                    <ChevronDown className="h-4 w-4" />
                 </button>
                 <div className="absolute right-0 top-full mt-2 w-full lg:w-40 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden hidden group-hover:block z-50">
                    <button 
                        onClick={() => setSortBy('newest')}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-brazil-green hover:pl-5 transition-all"
                    >
                        Newest First
                    </button>
                    <button 
                        onClick={() => setSortBy('active')}
                        className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 text-gray-700 hover:text-brazil-green hover:pl-5 transition-all"
                    >
                        Most Active
                    </button>
                 </div>
             </div>
          </div>
        </div>

        {loading ? (
           <div className="space-y-12">
              <div>
                <Skeleton className="h-8 w-48 mb-6 rounded-lg bg-gray-200" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                   {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-[280px] w-full rounded-2xl bg-gray-200" />
                   ))}
                </div>
              </div>
              <div>
                <Skeleton className="h-8 w-32 mb-6 rounded-lg bg-gray-200" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                   {[...Array(8)].map((_, i) => (
                      <Skeleton key={i} className="h-[280px] w-full rounded-2xl bg-gray-200" />
                   ))}
                </div>
              </div>
           </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Core Team */}
              {coreTeam.length > 0 && (
                <section className="mb-16">
                  <h2 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
                    <span className="w-1.5 h-8 bg-gradient-brazil mr-4 rounded-full shadow-sm"></span>
                    Core Team
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {coreTeam.map(member => (
                      <MemberCard 
                        key={member.id} 
                        member={member} 
                        onClick={() => setSelectedMember(member)} 
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Members */}
              {communityMembers.length > 0 && (
                <section>
                   <h2 className="text-2xl font-bold mb-8 text-gray-500 pl-5 border-l border-gray-200">
                     Community Members
                   </h2>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {communityMembers.map(member => (
                      <MemberCard 
                        key={member.id} 
                        member={member} 
                        onClick={() => setSelectedMember(member)} 
                      />
                    ))}
                  </div>
                </section>
              )}
              
              {filteredMembers.length === 0 && (
                  <div className="text-center py-32 border border-dashed border-white/10 rounded-3xl bg-white/5">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-8 w-8 text-gray-500" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">No members found</h3>
                      <p className="text-gray-500 mb-6 max-w-md mx-auto">
                        We couldn't find anyone matching "{searchQuery}" with the selected filters.
                      </p>
                      <Button 
                          variant="outline" 
                          onClick={() => {setSearchQuery(''); setSelectedSkill('All');}}
                      >
                          Clear Filters
                      </Button>
                  </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

      </div>
      
      <Footer />
      <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
    </main>
  );
}
