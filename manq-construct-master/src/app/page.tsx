'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const ClientHomePage = dynamic(() => import('./_components/ClientHomePage'), {
  ssr: false,
});

export interface Section {
  id: string;
  imageUrl?: string;
  description?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  customBackground?: boolean;
  isHero?: boolean;
  headline?: string;
  alt?: string;
  isProjectsSlide?: boolean;
}

const sections: Section[] = [
  {
    id: 'slide1',
    imageUrl: '/homepage.webp?height=1080&width=1920',
    title: (
      <div>
        <p className='font-commercial_script tracking-wider text-4xl'>
          Renaissancing
        </p>
        <p>Building</p>
        <p className='ml-4 md:ml-20'>Design & Development</p>
      </div>
    ),
    subtitle:
      'A DESIGN-BUILD CONTRACTOR WHO CARES',
    customBackground: false,
    isHero: true,
  },
  {
    id: 'slide2',
    imageUrl: '/homepage.webp?height=1080&width=1920',
    title: 'Our Core Values',
    subtitle: (
      <div className='text-center'>
        <p>Integrity</p>
        <p>Knowledge & Acute Understanding</p>
        <p>Balancing</p>
        <p>Forward Thinking</p>
      </div>
    ),
  },
  {
    id: 'slide3',
    imageUrl: '/homepage.webp?height=1080&width=1920',
    title: 'Integrity',
    subtitle:
      'We conduct all business with the highest standards of fairness and virtuousness. We value our trusted relationship with our clients',
  },
  {
    id: 'slide4',
    imageUrl: '/homepage.webp?height=1080&width=1920',
    title: 'Knowledge & Acute Understanding',
    subtitle:
      'We seek to gain knowledge, application, and implementation of building design & construction. We learn by doing.',
  },
  {
    id: 'slid5',
    imageUrl: '/homepage.webp?height=1080&width=1920',
    title: 'Balancing',
    subtitle:
      'We believe in harmonious and sustainable building. From conceptual design to budgeting to construction, the art of balancing is essential to ensure project success',
  },
  {
    id: 'slide6',
    imageUrl: '/homepage.webp?height=1080&width=1920',
    title: 'Forward Thinking',
    subtitle:
      'We believe in continual learning, self-improvement, and innovation',
  },
  {
    id: 'slide7',
    title: 'What We Design',
    isProjectsSlide: true,
    customBackground: true,
  },
];

export default function HomePage() {
  return <ClientHomePage sections={sections} />;
}
