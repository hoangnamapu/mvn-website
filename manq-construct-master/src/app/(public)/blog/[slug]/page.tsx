import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cachedFetchBlogs } from '@/app/actions/fetchBlogs';
import BlogPostDetail from './_components/BlogPostDetail';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { posts, error } = await cachedFetchBlogs(slug);

  if (error || !posts || posts.length === 0) {
    return {
      title: 'Blog Post Not Found | MAQ Construction',
      description: 'The requested blog post could not be found.',
    };
  }

  const post = posts[0];

  return {
    title: `${post.title} | MAQ Construction Blog`,
    description: `Read ${post.title} on MAQ Construction's blog`,
    openGraph: {
      title: `${post.title} | MAQ Construction Blog`,
      siteName: 'MAQ Construction',
      description: `Read ${post.title} on MAQ Construction's blog`,
      type: 'article',
      publishedTime: post.publishDate.toISOString(),
      authors: ['Minh Nghiem'],
    },
    twitter: {
      title: `${post.title} | MAQ Construction Blog`,
      description: `Read ${post.title} on MAQ Construction's blog`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { posts, error } = await cachedFetchBlogs(slug);

  if (error) {
    throw new Error(error);
  }

  if (!posts || posts.length === 0) {
    return notFound();
  }

  return <BlogPostDetail post={posts[0]} />;
}
