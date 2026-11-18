'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Leader } from '@/constants/data';

type LeaderDetailPageProps = {
  leader: Leader;
};

type Section = {
  id: string;
  title: string;
  items: string[];
};

export default function LeaderDetailPage({ leader }: LeaderDetailPageProps) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections: Section[] = [
    {
      id: 'education',
      title: 'Education',
      items: leader.education,
    },
    {
      id: 'licenses',
      title: 'Professional License',
      items: leader.licenses,
    },
    {
      id: 'awards',
      title: 'Awards',
      items: leader.awards,
    },
    {
      id: 'activities',
      title: 'Professional Activities',
      items: leader.activities,
    },
  ];

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <div className='min-h-screen bg-[#F5F0E1]'>
      <div className='bg-gray-100 py-8'>
        <div className='container mx-auto px-4'>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl font-bold text-[#4A3728] lg:text-5xl'
          >
            {leader.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='mt-2 text-xl text-[#92400E]'
          >
            {leader.title}
          </motion.p>
        </div>
      </div>

      <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-12 lg:grid-cols-3'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='relative mb-8 h-[400px] w-full overflow-hidden rounded-lg lg:h-[500px]'>
              <Image
                src={leader.image.url}
                alt={leader.image.alt}
                fill
                className='object-contain'
                priority
                quality={100}
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='prose max-w-none text-[#4A3728]'>
              <p className='text-lg leading-relaxed'>{leader.bio}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='space-y-4'
          >
            {sections.map(
              (section) =>
                section.items &&
                section.items.length > 0 && (
                  <div
                    key={section.id}
                    className='overflow-hidden rounded-lg border border-gray-200 bg-white'
                  >
                    <button
                      onClick={() => toggleSection(section.id)}
                      className='flex w-full items-center justify-between p-4 text-left transition-colors hover:bg-gray-50'
                    >
                      <span className='text-lg font-semibold text-[#4A3728]'>{section.title}</span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#92400E] transition-transform duration-300 ${
                          activeSection === section.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: activeSection === section.id ? 'auto' : 0,
                        opacity: activeSection === section.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden'
                    >
                      <ul className='space-y-2 p-4 text-[#4A3728]'>
                        {section.items.map((item, index) => (
                          <li key={index} className='flex items-start'>
                            <span className='mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#92400E]' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                ),
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
