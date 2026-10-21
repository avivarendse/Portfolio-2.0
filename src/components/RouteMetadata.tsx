import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectById } from '../data/projects'

const siteName = 'Road to the First Team'

const routeMetadata: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Junior Full-Stack Developer',
    description:
      'Aviv Arendse is a junior full-stack developer in South Africa working toward a first software engineering role. Explore projects and profile.',
  },
  '/profile': {
    title: 'Developer Profile',
    description:
      'Meet Aviv Arendse, a junior full-stack developer in South Africa. Explore verified skills, development background, and portfolio projects.',
  },
  '/projects': {
    title: 'Projects',
    description:
      'Explore projects by Aviv Arendse, including Handled, an under-development field-service operations platform, and other project concepts.',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Contact Aviv Arendse about junior software developer opportunities, collaboration, or professional enquiries.',
  },
}

function getMetadata(pathname: string) {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/'
  const primaryRoute = routeMetadata[normalizedPath]

  if (primaryRoute) {
    return primaryRoute
  }

  const projectMatch = normalizedPath.match(/^\/projects\/([^/]+)$/)
  if (projectMatch) {
    const project = getProjectById(projectMatch[1])

    if (project) {
      return {
        title: `${project.name} Overview`,
        description:
          project.id === 'handled'
            ? 'Handled is an under-development field-service operations platform for small South African plumbing and electrical businesses.'
            : project.summary,
      }
    }

    return {
      title: 'Project Overview Unavailable',
      description: "This project overview is not available in Aviv Arendse's portfolio.",
    }
  }

  return {
    title: 'Developer Portfolio',
    description:
      'Explore the projects and profile of Aviv Arendse, a junior full-stack developer in South Africa.',
  }
}

export function RouteMetadata() {
  const { pathname } = useLocation()
  const { title, description } = getMetadata(pathname)

  useEffect(() => {
    document.title = `${title} | Aviv Arendse | ${siteName}`

    let descriptionElement = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )

    if (!descriptionElement) {
      descriptionElement = document.createElement('meta')
      descriptionElement.name = 'description'
      document.head.append(descriptionElement)
    }

    descriptionElement.content = description
  }, [title, description])

  return null
}
