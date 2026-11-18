import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Owner's Representative Services",
  description:
    "Professional owner's representative services providing comprehensive project oversight, cost control, and stakeholder coordination.",
  openGraph: {
    title: "Owner's Representative Services | MAQ Construction",
    description: 'Expert project oversight and management',
  },
  twitter: {
    title: "Owner's Representative Services | MAQ Construction",
    description: 'Expert project oversight and management',
  },
};

export default function OwnersRepresentativeServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
