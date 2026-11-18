import { createClient } from 'contentful';
import { ContentfulResponse } from '@/types/contentful';

class ContentfulClientSingleton {
  private static instance: ContentfulClientSingleton;
  private client: ReturnType<typeof createClient>;

  private constructor() {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      throw new Error('Contentful space ID and access token must be provided!');
    }

    this.client = createClient({
      space,
      accessToken,
    });
  }

  public static getInstance(): ContentfulClientSingleton {
    if (!ContentfulClientSingleton.instance) {
      ContentfulClientSingleton.instance = new ContentfulClientSingleton();
    }
    return ContentfulClientSingleton.instance;
  }

  public async fetchContent<TFields>(
    contentType: string,
    query: Record<string, unknown> = {},
  ): Promise<ContentfulResponse<TFields>[]> {
    try {
      const response = await this.client.getEntries({
        content_type: contentType,
        ...query,
      });

      return response.items.map((item) => ({
        metadata: item.metadata,
        sys: item.sys,
        fields: item.fields as TFields,
      }));
    } catch (error) {
      console.error(`Error fetching content from Contentful:`, error);
      throw new Error(`Unable to fetch ${contentType} data`);
    }
  }
}

export const contentfulClient = ContentfulClientSingleton.getInstance();
