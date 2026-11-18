import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design-Build Services',
  description:
    'Our design-build approach provides a seamless project delivery method where we manage both design and construction under one contract.',
  openGraph: {
    title: 'Design-Build Services | MAQ Construction',
    description: 'Seamless project delivery through integrated design and construction',
  },
  twitter: {
    title: 'Design-Build Services | MAQ Construction',
    description: 'Seamless project delivery through integrated design and construction',
  },
};

export default function DesignBuildLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
