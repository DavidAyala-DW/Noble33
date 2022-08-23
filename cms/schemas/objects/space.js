export default {
  name: 'space',
  title: 'Space between sections',
  type: 'object',
  fields: [
    {
      name: 'heightDesktop',
      title: 'Define space (Desktop)',
      type: 'number',
    },
    {
      name: 'heightMobile',
      title: 'Define space (Mobile)',
      type: 'number',
    },
  ],
  preview: {
    select: {
      heightDesktop: 'heightDesktop',
      heightMobile: 'heightMobile'
    },
    prepare({heightDesktop,heightMobile}) {
      return {
        title: "Space between sections",
        subtitle: `desktop: ${heightDesktop}px and mobile: ${heightMobile}px `,
      }
    },
  },
}
