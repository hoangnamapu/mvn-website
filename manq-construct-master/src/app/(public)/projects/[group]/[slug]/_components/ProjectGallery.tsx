import { ProjectFieldsType } from '@/types/contentful';
import ImageCard from './ImageCard';

export function ProjectGallery({ project }: { project: ProjectFieldsType }) {
  return (
    <div className='grid auto-rows-[300px] grid-cols-1 gap-4 max-sm:px-5 sm:grid-cols-2 lg:grid-cols-3'>
      {project.images.map((image, index) => (
        <ImageCard key={index} image={image} index={index} images={project.images} />
      ))}
    </div>
  );
}
