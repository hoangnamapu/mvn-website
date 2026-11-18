import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pre-fabrication Services',
  description:
    'Turn-key design & fabrication services with efficient procurement methodology and overseas manufacturing capabilities.',
  openGraph: {
    title: 'Pre-fabrication Services | MAQ Construction',
    description: 'Efficient pre-fabrication solutions for construction projects',
  },
  twitter: {
    title: 'Pre-fabrication Services | MAQ Construction',
    description: 'Efficient pre-fabrication solutions for construction projects',
  },
};

export default function PreFabricationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
