'use client';

import { motion } from 'framer-motion';
import { convertRelativeDate } from '@/lib/dayjs';
import { BlogPostFieldsType } from '@/types/contentful';
import Link from 'next/link';
import { ArrowRight, BookOpen, FolderOpen } from 'lucide-react';

type BlogListProps = {
  posts: BlogPostFieldsType[] | null;
};

export default function BlogList({ posts }: BlogListProps) {
  const getGridClass = (postCount: number) => {
    switch (postCount) {
      case 1:
        return 'grid-cols-1 place-items-center';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className='min-h-full bg-[#F5F0E1] px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mb-8 text-center  text-4xl font-bold text-[#4A3728]'
        >
          Our Blog
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mx-auto mb-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Explore our latest thoughts, insights, and updates about design, construction, and
          architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='mb-12 rounded-lg bg-white p-8 shadow-lg'
        >
          {!posts || posts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className='flex flex-col items-center justify-center space-y-4 py-12'
            >
              <FolderOpen className='h-16 w-16 text-[#92400E]' />
              <h3 className='text-2xl font-semibold text-[#4A3728]'>No Blog Posts Found</h3>
              <p className='text-center text-lg text-[#4A3728]'>
                We haven't published any blog posts yet. Check back soon for updates!
              </p>
            </motion.div>
          ) : (
            <div className={`grid gap-8 ${getGridClass(posts.length)}`}>
              {posts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={posts.length === 1 ? 'w-full max-w-md' : 'w-full'}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className='group block h-full overflow-hidden rounded-lg bg-[#F5F0E1] p-6 transition-all duration-300 hover:bg-[#4A3728] hover:shadow-xl'
                  >
                    <div className='flex h-full flex-col'>
                      <div className='mb-4 flex items-center'>
                        <div className='rounded-full bg-yellow-100 p-2'>
                          <BookOpen className='h-5 w-5 text-yellow-600' />
                        </div>
                        <span className='ml-3 text-sm text-[#4A3728] group-hover:text-white'>
                          {convertRelativeDate(post.publishDate)}
                        </span>
                      </div>

                      <h2 className='mb-4 flex-grow text-xl font-semibold text-[#4A3728] transition-colors group-hover:text-white'>
                        {post.title}
                      </h2>

                      <div className='flex items-center text-[#4A3728] transition-colors group-hover:text-white'>
                        <span className='text-sm'>Read more</span>
                        <ArrowRight className='ml-2 h-4 w-4' />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='mx-auto mt-12 max-w-3xl text-center text-lg text-[#4A3728]'
        >
          Stay updated with our latest articles and industry insights. Our blog covers everything
          from project showcases to expert tips and trends in construction and design.
        </motion.p>
      </div>
    </div>
  );
}
