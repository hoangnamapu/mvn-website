import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '../page';

type HeroSectionProps = {
  section: Section;
  isMobile: boolean;
  scrollToProjects: () => void;
};

export default function HeroSection({ section, isMobile, scrollToProjects }: HeroSectionProps) {
  if (isMobile)
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className='mx-auto h-full w-full bg-[#F5F0E1]/95'
      >
        {section.imageUrl && (
          <div className='relative h-[300px] w-full'>
            <Image
              src={section.imageUrl}
              alt={section.description || ''}
              fill
              sizes='(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw'
              quality={85}
              className='object-cover'
            />
          </div>
        )}
        <div className='mx-auto flex flex-col justify-center px-12 py-8'>
          <div className='mx-auto max-w-xl'>
            <h3 className=' text-xl text-[#4A3728] md:text-2xl'>{section?.headline}</h3>
            <h2 className='mt-2  text-3xl font-bold text-[#4A3728] md:text-4xl'>
              {section.title}
            </h2>
            <p className='my-6 text-lg font-medium text-[#4A3728]'>{section.subtitle}</p>
            {section.description && (
              <p className='text-base leading-relaxed text-[#4A3728]'>{section.description}</p>
            )}
            <Button className='mx-auto mt-4 w-fit px-3 py-5 flex justify-center' onClick={scrollToProjects}>
              VIEW PROJECTS
            </Button>
          </div>
        </div>
      </motion.div>
    );

  return (
    <div className='absolute inset-0 flex flex-col items-start justify-center px-8 md:px-16 lg:px-24'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className='w-full text-left'
      >
        <h1 className='mb-6  text-5xl font-bold text-white md:text-6xl lg:text-7xl'>
            <p className='font-commercial_script tracking-wider text-6xl'>
              Renaissancing
            </p>
            <p>Building Design <br /> <span className='ml-20'>& Development</span></p>
        </h1>
        <p className='mb-8 text-lg font-medium text-white/90 md:text-xl'>{section.subtitle}</p>
        <Button
          variant='outline'
          className='bg-transparent px-3 py-5 text-white'
          onClick={scrollToProjects}
        >
          VIEW PROJECTS
        </Button>
      </motion.div>
    </div>
  );
}
