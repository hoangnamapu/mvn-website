import { Document } from '@contentful/rich-text-types';
import { EntrySys, Metadata } from 'contentful';

export interface ContentfulResponse<TFields> {
  metadata: Metadata;
  sys: EntrySys & {
    contentType: { sys: { id: string } };
  };
  fields: TFields;
}

export interface AssetFileFieldsType {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

export interface AssetFieldsType {
  title: string;
  description: string;
  file: AssetFileFieldsType;
}

export enum ProjectGroupField {
  TENANT_IMPROVEMENT = 'tenant-improvement',
  CUSTOM = 'custom',
  SHOPPING_CENTER = 'shopping-center',
  SELF_STORAGE = 'self-storage',
  PREFAB_MODULAR_HOME = 'prefab-modular-home',
}

export type ProjectFieldsResponseType = {
  title: string;
  slug: string;
  images: ContentfulResponse<AssetFieldsType>[];
  description?: string;
  group: ContentfulResponse<ProjectGroupFieldsType>;
};

export type ProjectFieldsType = {
  title: string;
  slug: string;
  images: {
    url: string;
    description: string | null;
  }[];
  description?: string;
  group: ProjectGroupFieldsType;
};

export type SocialFieldsType = {
  href: string;
  label: string;
  icon: string;
};

export type ProjectGroupFieldsType = {
  title: string;
  key: string;
};

export interface BlogPostFieldsType {
  title: string;
  slug: string;
  content: Document;
  publishDate: Date;
}
