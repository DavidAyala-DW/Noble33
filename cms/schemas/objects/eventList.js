import React from 'react';

export default {
  type: 'object',
  name: 'eventList',
  title: 'Event List',
  fields: [
    {
      name: 'editorInfo',
      title: 'Editor info',
      type: 'string',
      initialValue: '-',
      inputComponent: () => (
        <p>
          This section shows the latest active events. Go to the Events tab to
          edit events.
        </p>
      ),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Events',
      hidden: true
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Events',
        subtitle: 'Event list',
      };
    },
  },
};
