export type Project = {
  id: string
  title: string
  summary: string
  tags: string[]
  image: string
  description: string
}

export const projects: Project[] = [
  {
    id: 'alpha',
    title: 'Alpha',
    summary: 'Modernisation e-commerce',
    tags: ['ecommerce', 'react'],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor, arcu a porttitor suscipit, nisl velit varius justo, non luctus tortor velit at augue. Maecenas nec efficitur nibh. Integer gravida, lacus vitae tristique dapibus, erat nunc rutrum mauris, sit amet consequat risus augue et ipsum.'
  },
  {
    id: 'beta',
    title: 'Beta',
    summary: 'Refonte de l’onboarding SaaS',
    tags: ['saas', 'uiux'],
    image: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
    description:
      'Praesent interdum, leo non sodales bibendum, augue est tristique mauris, vitae posuere justo sem ac nisl. Sed id pharetra lacus. Vestibulum hendrerit convallis tincidunt. Sed porta, nibh sit amet luctus aliquam, neque lorem luctus neque, vitae sagittis nibh nibh at odio.'
  },
  {
    id: 'gamma',
    title: 'Gamma',
    summary: 'Refonte de site marketing',
    tags: ['marketing', 'seo'],
    image: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop',
    description:
      'Donec nec ullamcorper urna. Integer auctor, massa eget bibendum dictum, mi mi efficitur justo, sit amet sollicitudin risus arcu id orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque rhoncus nibh at odio fermentum, non pharetra elit laoreet.'
  }
]



