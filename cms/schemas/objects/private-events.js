export default {
  type: "object",
  name: "privateEventsList",
  title: "Private events index",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      initialValue: "Private Events",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      name: "eventsList",
      title: "Private event pages",
      type: "array",
      of: [
        {
          title: "Choose event page",
          type: "reference",
          to: [
            { type: "eventsCasaMadera" },
            { type: "privateEventsTocaMadera" },
            { type: "eventsSparrow" },
            { type: "meduzaPrivateEvents" },
          ],
        },
      ],
    },
    {
      name: "reservation_page",
      type: "boolean",
      title: "Reservation page?",
      hidden: ({ document }) => document?.site != "meduza",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "eventsList.0.image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Private events index",
        media,
      };
    },
  },
};
