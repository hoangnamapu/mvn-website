import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-Construction Services',
  description:
    'Comprehensive pre-construction services including cost modeling, estimating, scheduling, and project planning for optimal project outcomes.',
  openGraph: {
    title: 'Pre-Construction Services | MAQ Construction',
    description: 'Expert pre-construction planning and management',
  },
  twitter: {
    title: 'Pre-Construction Services | MAQ Construction',
    description: 'Expert pre-construction planning and management',
  },
};

export default function PreConstructionServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
