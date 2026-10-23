export type ProjectSummary = {
  id: string
  name: string
  summary: string
  stack: string[]
  architecture?: string
  featured?: boolean
  status?: string
  screenshot?: {
    src: string
    alt: string
  }
}

export const projects: ProjectSummary[] = [
  {
    id: 'handled',
    name: 'Handled',
    featured: true,
    status: 'Under development',
    summary:
      'A mobile-first, full-stack field-service platform for small South African plumbing and electrical businesses. Its intended workflows cover scheduling, technician assignments, visit documentation, materials, progress, completion, and customer sign-off; implementation coverage has not been confirmed.',
    stack: ['Vue.js', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    architecture: 'REST API, JWT-based authentication, and a layered backend',
  },
  {
    id: 'hrflow',
    name: 'HRflow',
    summary:
      'A human resource management system intended to bring leave, attendance, and payroll processes together in one application. The implemented features, technology stack, and individual contribution have not yet been confirmed.',
    stack: [],
  },
  {
    id: 'artisanhub',
    name: 'ArtisanHub',
    summary:
      'An e-commerce marketplace intended to connect local artists and makers selling art, crafts, and jewellery with potential buyers. The concept also includes requests for custom pieces. The implemented features, technology stack, and individual contribution have not yet been confirmed.',
    stack: [],
  },
  {
    id: 'pawtopia',
    name: 'Pawtopia',
    summary:
      'A pet-care platform concept intended to help pet owners find daycare, boarding, grooming, and other care services. The implemented features, technology stack, and individual contribution have not yet been confirmed.',
    stack: [],
  },
]

export function getProjectById(id: string | undefined): ProjectSummary | undefined {
  if (!id) {
    return undefined
  }

  return projects.find((project) => project.id === id)
}
