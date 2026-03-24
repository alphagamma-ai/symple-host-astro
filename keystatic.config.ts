import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Publish Date' }),
        author: fields.text({ label: 'Author' }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'src/assets/images/posts',
          publicPath: '/src/assets/images/posts/',
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),

    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/content/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Meta Description', multiline: true }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },

  singletons: {
    settings: singleton({
      label: 'Site Settings',
      path: 'src/content/settings',
      schema: {
        siteTitle: fields.text({ label: 'Site Title' }),
        siteDescription: fields.text({ label: 'Site Description', multiline: true }),
        contactEmail: fields.text({ label: 'Contact Email' }),
      },
    }),
  },
});
