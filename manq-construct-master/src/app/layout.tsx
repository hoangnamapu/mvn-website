import Header from '@/components/layout/Header';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

const commercialScript = localFont({
  src: '../assets/fonts/commercialscriptbt_regular.ttf',
  variable: '--font-commercial_script',
  preload: true,
});

const elephant = localFont({
  src: '../assets/fonts/elephant.ttf',
  variable: '--font-elephant',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://maqconstruct.com'),
  title: {
    default: 'MAQ Construction | Design-Build & Construction Management Services',
    template: '%s | MAQ Construction',
  },
  description:
    'MAQ Construction delivers innovative design-build solutions and construction management services. Specializing in commercial, residential, and specialized construction projects.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maqconstruct.com',
    siteName: 'MAQ Construction',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MAQ Construction - Design-Build & Construction Management Services',
      },
    ],
  },
  keywords:
    'construction, design-build, construction management, commercial construction, residential construction, maq, Minh Nghiem, maq construct',
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: 'MAQ Construction',
    description: 'Design-Build & Construction Management Services',
    images: ['/opengraph-image.jpg'],
  },
  alternates: {
    canonical: 'https://maqconstruct.com',
  },
  generator: 'Next.js',
  applicationName: 'MAQ Construction Website',
  referrer: 'origin-when-cross-origin',
  creator: 'Minh Nghiem',
  publisher: 'MAQ Construction',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'MAQ Construction',
    url: 'https://maqconstruct.com',
    logo: 'https://maqconstruct.com/logo.webp',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2522 S. Kachina Circle',
      addressLocality: 'Tempe',
      addressRegion: 'AZ',
      postalCode: '85282',
      addressCountry: 'USA',
    },
    email: 'mgt.manq@gmail.com',
  };
  return (
    <html lang='en'>
      <head>
        <Script
          id='local-business-schema'
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${commercialScript.variable} ${elephant.variable} antialiased`}>
        <div className='flex h-screen flex-col'>
          <Header />
          <main className='flex-1 pt-20'>{children}</main>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
