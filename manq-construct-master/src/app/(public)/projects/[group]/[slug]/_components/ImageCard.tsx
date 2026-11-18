import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ImageType = { url: string; description: string | null };

export default function ImageCard({
  image,
  index,
  images,
}: {
  image: ImageType;
  index: number;
  images: ImageType[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageType>(image);
  const prefersReducedMotion = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
      if (e.key === 'ArrowRight') {
        const currentIndex = images.indexOf(currentImage);
        if (currentIndex < images.length - 1) {
          setCurrentImage(images[currentIndex + 1]);
        }
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = images.indexOf(currentImage);
        if (currentIndex > 0) {
          setCurrentImage(images[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentImage, images]);

  const thumbnailAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.3,
        delay: prefersReducedMotion ? 0 : index * 0.1,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={thumbnailAnimation}
        initial='initial'
        whileInView='animate'
        viewport={{ once: true }}
        className='group relative cursor-zoom-in'
        onClick={() => setIsOpen(true)}
      >
        <div className='absolute inset-0 bg-[#713F12]/10 transition-colors duration-300 group-hover:bg-[#713F12]/0' />
        <Image
          src={image.url}
          alt={image?.description || ''}
          width={600}
          height={400}
          className='h-full w-full rounded-lg object-cover'
          priority={index < 6}
        />
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-50 bg-black/90 backdrop-blur-md'
          >
            <div className='absolute inset-0 flex flex-col items-center justify-center p-4 md:flex-row md:p-8'>
              <button
                onClick={() => setIsOpen(false)}
                className='absolute right-4 top-4 z-50 rounded-full bg-[#713F12] p-2 text-white transition-colors hover:bg-[#8B5E34]'
              >
                <X className='h-6 w-6' />
              </button>

              <div className='relative flex h-full w-full items-center justify-center md:h-[80vh]'>
                <motion.div
                  key={currentImage.url}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className='relative flex h-full w-full items-center justify-center'
                >
                  <Image
                    src={currentImage.url}
                    alt={currentImage.description || ''}
                    width={1200}
                    height={800}
                    className='h-full w-full rounded-lg object-contain'
                    priority
                  />
                </motion.div>
              </div>

              <div
                ref={scrollRef}
                className='mt-4 flex h-32 w-full gap-2 overflow-x-auto md:ml-4 md:mt-0 md:h-[80vh] md:w-32 md:flex-col md:overflow-y-auto md:overflow-x-hidden'
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(img)}
                    className={`relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg transition-all duration-200 ${
                      currentImage === img
                        ? 'ring-2 ring-[#713F12] ring-offset-2'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img.url}
                      alt={img.description || ''}
                      width={200}
                      height={150}
                      className='h-full w-full object-cover'
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
