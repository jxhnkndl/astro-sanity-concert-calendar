import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Artist Name',
      type: 'string',
      validation: (Rule) => [
        Rule.required().min(1).error('Must provide artist name'),
        Rule.max(100).error('Artist name must be less than 100 characters'),
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description:
        'Choose a JPG, SVG, PNG, GIF, or TIFF file that is less than 1 MB and no more than 2000px wide.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().assetRequired(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
