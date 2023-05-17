import React from 'react'

export default {
  type: 'object',
  name: 'eventsSlider',
  title: 'Events Slider',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: "links",
      title: "Link",
      type: "links",
    },
    {
      name: 'editorInfo',
      title: 'Editor info',
      type: 'string',
      inputComponent: () => (
        <p>
          This section shows the latest active events. Go to the Events tab to
          edit events.
        </p>
      ),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Events carousel',
      }
    },
  },
}