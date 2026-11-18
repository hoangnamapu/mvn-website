'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Pencil, HardHat, Hammer } from 'lucide-react';

export default function WhatWeDo() {
  const services = [
    {
      title: 'DESIGN SERVICES',
      icon: Pencil,
      items: [
        'Architecture & Interior Design',
        'Conceptual Design & 3D Renderings',
        'Land Planning & Feasibility Study',
        'Civil Engineering',
      ],
    },
    {
      title: 'PRE-CONSTRUCTION & CONSTRUCTION SERVICES',
      icon: HardHat,
      items: [
        'Construction Scheduling',
        'Construction Estimating',
        'Budgeting',
        'Front-End Planning',
      ],
    },
    {
      title: 'DESIGN-BUILD CONSTRUCTION SERVICES',
      icon: Hammer,
      items: ['Design-build construction', 'Value Engineering'],
    },
  ];

  return (
    <div className='h-full w-full bg-[#F5F0E1] px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-16 text-center  text-4xl font-bold text-[#4A3728]'
        >
          Our Services
        </motion.h1>

        <div className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='transform overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105'
            >
              <div className='flex items-center bg-[#4A3728] p-6 text-white'>
                <service.icon className='mr-4 h-8 w-8' />
                <h2 className=' text-xl font-semibold'>{service.title}</h2>
              </div>
              <ul className='space-y-4 p-6'>
                {service.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 }}
                    className='flex items-start'
                  >
                    <ChevronRight className='mr-2 mt-1 h-5 w-5 flex-shrink-0 text-yellow-600' />
                    <span className='text-[#4A3728]'>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mt-16 text-center'
        >
          <p className='mx-auto mb-8 max-w-3xl text-lg text-[#4A3728]'>
            Our comprehensive range of services ensures that we can handle every aspect of your
            project, from initial concept to final construction. We pride ourselves on delivering
            exceptional quality and value at every stage of the process.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
