import { builder, Builder } from '@builder.io/react'

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '')

Builder.register('insertMenu', {
  name: 'Link in Bio Components',
  items: [
    { name: 'Hero Section' },
    { name: 'Link Card' },
    { name: 'Gallery Grid' },
  ],
})

export default builder