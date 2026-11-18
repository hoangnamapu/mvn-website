import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Options } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

export const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
    [MARKS.CODE]: (text) => <code className='rounded bg-gray-200 p-1'>{text}</code>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='mb-4'>{children}</p>,
    [BLOCKS.HEADING_1]: (node, children) => <h1 className='my-4 text-4xl font-bold'>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className='my-4 text-3xl font-semibold'>{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className='my-4 text-2xl font-medium'>{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className='my-2 text-xl font-medium'>{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className='my-2 text-lg font-medium'>{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className='text-md my-1 font-medium'>{children}</h6>
    ),
    [BLOCKS.UL_LIST]: (node, children) => <ul className='my-4 list-disc pl-5'>{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className='my-4 list-decimal pl-5'>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className='mb-2'>{children}</li>,
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className='my-4 border-l-4 border-gray-300 pl-4 italic text-gray-600'>
        {children}
      </blockquote>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { url, fileName, details } = node.data.target.fields.file;

      const width = details.image?.width || 800; // Default width
      const height = details.image?.height || 600; // Default height

      return (
        <div className='mx-auto my-4'>
          <Image
            src={url.startsWith('//') ? 'https:' + url : url}
            alt={fileName || 'Contentful asset'}
            width={width}
            height={height}
            className='rounded-lg shadow-md'
            priority
          />
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      const url = node.data.uri;
      return (
        <a
          href={url.startsWith('//') ? 'https:' + url : url}
          className='text-blue-500 underline hover:text-blue-700'
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node, children) => (
      <a
        href={`/entry/${node.data.target.sys.id}`}
        className='text-blue-500 underline hover:text-blue-700'
      >
        {children}
      </a>
    ),
    [INLINES.ASSET_HYPERLINK]: (node, children) => (
      <a
        href={node.data.target.fields.file.url}
        className='text-blue-500 underline hover:text-blue-700'
        target='_blank'
        rel='noopener noreferrer'
      >
        {children}
      </a>
    ),
  },
};
