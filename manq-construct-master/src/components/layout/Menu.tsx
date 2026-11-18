import { ProjectGroupFieldsType, SocialFieldsType } from '@/types/contentful';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDown,
  Facebook,
  HardHat,
  Instagram,
  Linkedin,
  Newspaper,
  PenTool,
  Twitter,
  Users,
  Youtube,
} from 'lucide-react';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

type MenuProps = {
  onClose: () => void;
  socials: SocialFieldsType[];
  projectGroups: ProjectGroupFieldsType[];
};

export type MenuItem = {
  label: string;
  href: string;
  items?: MenuItem[];
};

export type MenuSection = {
  title: string;
  icon: React.ElementType;
  items: MenuItem[];
};

export default function Menu({ socials, projectGroups, onClose }: MenuProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const socialIcon: Record<string, React.ReactNode> = {
    facebook: <Facebook />,
    instagram: <Instagram />,
    twitter: <Twitter />,
    youtube: <Youtube />,
    linkedin: <Linkedin />,
  };

  const menuItems: MenuSection[] = useMemo(
    () => [
      {
        title: 'Who We Are',
        icon: Users,
        items: [
          { label: 'Letter from Founder', href: '/company/letter-from-founder' },
          {
            label: 'Leadership',
            href: '/company/leadership',
          },
          {
            label: 'Our Services',
            href: '/company/our-services',
          },
        ],
      },
      {
        title: 'What We Design & Build',
        icon: PenTool,
        items: projectGroups.map((projectGroup) => ({
          label: projectGroup.title,
          href: `/projects/${projectGroup.key}`,
        })),
      },
      {
        title: 'How We Build',
        icon: HardHat,
        items: [
          { label: 'Design Build', href: '/construction/design-build' },
          { label: 'Pre-construction Services', href: '/construction/pre-construction-services' },
          {
            label: `Owner's Representative Services`,
            href: '/construction/owners-representative-services',
          },
          { label: 'Pre-fabrication', href: '/construction/pre-fabrication' },
        ],
      },
      {
        title: 'News & Insights',
        icon: Newspaper,
        items: [{ label: 'Blog', href: '/blog' }],
      },
    ],
    [projectGroups],
  );
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className='h-fit-content fixed top-20 z-40 w-full overflow-auto bg-white'
    >
      {/* Mobile View */}
      <div className='block lg:hidden'>
        <div className='container mx-auto p-4'>
          {menuItems.map((section) => (
            <div key={section.title} className='border-b border-gray-200'>
              <button
                onClick={() => toggleSection(section.title)}
                className='flex w-full items-center justify-between py-4 text-left'
              >
                <div className='flex items-center space-x-2 text-[#713F12]'>
                  <section.icon className='h-5 w-5 text-[#EAB308]' />
                  <span className='font-bold'>{section.title}</span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform ${
                    expandedSection === section.title ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedSection === section.title && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className='overflow-hidden'
                  >
                    <ul className='space-y-2 pb-4 pl-7'>
                      {section.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className='block py-2 text-gray-600 hover:text-[#92400E]'
                            onClick={() => onClose()}
                          >
                            {item.label}
                          </Link>
                          {item.items && (
                            <ul className='ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4'>
                              {item.items.map((subItem) => (
                                <li key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    className='block py-1 text-sm text-gray-500 hover:text-[#92400E]'
                                    onClick={() => onClose()}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className='mx-auto hidden lg:max-w-4xl 2xl:max-w-7xl lg:block'>
        <div className='container mx-auto grid gap-8 py-8 lg:grid-cols-4'>
          {menuItems.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className='space-y-4'
            >
              <h2 className='flex items-center text-xl font-bold text-[#713F12]'>
                <section.icon className='mr-2 h-6 w-6 text-[#EAB308]' />
                {section.title}
              </h2>
              <ul className='space-y-2'>
                {section.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className='group flex items-center space-x-2 text-gray-600 transition-colors hover:text-[#92400E]'
                      onClick={() => onClose()}
                    >
                      <span>{item.label}</span>
                      {item.items && (
                        <ChevronDown className='h-4 w-4 transition-transform group-hover:rotate-180' />
                      )}
                    </Link>
                    {item.items && (
                      <ul className='mt-2 space-y-2 border-l border-gray-200 pl-4'>
                        {item.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link
                              href={subItem.href}
                              className='text-sm text-gray-500 transition-colors hover:text-[#92400E]'
                              onClick={() => onClose()}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className='mt-auto border-t bg-[#713F12]/5 p-8'>
        <div className='container mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='text-center text-2xl font-bold text-[#713F12] md:text-3xl lg:text-5xl'
          >
            Renaissancing Building Design & Development
          </motion.h2>
        </div>
      </div>

      <div className='bg-gray-200'>
        <div className='container mx-auto flex lg:max-w-4xl 2xl:max-w-7xl flex-col items-center justify-between space-y-4 py-5 text-sm md:flex-row md:space-y-0 md:px-6 lg:px-0'>
          <ul className='flex flex-wrap justify-center gap-x-4 gap-y-2 uppercase'>
            <li className='flex items-center'>
              <Link href='/' className='hover:text-[#92400E]' onClick={() => onClose()}>
                HOMEPAGE
              </Link>
              <span className='ml-4 hidden text-gray-400 md:inline'>|</span>
            </li>
            <li className='flex items-center'>
              <Link href='/contact' className='hover:text-[#92400E]' onClick={() => onClose()}>
                CONTACT US
              </Link>
            </li>
          </ul>
          <ul className='flex space-x-4'>
            {socials.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  className='block text-gray-400 transition hover:text-[#92400E]'
                  aria-label={social.label}
                  onClick={() => onClose()}
                >
                  {socialIcon[social.icon as string]}
                </Link>
              </li>
            ))}
          </ul>
          <div className='text-center text-gray-500 md:text-right'>
            © 2024 Minh Nghiem.
          </div>
        </div>
      </div>
    </motion.div>
  );
}
