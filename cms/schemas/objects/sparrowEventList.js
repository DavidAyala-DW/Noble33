export default {
  type: 'object',
  name: 'sparrowEventList',
  title: 'Events List',
  fields: [
    {
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields:[
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
        },
      ]     
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Events list",
        subtitle: 'Events List',
      }
    },
  },
}