'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function DesignBuild() {
  const steps = [
    'Initial Consultation',
    'Conceptual Design',
    'Design Development',
    'Construction Planning',
    'Construction',
    'Project Completion',
  ];

  const benefits = [
    'Single point of responsibility',
    'Streamlined project delivery',
    'Improved communication and collaboration',
    'Potential for cost savings and faster project completion',
  ];

  return (
    <div className='h-full bg-[#F5F0E1] px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 text-center  text-4xl font-bold text-[#4A3728]'
        >
          Design-Build
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Design-build is a project delivery method in which the owner contracts directly with one
          entity to provide both the design and construction of the project.
        </motion.p>

        <div className='grid gap-12 md:grid-cols-2'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='rounded-lg bg-white p-6 shadow-lg'
          >
            <h2 className='mb-6  text-2xl font-semibold text-[#4A3728]'>
              Our Design-Build Process
            </h2>
            <ol className='space-y-4'>
              {steps.map((step, index) => (
                <li key={index} className='flex items-center'>
                  <div className='mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 text-white'>
                    {index + 1}
                  </div>
                  <span className='text-[#4A3728]'>{step}</span>
                </li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='rounded-lg bg-[#4A3728] p-6 text-white shadow-lg'
          >
            <h2 className='mb-6  text-2xl font-semibold'>Key Benefits</h2>
            <ul className='space-y-4'>
              {benefits.map((benefit, index) => (
                <li key={index} className='flex items-start'>
                  <CheckCircle className='mr-2 mt-1 h-6 w-6 flex-shrink-0 text-yellow-600' />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
