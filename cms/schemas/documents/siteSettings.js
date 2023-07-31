import { CogIcon } from '@sanity/icons';

export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site configuration',
  icon: CogIcon,
  groups: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
    { name: 'general', title: 'General' },
  ],
  fieldsets: [
    { name: 'header', title: 'Header' },
    { name: 'footer', title: 'Footer' },
    { name: 'social', title: 'Social' },
    { name: 'general', title: 'General' },
  ],
  fields: [
    {
      name: 'site',
      title: 'Site',
      readOnly: true,
      hidden: true,
      type: 'string',
      options: {
        list: [
          { title: 'Noble 33', value: 'noble33' },
          { title: 'Casa Madera', value: 'casaMadera' },
          { title: 'Toca Madera', value: 'tocaMadera' },
          { title: "Sparrow", value: "sparrow" },
          { title: "Meduza", value: "meduza" },
        ],
      },
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
    {
      name: 'mainNav',
      type: 'array',
      title: 'Main nav menu',
      description: 'Select pages for the overlay menu.',
      group: 'header',
      fieldset: 'header',
      of: [{ type: 'links' }],
    },
    {
      type: 'image',
      title: 'Menu image',
      name: 'menuImage',
      group: 'header',
      fieldset: 'header',
      description: `
        Recommended size: 500x960, Aspect ratio: 52:100, Max file size: 350kb
      `,
    },
    {
      name: 'alt_text',
      type: 'string',
      title: 'Menu image - alt Text',
    },
    {
      name: 'secondHeaderNav',
      type: 'array',
      title: 'Secondary nav menu',
      group: 'header',
      fieldset: 'header',
      of: [{ type: 'links' }],
      hidden: ({ document }) => document.site === 'tocaMadera',
    },
    {
      name: 'footerNav',
      type: 'array',
      title: 'Footer nav menu',
      group: 'footer',
      fieldset: 'footer',
      of: [{ type: 'links' }],
    },
    {
      name: 'footerNavSecondary',
      type: 'array',
      title: 'Footer secondary nav menu',
      group: 'footer',
      fieldset: 'footer',
      of: [{ type: 'links' }],
      hidden: ({ document }) => document.site !== 'tocaMadera',
    },
    {
      name: 'footer_noble_link',
      type: 'string',
      title: 'Footer Noble 33 link',
      group: 'footer',
      fieldset: 'footer',
      hidden: ({ document }) => document?.site == 'noble33',
    },
    {
      name: 'facebookHandle',
      type: 'url',
      title: 'Facebook handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
    },
    {
      name: 'instagramHandle',
      type: 'url',
      title: 'Instagram Handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
    },
    {
      name: 'spotifyHandle',
      type: 'url',
      title: 'Spotify handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
      hidden: ({ document }) => document?.site == 'noble33',
    },
    {
      name: 'soundCloudHandle',
      type: 'url',
      title: 'SoundCloud Handle',
      placeholder: 'link',
      group: 'social',
      fieldset: 'social',
      hidden: ({ document }) => document?.site === 'noble33',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'phone_number',
      title: 'Phone number',
      type: 'string',
      group: 'general',
      fieldset: 'general',
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
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'about_us',
      title: 'About us (Summary)',
      type: 'text',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'privacyPolicyHandle',
      type: 'links',
      title: 'Privacy policy link',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'termsLink',
      type: 'links',
      title: 'Terms of use link',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'cookiesPreferencesHandle',
      type: 'links',
      title: 'Cookie preferences link',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'newsletter_text',
      type: 'string',
      title: 'Newsletter Title',
      group: 'general',
      fieldset: 'general',
    },
    {
      name: 'reservationsButton',
      type: 'links',
      title: 'Reservations Button',
      group: 'header',
      fieldset: 'header',
    },
  ],
  preview: {
    select: {
      title: 'venue',
      site: "site",
      venue : "venue",
    },
    prepare({site, venue}) {

      const sites = {
        casaMadera: "Casa madera",
        noble33: "Noble33",
        sparrow: "Sparrow",
        meduza: "Meduza",
        tocaMadera: "Toca madera",        
      }

      return {
        title: sites[site] ?? venue, 
      }
    },
  },
};
