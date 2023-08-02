import { EnvelopeIcon } from '@sanity/icons';

export default {
  name: 'contact_fields',
  type: 'document',
  title: 'Contact',
  icon: EnvelopeIcon,
  fields: [
    {
      name: 'venue_name',
      title: 'Venue Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone_number',
      title: 'Phone number',
      type: 'string',
    },
    {
      type: 'image',
      title: 'Image',
      name: 'image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'schedules',
      title: 'Schedules',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'schedule',
          title: 'Schedule',
          fields: [
            {
              name: 'schedule_title',
              title: 'Schedule title',
              type: 'string',
            },
            {
              name: 'schedule_options',
              title: 'Schedule options',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'schedule_option',
                  title: 'Schedule option',
                  fields: [
                    {
                      type: 'string',
                      name: 'days',
                      title: 'Days',
                    },
                    {
                      type: 'string',
                      name: 'hours',
                      title: 'Hours',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
    },
    {
      name: 'about_us',
      title: 'About us (Summary)',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'venue_name',
      media: 'image',
    },
  },
};
