import { Link } from 'react-router-dom'
import { ProjectExternalLinks } from './ProjectExternalLinks'
import type { ProjectSummary } from '../data/projects'

interface ProjectCardProps {
  project: ProjectSummary
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
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
        ) : null}
      </div>

      {project.screenshot ? (
        <img
          className="project-card-image"
          src={project.screenshot.src}
          alt={project.screenshot.alt}
          loading="lazy"
        />
      ) : null}

      <h2>
        <Link to={`/projects/${project.id}`} className="project-card-title-link">
          {project.name}
        </Link>
      </h2>
      <p className="project-card-summary">{project.summary}</p>

      <dl className="project-card-contributors">
        <div>
          <dt>Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt>Team size</dt>
          <dd>{project.teamSize === 'Solo' ? 'Solo' : `${project.teamSize} people`}</dd>
        </div>
      </dl>

      <p className="project-card-contribution">{project.contribution}</p>

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

      <ProjectExternalLinks project={project} className="project-card-external-links" />
      <Link to={`/projects/${project.id}`} className="project-card-action">
        View case study <span aria-hidden="true">→</span>
      </Link>
    </article>
  )
}
