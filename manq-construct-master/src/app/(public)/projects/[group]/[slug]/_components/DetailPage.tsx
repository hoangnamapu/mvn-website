'use client';

import { ProjectFieldsType } from '@/types/contentful';
import { motion } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { ProjectGallery } from './ProjectGallery';

type DetailPageProps = {
  project: ProjectFieldsType;
};

export default function DetailPage({ project }: DetailPageProps) {
  return (
    <ReactLenis root>
      <div className='relative h-full'>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='z-10 flex h-auto w-full flex-col items-center justify-center overflow-auto bg-gradient-to-b from-[#713F12] to-[#1a1a1a] pb-16 text-white'
        >
          <div className='absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
          <div className='flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center'>
            <h1 className='px-4 text-center  text-4xl font-bold leading-tight tracking-tight md:max-w-3xl md:text-5xl lg:max-w-4xl lg:text-6xl xl:text-7xl'>
              {project.title}
            </h1>
            {project.description && (
              <p className='mt-4 max-w-2xl px-4 text-center  text-lg text-[#F5F0E1]/70 md:text-xl'>
                {project.description}
              </p>
            )}
          </div>
          <ProjectGallery project={project} />
        </motion.section>
      </div>
    </ReactLenis>
  );
}
