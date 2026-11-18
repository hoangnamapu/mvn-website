'use client';

import { richTextOptions } from '@/lib/contentfulRichText';
import { convertRelativeDate } from '@/lib/dayjs';
import { BlogPostFieldsType } from '@/types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Link from 'next/link';

type BlogPostDetailProps = {
  post: BlogPostFieldsType;
};

export default function BlogPostDetail({ post }: BlogPostDetailProps) {
  return (
    <div className='h-full bg-[#F5F0E1]'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8'
      >
        <Link
          href='/blog'
          className='mb-8 inline-flex items-center text-[#4A3728] transition-all duration-300 hover:translate-x-[-5px] hover:text-[#92400E]'
        >
          <ArrowLeft className='mr-2 h-5 w-5' />
          <span className='text-lg font-semibold'>Back to Blog</span>
        </Link>

        <motion.article
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl'
        >
          <div className='flex flex-col items-center p-8 text-center sm:p-12'>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='mb-6  text-3xl font-bold text-[#4A3728] sm:text-4xl md:text-5xl'
            >
              {post.title}
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='mb-8 flex flex-wrap items-center gap-4 text-[#4A3728]'
            >
              <div className='flex items-center'>
                <Calendar className='mr-2 h-5 w-5 text-[#92400E]' />
                <span>{convertRelativeDate(post.publishDate)}</span>
              </div>
              <div className='flex items-center'>
                <User className='mr-2 h-5 w-5 text-[#92400E]' />
                <span>Admin</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className='prose prose-lg prose-center max-w-none text-[#4A3728]'
            >
              {documentToReactComponents(post.content, richTextOptions)}
            </motion.div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mt-12 text-center'
        >
          <Link
            href='/blog'
            className='inline-flex items-center rounded-full bg-[#4A3728] px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#92400E] hover:shadow-lg'
          >
            <ArrowLeft className='mr-2 h-5 w-5' />
            Explore More Articles
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
