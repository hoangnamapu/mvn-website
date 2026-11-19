import Image from 'next/image';

export default function Loading() {
  return (
    <div className='absolute inset-0 z-[100000000000] flex w-full items-center justify-center'>
      <Image src='/logo.webp' alt='MAQ Construction Loading' width={47} height={60}></Image>
    </div>
  );
}
