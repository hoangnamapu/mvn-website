import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | MAQ Construction',
  description:
    "Get in touch with MAQ Construction for expert design-build, pre-construction, and construction management services. We're here to bring your vision to life.",
  openGraph: {
    title: 'Contact MAQ Construction',
    description:
      'Reach out to MAQ Construction for your next project. We offer expert design-build and construction management services.',
  },
  twitter: {
    title: 'Contact MAQ Construction',
    description:
      'Reach out to MAQ Construction for your next project. We offer expert design-build and construction management services.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
