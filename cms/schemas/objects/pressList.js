import React from 'react';

export default {
  name: 'pressList',
  title: 'Press list',
  type: 'object',
  fields: [
    {
      name: 'editorInfo',
      title: 'Editor info',
      type: 'boolean',
      inputComponent: () => <p>This section lists all press items.</p>,
      initialValue: true,
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Press list',
      };
    },
  },
};
