'use client';

import { motion } from 'framer-motion';

export default function Component() {
  return (
    <div className='mx-auto h-full w-full bg-[#F5F0E1]'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8'
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='mb-8  text-lg tracking-widest text-yellow-600'
        >
          Letter from Founder
        </motion.h1>

        <div className='grid grid-cols-1 gap-8 text-lg md:grid-cols-2'>
          <div className='space-y-8 text-[#4A3728]'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='leading-relaxed'
            >
              Since the very young age, I was around my father&apos;s architecture and engineering
              consulting firm. He diverse portfolio varying from private-owned real estate developments such as apartment
              complexes, high-rise office buildings, hotels, to national public work including
              theater renovation, Vietnam department of education headquarter design and construction, hospital design as well as
              his own real estate planning and developments. <br />
              My appreciation for architecture, construction, and engineering has been nurtured and cultivated.
            </motion.p>
          </div>

          <div className='space-y-8 text-[#4A3728]'>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='leading-relaxed'
            >
              Life came in a full circle when I decided to pursue a career in construction
              engineering, hoping that I would continue his legacy in the USA, where I gracefully
              received world class education, studying with the best professors and professionals,
              and honing my well-rounded skills as project manager, real estate developer, and
              entrepreneur.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className='leading-relaxed'
            >
              In collaboration with team leaders, designers and design studios from all around the world, I have worked on many great projects that I very much cared for.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
