import { cachedFetchProjectGroups } from '@/app/actions/fetchProjectGroups';
import { cachedFetchProjects } from '@/app/actions/fetchProjects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ListProject from './_components/ListProject';

export const generateStaticParams = async () => {
  const { projectGroups, error } = await cachedFetchProjectGroups();
  if (error || !projectGroups) {
    console.error('Error generating static params:', error);
    return [];
  }
  return projectGroups.map((group) => ({
    group: group.key,
  }));
};

type Props = {
  params: Promise<{ group: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { group } = await params;
  const { projectGroups, error } = await cachedFetchProjectGroups();

  if (error || !projectGroups) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Projects | MAQ Construction',
      description: 'Explore our construction projects at MAQ Construction.',
    };
  }

  const currentGroup = projectGroups.find((g) => g.key === group);

  const title = currentGroup ? `${currentGroup.title} Projects` : 'Projects';
  const description = currentGroup
    ? `Explore our ${currentGroup.title} projects at MAQ Construction. View our portfolio of completed and ongoing construction projects in the ${currentGroup.title} category.`
    : 'Discover our diverse range of construction projects at MAQ Construction. Browse through our portfolio of residential, commercial, and industrial projects.';

  return {
    title: `${title} | MAQ Construction`,
    description,
    openGraph: {
      title: `${title} | MAQ Construction Portfolio`,
      description,
      siteName: 'MAQ Construction',
      type: 'website',
      url: `https://maqconstruct.com/projects/${group}`,
    },
    twitter: {
      title: `${title} | MAQ Construction Portfolio`,
      description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { group } = await params;
  const [{ projects, error: projectsError }, { projectGroups, error: groupsError }] =
    await Promise.all([cachedFetchProjects(), cachedFetchProjectGroups()]);

  if (projectsError || groupsError) {
    throw new Error(projectsError || groupsError || 'An unknown error occurred');
  }

  if (!projects || !projectGroups) {
    return notFound();
  }

  const currentGroup = projectGroups.find((g) => g.key === group);
  if (!currentGroup) {
    return notFound();
  }

  const projectsFiltered = projects.filter((project) => project.group.key === group);

  return <ListProject group={currentGroup.key} projects={projectsFiltered} />;
}
