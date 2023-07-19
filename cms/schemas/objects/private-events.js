import React from 'react';

export default {
  type: 'object',
  name: 'privateEventsList',
  title: 'Private events index',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: 'Private Events',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      name: 'eventsList',
      title: 'Private event pages',
      type: 'array',
      of: [
        {
          title: 'Choose event page',
          type: 'reference',
          to: [{ type: 'eventsCasaMadera' }, { type: 'eventsSparrow' }],
        },
      ],
      hidden: ({ document }) => document.site === 'tocaMadera',
    },
    {
      name: 'editorInfo',
      title: 'Editor info',
      type: 'string',
      inputComponent: () => (
        <p>
          This section lists all private event pages. Go to the Private Events
          tab to edit details for these pages.
        </p>
      ),
      hidden: ({ document }) => document.site !== 'tocaMadera',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'eventsList.0.image',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Private events index',
        media,
      };
    },
  },
};
