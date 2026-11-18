'use server';

import { cache } from 'react';
import { contentfulClient } from '@/lib/contentful';
import { BlogPostFieldsType } from '@/types/contentful';

export async function fetchBlogs(slug?: string): Promise<{
  posts: BlogPostFieldsType[] | null;
  error: string | null;
}> {
  try {
    const query: Record<string, unknown> = {
      content_type: 'blog',
      include: 2,
    };

    if (slug) {
      query['fields.slug'] = slug;
    }

    const response = await contentfulClient.fetchContent<BlogPostFieldsType>('blog', query);

    const posts = response.map((item) => item.fields);

    return { posts, error: null };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: null, error: 'Failed to fetch blog posts' };
  }
}

export const cachedFetchBlogs = cache(fetchBlogs);
