import { cachedFetchBlogs } from '@/app/actions/fetchBlogs';
import { cachedFetchProjectGroups } from '@/app/actions/fetchProjectGroups';
import { cachedFetchProjects } from '@/app/actions/fetchProjects';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://maqconstruct.com';

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [`${baseUrl}/logo.webp`],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/company/letter-from-founder`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/company/our-services`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/construction/design-build`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/construction/owners-representative-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/construction/pre-construction-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/construction/pre-fabrication-services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Fetch project groups
  let projectGroupPages: MetadataRoute.Sitemap = [];
  try {
    const { projectGroups } = await cachedFetchProjectGroups();
    projectGroupPages = projectGroups
      ? projectGroups.map((group) => ({
          url: `${baseUrl}/projects/${group.key}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        }))
      : [];
  } catch (error) {
    console.error('Error fetching project groups:', error);
  }

  // Fetch projects
  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const { projects } = await cachedFetchProjects();
    projectPages = projects
      ? projects.map((project) => ({
          url: `${baseUrl}/projects/${project.group.key}/${project.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
          images: project.images.map((image) => image.url),
        }))
      : [];
  } catch (error) {
    console.error('Error fetching projects:', error);
  }

  // Fetch blog posts
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const { posts } = await cachedFetchBlogs();
    blogPages = posts
      ? posts.map((post) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }))
      : [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }
  return [...staticPages, ...projectGroupPages, ...projectPages, ...blogPages];
}
