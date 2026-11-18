import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership | MAQ Construction',
  description: 'Meet our experienced leadership team driving innovation and excellence in construction.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

