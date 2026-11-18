'use client';

import { ProjectFieldsType } from '@/types/contentful';
import { ChevronRight, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cachedFetchProjects } from '../actions/fetchProjects';
import Loading from '../loading';
import { Section } from '../page';

type ContentSectionProps = {
  section: Section;
};

export default function ProjectListSection({ section }: ContentSectionProps) {
  const [projects, setProjects] = useState<ProjectFieldsType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true)
        const { projects, error } = await cachedFetchProjects();
        if (error) {
          throw new Error(error);
        }
        if (projects) {
          setProjects(projects.slice(0, 6)); // Limit to 6 projects
          setLoading(false)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        setLoading(false)
      }
    };

    getProjects();
  }, []);

  const getGridClass = (projectCount: number) => {
    switch (projectCount) {
      case 1:
        return 'grid-cols-1 place-items-center';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  if (error) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='rounded-lg bg-red-100 p-6 text-center text-red-600'>
          <h2 className='mb-2 text-2xl font-bold'>Error loading projects</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading/>
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center px-8 py-10 2xl:py-16 md:px-16 lg:px-24 ${section.customBackground ? 'bg-[#F5F0E1]/95' : ''
        }`}
    >
      <div className='w-full max-w-7xl flex flex-col h-full'>
        <h2 className='mb-10 2xl:mb-16 text-center  text-4xl font-bold text-[#4A3728]'>
          {section.title}
        </h2>
        {projects.length === 0 ? (
          <div className='flex flex-col items-center justify-center space-y-4 rounded-lg bg-white p-8 text-center'>
            <FolderOpen className='h-16 w-16 text-[#92400E]' />
            <h3 className='text-2xl font-semibold text-[#4A3728]'>No Projects Found</h3>
            <p className='text-lg text-[#4A3728]'>
              We haven't added any projects yet. Check back soon for updates!
            </p>
          </div>
        ) : (
          <div className={`grid flex-1 h-full gap-4 ${getGridClass(projects.length)}`}>
            {projects.map((project) => {
              return (
                <Link
                  key={project.title}
                  href={`projects/${project.group.key || ''}/${project.slug || ''}`}
                  className={`group relative overflow-hidden rounded-lg bg-gray-100 ${projects.length === 1 ? 'w-full max-w-2xl' : 'w-full'
                    }`}
                >
                  <Image
                    src={project.images[0].url}
                    alt={project.images[0].description || project.title}
                    fill
                    className='object-cover transition group-hover:scale-105'
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
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
}
