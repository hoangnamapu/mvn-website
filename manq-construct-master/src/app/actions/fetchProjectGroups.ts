'use server';

import { contentfulClient } from '@/lib/contentful';
import { ProjectGroupFieldsType } from '@/types/contentful';
import { cache } from 'react';

export async function fetchProjectGroups(): Promise<{
  projectGroups: ProjectGroupFieldsType[] | null;
  error: string | null;
}> {
  try {
    const response = await contentfulClient.fetchContent<ProjectGroupFieldsType>('projectGroup');
    const projectGroups = response.map((r) => r.fields);
    return { projectGroups, error: null };
  } catch (error) {
    console.error('Error fetching project groups:', error);
    return { projectGroups: null, error: 'Failed to fetch project groups' };
  }
}

export const cachedFetchProjectGroups = cache(
  async (): Promise<{ projectGroups: ProjectGroupFieldsType[] | null; error: string | null }> => {
    return fetchProjectGroups();
  },
);
