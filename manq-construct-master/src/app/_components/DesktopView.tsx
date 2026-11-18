import { motion, MotionValue } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import ContentSection from './ContentSection';
import HeroSection from './HeroSection';
import ProjectListSection from './ProjectListSection';
import { LegacyRef } from 'react';
import { Section } from '../page';

type DesktopViewProps = {
  x: MotionValue<number>;
  currentIndex: number;
  //eslint-disable-next-line
  controls: any;
  containerRef: LegacyRef<HTMLDivElement> | undefined;
  isMobile: boolean;
  scrollToProjects: () => void;
  handlePrev: () => void;
  handleNext: () => void;
  sections: Section[];
};

const DesktopView = ({
  sections,
  x,
  isMobile,
  containerRef,
  currentIndex,
  controls,
  scrollToProjects,
  handlePrev,
  handleNext,
}: DesktopViewProps) => {
  return (
    <div className='fixed inset-0 top-20 h-[calc(100vh-5rem)] overflow-hidden'>
      <motion.div
        ref={containerRef}
        className='flex h-full items-start'
        style={{ x }}
        animate={controls}
      >
        {sections.map((section, index) => (
          <div key={section.id} id={section.id} className='relative h-full w-screen flex-shrink-0'>
            {section.imageUrl && (
              <Image
                src={section.imageUrl}
                alt={section.description || ''}
                fill
                quality={100}
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            )}
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-transparent' />

            {section.isHero ? (
              <HeroSection
                section={section}
                isMobile={isMobile}
                scrollToProjects={scrollToProjects}
              />
            ) : section.isProjectsSlide ? (
              <ProjectListSection section={section} />
            ) : (
              <ContentSection section={section} isMobile={isMobile} />
            )}
          </div>
        ))}
      </motion.div>

      <div className='pointer-events-none absolute inset-0 flex items-stretch justify-between'>
        <button
          onClick={handlePrev}
          className={`group pointer-events-auto flex w-24 items-center justify-center bg-gradient-to-r from-black/20 to-transparent transition-opacity hover:from-black/40 ${
            currentIndex === 0 ? 'invisible' : ''
          }`}
          aria-label='Previous slide'
        >
          <ChevronLeft className='h-6 w-6 text-white transition-transform group-hover:-translate-x-0.5' />
        </button>
        <button
          onClick={handleNext}
          className={`group pointer-events-auto flex w-24 items-center justify-center bg-gradient-to-l from-black/20 to-transparent transition-opacity hover:from-black/40 ${
            currentIndex === sections.length - 1 ? 'invisible' : ''
          }`}
          aria-label='Next slide'
        >
          <ChevronRight className='h-6 w-6 text-white transition-transform group-hover:translate-x-0.5' />
        </button>
      </div>
    </div>
  );
};

export default DesktopView;
