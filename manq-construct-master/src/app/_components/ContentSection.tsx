import { motion } from 'framer-motion';
import { Section } from '../page';

type ContentSectionProps = {
  section: Section;
  isMobile: boolean;
};

export default function ContentSection({ section, isMobile }: ContentSectionProps) {
  if (isMobile)
    return (
      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className='mx-auto h-full w-full bg-[#F5F0E1]/95 p-8 px-12'
      >
        <div className='mx-auto flex max-w-xl flex-col justify-center'>
          <h3 className=' text-xl text-[#4A3728] md:text-2xl'>{section?.headline}</h3>
          <h2 className='mt-2  text-3xl font-bold text-[#4A3728] md:text-4xl text-center'>
            {section.title}
          </h2>
          <p className='my-6 text-lg font-medium text-[#4A3728] text-center'>{section.subtitle}</p>
          {section.description && (
            <p className='text-base leading-relaxed text-[#4A3728] text-center'>{section.description}</p>
          )}
        </div>
      </motion.section>
    );

  return (
    <section className='absolute bottom-0 left-1/3 top-0 flex items-center justify-end'>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className='flex h-full max-w-xl flex-col justify-center bg-[#F5F0E1]/95 p-8 px-12'
      >
        <h3 className=' text-xl text-[#4A3728] md:text-2xl'>{section?.headline}</h3>
        <h2 className='mt-2  text-3xl font-bold text-[#4A3728] md:text-4xl'>
          {section.title}
        </h2>
        <p className='my-6 text-lg font-medium text-[#4A3728]'>{section.subtitle}</p>
        {section.description && (
          <p className='text-base leading-relaxed text-[#4A3728]'>{section.description}</p>
        )}
      </motion.div>
    </section>
  );
}
