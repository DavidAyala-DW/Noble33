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
