export type ProjectSummary = {
  id: string
  name: string
  summary: string
  role: string
  teamSize: string
  contribution: string
  stack: string[]
  architecture?: string
  repositories?: {
    label: string
    url: string
  }[]
  liveUrl?: string
  liveSiteStatus?: 'reported-unavailable'
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
    role: 'Solo developer',
    teamSize: 'Solo',
    summary:
      'A field-service platform for small South African plumbing and electrical businesses, planned to cover scheduling, technician assignments, visit documentation, materials, and customer sign-off.',
    contribution:
      'I’m building it solo and have finished the backend and authentication so far: a layered REST API with JWT login, password hashing, sessions, and role-based access control for owner and technician roles. The frontend and the field-service workflows are not started yet.',
    stack: ['Vue.js', 'Node.js', 'Express', 'MySQL'],
    architecture: 'REST API, JWT-based authentication, and a layered backend',
    repositories: [
      { label: 'Repository', url: 'https://github.com/avivarendse/Handled' },
    ],
  },
  {
    id: 'hrflow',
    name: 'HRflow',
    role: 'Full stack developer, Git repository manager',
    teamSize: '4',
    summary:
      'A human resource management system that brings leave, attendance, and payroll together in one application.',
    contribution:
      'I built the frontend and backend for the dashboard and employees pages. That included two REST endpoints: one serves employee data from the database to the employees page, and one pulls from multiple tables to feed the dashboard, which shows total employees, payroll processed, pending leave requests, a performance rate, a performance line graph, and recent activity. I also managed the Git repository during the frontend phase.',
    stack: ['HTML', 'CSS', 'Node.js', 'Express', 'MySQL'],
    repositories: [
      { label: 'Frontend repository', url: 'https://github.com/avivarendse/HRflow' },
      {
        label: 'Backend repository',
        url: 'https://github.com/Zaarah-Okkers/ModernTech-Backend',
      },
    ],
    liveUrl: 'https://hrflow-xg3y.onrender.com/index.html',
  },
  {
    id: 'artisanhub',
    name: 'ArtisanHub',
    role: 'Backend developer (login APIs), frontend (navbar and footer), project documentation',
    teamSize: '4',
    summary:
      'An e-commerce marketplace where sellers list handmade art, crafts, and jewellery and buyers can order custom pieces.',
    contribution:
      'I built the login APIs, covering registration, JWT authentication, password hashing, and roles, along with the navbar and footer. I also wrote the project charter and proposal.',
    stack: ['Vue.js','Node.js', 'Express', 'MySQL'],
    repositories: [
      {
        label: 'Repository',
        url: 'https://github.com/Khaalid-hattas/Group6-E-COMMERCE',
      },
    ],
    liveUrl: 'https://group6-e-commerce-production.up.railway.app/',
    liveSiteStatus: 'reported-unavailable',
  },
  {
    id: 'pawtopia',
    name: 'Pawtopia',
    role: 'Project manager, frontend styling',
    teamSize: '6',
    summary:
      'A frontend-only pet-care platform, built with mock data, that helps pet owners find daycare, boarding, grooming, and other care services.',
    contribution:
      'I was project manager for a team of six in the Startup Launch Challenge. I set up branch protection so nothing merged without my review, coordinated contributors across the app’s structure and user flows, and defined the site’s styling, including fonts, colours, and spacing. It’s deployed on GitHub Pages.',
    stack: ['Bootstrap', 'HTML', 'CSS'],
    repositories: [
      {
        label: 'Repository',
        url: 'https://github.com/avivarendse/Pawtopia-Pet-Care',
      },
    ],
    liveUrl: 'https://avivarendse.github.io/Pawtopia-Pet-Care/',
  },
]

export function getProjectById(id: string | undefined): ProjectSummary | undefined {
  if (!id) {
    return undefined
  }

  return projects.find((project) => project.id === id)
}
