import { Metadata } from 'next';
import { cachedFetchBlogs } from '@/app/actions/fetchBlogs';
import BlogList from './_components/BlogList';

export const metadata: Metadata = {
  title: 'Blog | MAQ Construction',
  description:
    'Explore our blog for the latest news, insights, and updates in the construction industry.',
  openGraph: {
    title: 'Blog | MAQ Construction',
    description:
      'Explore our blog for the latest news, insights, and updates in the construction industry.',
    siteName: 'MAQ Construction',
    type: 'website',
  },
  alternates: {
    canonical: 'https://maqconstruct.com/blog',
  },
};

export default async function BlogPage() {
  const { posts, error } = await cachedFetchBlogs();

  if (error) {
    throw new Error(error);
  }

  return <BlogList posts={posts} />;
}
