'use client';

import { cachedFetchProjectGroups } from '@/app/actions/fetchProjectGroups';
import { cachedFetchSocial } from '@/app/actions/fetchSocial';
import { ProjectGroupFieldsType, SocialFieldsType } from '@/types/contentful';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Menu from './Menu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectGroups, setProjectGroups] = useState<ProjectGroupFieldsType[]>([]);
  const [socialMedia, setSocialMedia] = useState<SocialFieldsType[]>([]);
  //eslint-disable-next-line
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectGroupsResult, socialResult] = await Promise.all([
          cachedFetchProjectGroups(),
          cachedFetchSocial(),
        ]);

        if (projectGroupsResult.error) {
          throw new Error(projectGroupsResult.error);
        }
        if (socialResult.error) {
          throw new Error(socialResult.error);
        }

        setProjectGroups(projectGroupsResult.projectGroups || []);
        setSocialMedia(socialResult.social || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <header className='fixed inset-0 z-50 h-20 w-full bg-[#713F12] transition-all duration-300'>
        <div className='container relative mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center'></div>

          <Link href='/' className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src='/logo.webp'
                alt='MAQ Construction'
                width={44}
                height={56}
                className='h-14 w-auto'
                priority
              />
            </motion.div>
          </Link>

          <div className='flex items-center space-x-4'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex space-x-2 rounded-full text-white md:items-center'
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className='text-md hidden font-medium md:block'>
                {isOpen ? 'Close' : 'Menu'}
              </span>
              {isOpen ? <X className='h-5 w-5' /> : <MenuIcon className='h-5 w-5' />}
            </motion.button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-40 bg-black/50 backdrop-blur-sm'
              onClick={() => setIsOpen(false)}
            />
            <Menu
              projectGroups={projectGroups}
              socials={socialMedia}
              onClose={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
