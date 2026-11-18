'use server';

import { contentfulClient } from '@/lib/contentful';
import { ProjectFieldsResponseType, ProjectFieldsType } from '@/types/contentful';
import { cache } from 'react';

export async function fetchProjects(): Promise<{
  projects: ProjectFieldsType[] | null;
  error: string | null;
}> {
  try {
    const response = await contentfulClient.fetchContent<ProjectFieldsResponseType>('project');

    const projects = response.map((r) => ({
      ...r.fields,
      images: r.fields.images.map((image) => ({
        url: image.fields.file.url.startsWith('//')
          ? 'https:' + image.fields.file.url
          : image.fields.file.url,
        description: image.fields.description || null,
      })),
      group: r.fields.group.fields,
    }));

    return { projects, error: null };
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { projects: null, error: 'Failed to fetch projects' };
  }
}

export const cachedFetchProjects = cache(
  async (): Promise<{ projects: ProjectFieldsType[] | null; error: string | null }> => {
    return fetchProjects();
  },
);
