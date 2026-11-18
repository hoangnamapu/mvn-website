import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LeaderDetailPage from './_components/LeaderDetailPage';
import { leaders } from '@/constants/data';

type Props = {
  params: Promise<{ slug: string }>;
};

// This is crucial for dynamic routes to work properly
export async function generateStaticParams() {
  return leaders.map((leader) => ({
    slug: leader.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = (await params)
  const leader = leaders.find(l => l.slug === slug);
  if (!leader) {
    return {
      title: 'Leader Not Found | MAQ Construction',
      description: 'The requested leader profile could not be found.',
    };
  }

  return {
    title: `${leader.name} - ${leader.title} | MAQ Construction`,
    description: `Learn more about ${leader.name}, ${leader.title} at MAQ Construction. ${leader.bio.substring(0, 150)}...`,
    openGraph: {
      title: `${leader.name} - Leadership | MAQ Construction`,
      description: `Learn more about ${leader.name}, ${leader.title} at MAQ Construction.`,
      images: [{ url: leader.image.url }],
      url: `https://maqconstruct.com/leadership/${leader.slug}`,
      siteName: 'MAQ Construction',
      type: 'website',
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = (await params)
  const leader = leaders.find(l => l.slug === slug);

  if (!leader) {
    notFound();
  }

  return <LeaderDetailPage leader={leader} />;
}

