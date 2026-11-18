import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Letter from Our Founder',
  description:
    "Learn about MAQ Construction's journey, led by founder Minh Nghiem, combining architectural heritage with modern construction expertise.",
  openGraph: {
    title: 'Letter from Our Founder | MAQ Construction',
    description: 'Our journey in construction excellence',
    type: 'article',
  },
  twitter: {
    title: 'Letter from Our Founder | MAQ Construction',
    description: 'Our journey in construction excellence',
  },
};

export default function LetterFromFounderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
