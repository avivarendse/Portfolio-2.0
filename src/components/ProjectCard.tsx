import { Link } from 'react-router-dom'
import type { ProjectSummary } from '../data/projects'

interface ProjectCardProps {
  project: ProjectSummary
  index: number
  headingLevel: 'h2' | 'h3'
}

export function ProjectCard({ project, index, headingLevel }: ProjectCardProps) {
  const ProjectHeading = headingLevel

  return (
    <Link
      to={`/projects/${project.id}`}
      className={`project-card-link${project.featured ? ' project-card-link--featured' : ''}`}
      aria-label={`View ${project.name} project overview`}
    >
      <article
        className={`project-card${project.featured ? ' project-card--featured' : ''}`}
      >
        <div className="project-card-meta">
          <span>Project {String(index + 1).padStart(2, '0')}</span>
          {project.featured ? (
            <span className="project-card-featured-tag">Featured</span>
          ) : null}
          {project.status ? (
            <span className="project-card-status">
              <span className="project-card-marker" aria-hidden="true" />
              {project.status}
            </span>
          ) : (
            <span className="project-card-marker" aria-hidden="true" />
          )}
        </div>

        {project.screenshot ? (
          <img
            className="project-card-image"
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            loading="lazy"
          />
        ) : null}

        <ProjectHeading>{project.name}</ProjectHeading>
        <p className="project-card-summary">{project.summary}</p>

        {project.architecture ? (
          <p className="project-card-architecture">
            <span>Architecture</span>
            {project.architecture}
          </p>
        ) : null}

        {project.stack.length > 0 ? (
          <ul className="project-card-stack" aria-label={`${project.name} technologies`}>
            {project.stack.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        ) : null}

        <span className="project-card-action">
          View project overview <span aria-hidden="true">→</span>
        </span>
      </article>
    </Link>
  )
}
