/* eslint-disable */

'use client';

import { motion } from 'framer-motion';
import { Users, Truck, Clock, Building, Cog, CheckCircle } from 'lucide-react';

export default function PreFabrication() {
  const features = [
    {
      icon: Users,
      title: 'Dedicated Team',
      description:
        'Our turn-key design & fabrication team includes architects, engineers, detailers, and fabricators.',
    },
    {
      icon: Building,
      title: 'Overseas Manufacturing',
      description:
        'We leverage overseas manufacturers to provide cost-effective pre-fab construction solutions.',
    },
    {
      icon: Cog,
      title: 'Efficient Procurement',
      description:
        'Our methodology ensures efficient procurement and timely delivery to the job site.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description:
        'Pre-fabrication significantly reduces on-site construction time and labor costs.',
    },
    {
      icon: Truck,
      title: 'Punctual Delivery',
      description:
        'We ensure that pre-fabricated components are delivered to the job site exactly when needed.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Control',
      description:
        'Our process allows for stringent quality control in a controlled manufacturing environment.',
    },
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
          Pre-fabrication Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          We have a dedicated turn-key design & fabrication team of architects, engineers,
          detailers, fabricators that provide pre-fab construction from overseas manufacturers with
          efficient procurement methodology to ensure punctual delivery to the job site.
        </motion.p>

        <div className='grid gap-8 md:grid-cols-2'>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className='space-y-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl'
            >
              <div className='flex items-center space-x-4'>
                <div className='rounded-full bg-yellow-100 p-3'>
                  <feature.icon className='h-6 w-6 text-yellow-600' />
                </div>
                <h2 className=' text-xl font-semibold text-[#4A3728]'>{feature.title}</h2>
              </div>
              <p className='leading-relaxed text-[#4A3728]'>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className='mt-12 rounded-lg bg-[#4A3728] p-6 text-white shadow-lg'
        >
          <h3 className='mb-4 text-xl font-semibold'>Why Choose Our Pre-fabrication Services?</h3>
          <p className='text-lg leading-relaxed'>
            Our pre-fabrication services offer a perfect blend of quality, efficiency, and
            cost-effectiveness. By leveraging our global network of manufacturers and our expert
            team's knowledge, we deliver superior pre-fab solutions that streamline your
            construction process, reduce on-site labor, and ensure consistent quality. Choose us for
            a smoother, faster, and more reliable construction experience.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
