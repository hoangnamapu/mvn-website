/* eslint-disable */
'use client';

import { motion } from 'framer-motion';
import { Clock, DollarSign, Eye, MessageCircle, Shield } from 'lucide-react';

export default function OwnersRepresentative() {
  const benefits = [
    {
      title: 'Expertise and Experience',
      description:
        "An owner's representative typically has extensive knowledge and experience in construction management. They are well-versed in the intricacies of the construction process, including planning, design, procurement, and construction methods. Their expertise allows them to make informed decisions and navigate potential challenges effectively.",
      icon: Shield,
    },
    {
      title: 'Project Oversight',
      description:
        "The owner's representative provides comprehensive oversight of the project. They monitor progress, schedules, and review project documentation to ensure compliance with specifications, regulations, and industry standards. This oversight helps to minimize delays, cost overruns, and potential conflicts.",
      icon: Eye,
    },
    {
      title: 'Cost Control',
      description:
        "One of the key roles of an owner's representative is to monitor the project budget. They work closely with the owner to establish a realistic budget, evaluate changes in the work, and identify potential cost-saving opportunities. The owner's representative helps the owner maximize their investment and avoid unnecessary expenses.",
      icon: DollarSign,
    },
    {
      title: 'Communication and Coordination',
      description:
        "Coordinating the efforts of numerous stakeholders, including architects, engineers, contractors, and subcontractors, can be challenging. The owner's representative serves as a central point of contact, facilitating effective communication and collaboration among all parties involved. This helps to streamline the decision-making process, maintain transparency, and efficiently resolve any conflicts that may arise during construction.",
      icon: MessageCircle,
    },
    {
      title: 'Time Efficiency',
      description:
        "With their expertise and experience, an owner's representative can help expedite the construction process. They are responsible for monitoring and reporting on project schedules, coordinating activities, and tracking timely completion of milestones. By closely monitoring progress and identifying potential bottlenecks, they can proactively address issues and keep the project on schedule.",
      icon: Clock,
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
          Owner's Representative Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Oversee and advise the owner throughout the design and construction process. The owner's
          representative acts as the owner's trusted advisor, representing their interests
          throughout the project. There are several benefits to having an owner's representative:
        </motion.p>

        <div className='grid gap-8 md:grid-cols-2'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className='space-y-4 rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl'
            >
              <div className='flex items-center space-x-4'>
                <div className='rounded-full bg-yellow-100 p-3'>
                  <benefit.icon className='h-6 w-6 text-yellow-600' />
                </div>
                <h2 className=' text-xl font-semibold text-[#4A3728]'>{benefit.title}</h2>
              </div>
              <p className='leading-relaxed text-[#4A3728]'>{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className='mt-12 rounded-lg bg-[#4A3728] p-6 text-white shadow-lg'
        >
          <p className='text-lg leading-relaxed'>
            Overall, an owner's representative brings a wealth of knowledge, experience, and
            objectivity to the construction process. By acting as the owner's advocate, they help
            protect the owner's interests. Their involvement can lead to a smoother, more efficient
            construction project with better outcomes for the owner.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
