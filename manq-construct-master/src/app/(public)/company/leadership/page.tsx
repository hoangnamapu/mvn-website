import { Metadata } from 'next';
import LeadershipPage from './_components/LeadershipPage';
import { leaders } from '@/constants/data';

export const metadata: Metadata = {
  title: 'Leadership Team | MAQ Construction',
  description: 'Meet our experienced leadership team driving innovation and excellence in construction at MAQ Construction.',
  openGraph: {
    title: 'Leadership Team | MAQ Construction',
    description: 'Meet the visionary leaders behind MAQ Construction\'s success in the construction industry.',
    url: 'https://maqconstruct.com/leadership',
    siteName: 'MAQ Construction',
    images: [
      {
        url: 'https://maqconstruct.com/minh-nghiem.jpg',
        width: 1200,
        height: 630,
        alt: 'MAQ Construction Leadership Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leadership Team | MAQ Construction',
    description: 'Meet the visionary leaders behind MAQ Construction\'s success in the construction industry.',
    images: ['https://maqconstruct.com/minh-nghiem.jpg'],
  },
};

export default function Page() {
  return <LeadershipPage leaders={leaders} />;
}

