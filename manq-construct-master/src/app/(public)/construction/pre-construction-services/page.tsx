'use client';

import { motion } from 'framer-motion';
import {
  DollarSign,
  BarChart2,
  Target,
  TrendingUp,
  FileText,
  Layers,
  Sliders,
  CheckSquare,
  ShoppingCart,
  Users,
  HardHat,
  ClipboardCheck,
  Calendar,
  UserCheck,
  Package,
  Box,
  Cpu,
} from 'lucide-react';

export default function PreConstructionServices() {
  const services = [
    { name: 'Cost Modeling', icon: DollarSign },
    { name: 'Model Based Estimating', icon: BarChart2 },
    { name: 'Target Value Design', icon: Target },
    { name: 'Cost Control', icon: TrendingUp },
    { name: 'Cost Estimating', icon: FileText },
    { name: 'Design Integration / Management', icon: Layers },
    { name: 'Optioneering', icon: Sliders },
    { name: 'Value Driven Decision Making', icon: CheckSquare },
    { name: 'Bidding and Procurement', icon: ShoppingCart },
    { name: 'Subcontracting', icon: Users },
    { name: 'Design Build & Design Assist', icon: HardHat },
    { name: 'Constructability Reviews', icon: ClipboardCheck },
    { name: 'Scheduling', icon: Calendar },
    { name: 'Subcontractor Selection', icon: UserCheck },
    { name: 'Material Procurement', icon: Package },
    { name: 'Prefabrication Solutions', icon: Box },
    { name: 'Virtual Modeling and Coordination', icon: Cpu },
  ];

  const benefits = [
    'Improved project planning and risk mitigation',
    'More accurate cost estimations and budgeting',
    'Optimized design and construction processes',
    'Enhanced collaboration between all project stakeholders',
    'Increased efficiency and reduced delays during construction',
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
          Pre-Construction Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Our comprehensive pre-construction services are designed to set your project up for
          success from the very beginning. We offer a wide range of expertise to ensure your project
          is well-planned, cost-effective, and efficiently executed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mb-12 rounded-lg bg-white p-8 shadow-lg'
        >
          <h2 className='mb-6  text-2xl font-semibold text-[#4A3728]'>
            Our Pre-Construction Services Include:
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className='flex items-center space-x-3'
              >
                <div className='rounded-full bg-yellow-100 p-2'>
                  <service.icon className='h-6 w-6 text-yellow-600' />
                </div>
                <span className='text-[#4A3728]'>{service.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='rounded-lg bg-[#4A3728] p-8 text-white shadow-lg'
        >
          <h2 className='mb-6  text-2xl font-semibold'>
            Benefits of Our Pre-Construction Services:
          </h2>
          <ul className='space-y-4'>
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className='flex items-start'
              >
                <CheckSquare className='mr-3 mt-1 h-6 w-6 flex-shrink-0 text-yellow-600' />
                <span>{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='mx-auto mt-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Our team of experts works closely with you to understand your project goals and
          challenges, providing tailored solutions that align with your vision and budget. From
          initial cost modeling to virtual coordination, we ensure that every aspect of your project
          is thoroughly planned and optimized before construction begins.
        </motion.p>
      </div>
    </div>
  );
}
