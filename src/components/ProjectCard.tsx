import { Link } from 'react-router-dom'
import type { ProjectSummary } from '../data/projects'

interface ProjectCardProps {
  project: ProjectSummary
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="project-card-link"
      aria-label={`View ${project.name} project overview`}
    >
      <article className="project-card">
        <div className="project-card-meta">
          <span>Project {String(index + 1).padStart(2, '0')}</span>
          <span className="project-card-marker" aria-hidden="true" />
        </div>

        {project.screenshot ? (
          <img
            className="project-card-image"
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            loading="lazy"
          />
        ) : null}

        <h2>{project.name}</h2>
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
