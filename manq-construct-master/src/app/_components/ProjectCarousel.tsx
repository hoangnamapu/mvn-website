'use client';

import { cachedFetchProjects } from '@/app/actions/fetchProjects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ProjectFieldsType } from '@/types/contentful';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectCarousel() {
  const [projects, setProjects] = useState<ProjectFieldsType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { projects, error } = await cachedFetchProjects();
        if (error) {
          throw new Error(error);
        }
        if (projects) {
          setProjects(projects);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      }
    };

    getProjects();
  }, []);

  if (error) {
    return <div className='text-center text-red-600'>Error loading projects: {error}</div>;
  }

  return (
    <div id='projects' className='bg-[#F5F0E1]/95 px-6 pb-16'>
      <h2 className='mb-8 text-center  text-3xl font-bold text-[#4A3728]'>
        What We Build
      </h2>
      <Carousel className='mx-auto w-full max-w-md'>
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.slug}>
              <Link
                href={`/projects/${project.group.key}/${project.slug}`}
                className='relative block aspect-[4/3] overflow-hidden rounded-lg bg-gray-100'
              >
                <Image
                  src={project.images[0].url}
                  alt={project.images[0].description || project.title}
                  fill
                  className='object-cover'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
                <div className='absolute bottom-0 left-0 right-0 p-4'>
                  <h3 className='text-lg font-medium text-white'>{project.title}</h3>
                  <div className='mt-1 flex items-center text-sm text-white/75'>
                    <span>View Detail</span>
                    <ChevronRight className='ml-1 h-4 w-4' />
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='-left-6' />
        <CarouselNext className='-right-6' />
      </Carousel>
    </div>
  );
}
