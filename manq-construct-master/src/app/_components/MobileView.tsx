import React from 'react';
import { Section } from '../page';
import ContentSection from './ContentSection';
import HeroSection from './HeroSection';
import ProjectCarousel from './ProjectCarousel';

type MobileViewProps = {
  sections: Section[];
  isMobile: boolean;
  scrollToProjects: () => void;
};

const MobileView = ({ sections, isMobile, scrollToProjects }: MobileViewProps) => {
  return (
    <div className='flex min-h-screen flex-col overflow-hidden bg-white'>
      {sections
        .filter((section) => !section.isProjectsSlide)
        .map((section) => (
          <React.Fragment key={section.id}>
            {section.isHero ? (
              <HeroSection
                section={section}
                isMobile={isMobile}
                scrollToProjects={scrollToProjects}
              />
            ) : (
              <ContentSection section={section} isMobile={isMobile} />
            )}
          </React.Fragment>
        ))}
      <ProjectCarousel />
    </div>
  );
};

export default MobileView;
