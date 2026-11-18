'use client';

import { useAnimation, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Section } from '../page';
import DesktopView from './DesktopView';
import MobileView from './MobileView';

interface ClientHomePageProps {
  sections: Section[];
}

export default function ClientHomePage({ sections }: ClientHomePageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      const scrollPosition = nextIndex * window.innerWidth;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      const scrollPosition = prevIndex * window.innerWidth;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    if (isMobile) {
      const projectsElement = document.getElementById('projects');
      if (projectsElement) {
        projectsElement.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const projectsSlideIndex = sections.findIndex((section) => section.isProjectsSlide);
    if (projectsSlideIndex !== -1) {
      const scrollPosition = projectsSlideIndex * window.innerWidth;
      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
      setCurrentIndex(projectsSlideIndex);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (containerRef.current && !isMobile) {
      const containerHeight =
        containerRef.current.scrollWidth - window.innerWidth + window.innerHeight;

      const style = document.createElement('style');
      style.textContent = `
        .homepage-body {
          height: ${containerHeight}px !important;
          overflow-y: auto;
        }
      `;
      document.head.appendChild(style);

      document.body.classList.add('homepage-body');

      return () => {
        document.head.removeChild(style);
        document.body.classList.remove('homepage-body');
      };
    }
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const totalWidth = containerRef.current.scrollWidth - window.innerWidth;
      const newX = -scrollPercentage * totalWidth;

      x.set(newX);
      controls.set({ x: newX });

      const sectionWidth = window.innerWidth;
      const newSection = Math.round(-newX / sectionWidth);
      setCurrentIndex(newSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, x, isMobile]);

  if (isMobile) {
    return (
      <MobileView sections={sections} scrollToProjects={scrollToProjects} isMobile={isMobile} />
    );
  }

  return (
    <DesktopView
      x={x}
      sections={sections}
      isMobile={isMobile}
      containerRef={containerRef}
      controls={controls}
      currentIndex={currentIndex}
      scrollToProjects={scrollToProjects}
      handleNext={handleNext}
      handlePrev={handlePrev}
    />
  );
}
