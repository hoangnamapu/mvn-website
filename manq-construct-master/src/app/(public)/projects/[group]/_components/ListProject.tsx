'use client';

import { ProjectFieldsType, ProjectGroupField } from '@/types/contentful';
import { motion } from 'framer-motion';
import {
  Building,
  ChevronRight,
  FolderOpen,
  Home,
  Loader2,
  ShoppingBag,
  Warehouse,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type ListProjectProps = {
  projects: ProjectFieldsType[];
  group: string;
};

const groupIcons = {
  [ProjectGroupField.TENANT_IMPROVEMENT]: Building,
  [ProjectGroupField.CUSTOM]: Home,
  [ProjectGroupField.SHOPPING_CENTER]: ShoppingBag,
  [ProjectGroupField.SELF_STORAGE]: Warehouse,
  [ProjectGroupField.PREFAB_MODULAR_HOME]: Warehouse,
};

export default function ListProject({ group, projects }: ListProjectProps) {
  const [isLoading, setIsLoading] = useState(true);

  const convertToTitleCase = (text: string): string => {
    if (typeof text !== 'string' || text.trim() === '') {
      throw new Error('Input must be a non-empty string');
    }

    return text
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const GroupIcon = groupIcons[group as ProjectGroupField];

  const getGridClass = (projectCount: number) => {
    switch (projectCount) {
      case 1:
        return 'grid-cols-1 place-items-center';
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      default:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className='h-full w-full bg-[#F5F0E1]'>
      <div className='container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='w-full'
        >
          <motion.div
            variants={itemVariants}
            className='mb-12 flex flex-col items-center justify-center space-y-4'
          >
            <div className='flex items-center space-x-4'>
              <GroupIcon className='h-12 w-12 text-[#92400E]' />
              <h2 className='text-center  text-4xl font-bold text-[#4A3728]'>
                {convertToTitleCase(group.replace('-', ' '))} Projects
              </h2>
            </div>
          </motion.div>
          {projects.length <= 0 ? (
            <motion.div
              variants={itemVariants}
              className='flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-8 shadow-lg'
            >
              <FolderOpen className='h-16 w-16 text-[#92400E]' />
              <h3 className='text-2xl font-semibold text-[#4A3728]'>No Projects Found</h3>
              <p className='text-center text-lg text-[#4A3728]'>
                We couldn't find any projects in the {convertToTitleCase(group.replace('-', ' '))}{' '}
                category.
              </p>
              <p className='text-center text-[#4A3728]'>
                Check back later or explore our other project categories.
              </p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              className={`grid gap-8 ${getGridClass(projects.length)}`}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className={`w-full ${projects.length === 1 ? 'max-w-md' : ''}`}
                >
                  <Link
                    href={`/projects/${group}/${project.slug || ''}`}
                    className='group relative block aspect-[4/3] overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl'
                  >
                    {isLoading && (
                      <div className='absolute inset-0 flex items-center justify-center bg-gray-200'>
                        <Loader2 className='h-8 w-8 animate-spin text-[#92400E]' />
                      </div>
                    )}
                    <Image
                      src={project.images[0].url}
                      alt={project.images[0].description || ''}
                      fill
                      className='object-cover transition-transform duration-300 group-hover:scale-105'
                      onLoad={() => setIsLoading(false)}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100' />
                    <div className='absolute bottom-0 left-0 right-0 p-6'>
                      <h3 className='text-xl font-semibold text-white transition-transform duration-300 group-hover:translate-y-[-4px]'>
                        {project.title}
                      </h3>
                      <div className='mt-2 flex items-center text-sm text-white/90 transition-all duration-300 group-hover:text-white'>
                        <span>View Project</span>
                        <ChevronRight className='ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
