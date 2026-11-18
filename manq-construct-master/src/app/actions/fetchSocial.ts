'use server';

import { contentfulClient } from '@/lib/contentful';
import { SocialFieldsType } from '@/types/contentful';
import { cache } from 'react';

export async function fetchSocial(): Promise<{
  social: SocialFieldsType[] | null;
  error: string | null;
}> {
  try {
    const response = await contentfulClient.fetchContent<SocialFieldsType>('social');
    const social = response.map((r) => r.fields);
    return { social, error: null };
  } catch (error) {
    console.error('Error fetching social data:', error);
    return { social: null, error: 'Failed to fetch social data' };
  }
}

export const cachedFetchSocial = cache(
  async (): Promise<{ social: SocialFieldsType[] | null; error: string | null }> => {
    return fetchSocial();
  },
);
