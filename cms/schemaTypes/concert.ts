import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'concert',
  title: 'Concert',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Concert Title',
      type: 'string',
      validation: (Rule) => Rule.required().info('Date - Headliner'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'reference',
      to: [{type: 'venue'}],
    }),
    defineField({
      name: 'doors',
      title: 'Doors',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'showtime',
      title: 'Showtime',
      type: 'string',
    }),
    defineField({
      name: 'headliner',
      title: 'Headliner',
      // References an artist resource
      type: 'reference',
      to: [{type: 'artist'}],
    }),
    defineField({
      name: 'artists',
      title: 'Supporting Artists',
      // References an array of artist resources
      type: 'array',
      of: [{type: 'reference', to: {type: 'artist'}}],
    }),
  ],
})
