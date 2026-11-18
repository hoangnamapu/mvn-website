import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Leadership | MAQ Construction',
  description: 'Meet the experienced leaders driving innovation and excellence at MAQ Construction.',
  openGraph: {
    title: 'MAQ Construction Leadership | Driving Excellence in Construction',
    description: 'Discover the visionary leaders behind MAQ Construction\'s success',
    url: 'https://maqconstruct.com/leadership',
  },
  twitter: {
    title: 'MAQ Construction Leadership | Driving Excellence in Construction',
    description: 'Discover the visionary leaders behind MAQ Construction\'s success',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

