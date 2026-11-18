import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Design, Pre-Construction & Construction Services',
  description:
    'MAQ Construction offers comprehensive design and construction services, including architecture, interior design, pre-construction planning, and design-build solutions.',
  openGraph: {
    title: 'MAQ Construction Services | Design & Construction Expertise',
    description: 'Comprehensive design and construction services for your projects',
    url: 'https://maqconstruct.com/our-services',
  },
  twitter: {
    title: 'MAQ Construction Services | Design & Construction Expertise',
    description: 'Comprehensive design and construction services for your projects',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
