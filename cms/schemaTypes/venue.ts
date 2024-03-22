import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: (Rule) =>
        Rule.required().max(100).error('Please shorten venue name to less than 100 characters'),
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule) => Rule.required().max(2).error('Please use two character state code.'),
    }),
    defineField({
      name: 'zip',
      title: 'Zip',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'Capacity',
      type: 'number',
    }),
  ],
})
