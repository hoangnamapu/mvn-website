import { cachedFetchProjectGroups } from '@/app/actions/fetchProjectGroups';
import { cachedFetchProjects } from '@/app/actions/fetchProjects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailPage from './_components/DetailPage';

export const generateStaticParams = async () => {
  const { projects, error } = await cachedFetchProjects();
  if (error || !projects) {
    console.error('Error generating static params:', error);
    return [];
  }
  return projects.map((project) => ({
    group: project.group.key,
    slug: project.slug,
  }));
};

type Props = {
  params: Promise<{ group: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group, slug } = await params;
  const { projects, error } = await cachedFetchProjects();

  if (error || !projects) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error | MAQ Construction',
      description: 'An error occurred while loading the project details.',
    };
  }

  const project = projects.find((p) => p.slug === slug && p.group.key === group);

  if (!project) {
    return {
      title: 'Project Not Found | MAQ Construction',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `${project.title} | MAQ Construction`,
    description: project.description || 'View details of our construction project',
    openGraph: {
      title: `${project.title} | MAQ Construction`,
      description: project.description || 'View details of our construction project',
      images: project.images && project.images.length > 0 ? [{ url: project.images[0].url }] : [],
      siteName: 'MAQ Construction',
      type: 'website',
      url: `https://maqconstruct.com/projects/${group}/${slug}`,
    },
    twitter: {
      title: `${project.title} | MAQ Construction`,
      description: project.description || 'View details of our construction project',
    },
  };
}

export default async function Page({ params }: Props) {
  const { group, slug } = await params;
  const [{ projects, error: projectsError }, { projectGroups, error: groupsError }] =
    await Promise.all([cachedFetchProjects(), cachedFetchProjectGroups()]);

  if (projectsError || groupsError) {
    throw new Error(projectsError || groupsError || 'An unknown error occurred');
  }

  if (!projects || !projectGroups) {
    return notFound();
  }

  const project = projects.find((p) => p.slug === slug && p.group.key === group);
  const currentGroup = projectGroups.find((g) => g.key === group);

  if (!project || !currentGroup) {
    return notFound();
  }

  return <DetailPage project={project} />;
}
