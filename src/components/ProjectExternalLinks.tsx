import type { ProjectSummary } from '../data/projects'

interface ProjectExternalLinksProps {
  project: Pick<ProjectSummary, 'repositories' | 'liveUrl' | 'liveSiteStatus'>
  className?: string
}

export function ProjectExternalLinks({
  project,
  className = '',
}: ProjectExternalLinksProps) {
  if (!project.repositories?.length && !project.liveUrl) {
    return null
  }

  return (
    <div className={`project-external-links ${className}`.trim()}>
      {project.liveUrl ? (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
          View live site <span aria-hidden="true">↗</span>
        </a>
      ) : null}
      {project.liveSiteStatus === 'reported-unavailable' ? (
        <span className="project-live-site-status">
          live site momentarily down
        </span>
      ) : null}
      {project.repositories?.map(({ label, url }) => (
        <a key={url} href={url} target="_blank" rel="noopener noreferrer">
          {label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}
