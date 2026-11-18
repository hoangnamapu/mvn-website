'use client';

import { Leader } from '@/constants/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type LeadershipPageProps = {
  leaders: Leader[];
};

export default function LeadershipPage({ leaders }: LeadershipPageProps) {
  return (
    <div className='h-full bg-[#F5F0E1] px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 text-center text-4xl font-bold text-[#4A3728]'
        >
          Leadership
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Meet our experienced leadership team driving innovation and excellence in construction.
        </motion.p>

        <div className={`${leaders.length === 1 ? 'w-full flex justify-center': 'grid gap-8 md:grid-cols-2 lg:grid-cols-3'}`}>
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105 max-w-[400px] flex-1'
            >
              <Link href={`/company/leadership/${leader.slug}`}>
                <div className='relative h-64 w-full'>
                 <Image
                    src={leader.image.url}
                    alt={leader.image.alt}
                    fill
                    className='object-contain'
                  />
                </div>
                <div className='p-6'>
                  <h2 className='mb-2 text-xl font-semibold text-[#4A3728]'>{leader.name}</h2>
                  <p className='text-[#92400E]'>{leader.title}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

