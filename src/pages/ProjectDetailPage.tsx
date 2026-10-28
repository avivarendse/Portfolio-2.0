import { Link, useParams } from 'react-router-dom'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'
import { ProjectExternalLinks } from '../components/ProjectExternalLinks'
import { getProjectById } from '../data/projects'

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return (
      <PageContainer eyebrow="Project not found" title="Project unavailable">
        <p className="empty-state">No project information is available for this address.</p>
        <Link to="/projects" className="primary-button">
          Return to projects
        </Link>
      </PageContainer>
    )
  }

  return (
    <PageContainer eyebrow="Project details" title={project.name}>
    <ChamferedPanel title="At a glance">
        <p>{project.summary}</p>
        <dl className="project-detail-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Team size</dt>
            <dd>{project.teamSize === 'Solo' ? 'Solo' : `${project.teamSize} people`}</dd>
          </div>
          {project.status ? (
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          ) : null}
          {project.architecture ? (
            <div>
              <dt>Architecture</dt>
              <dd>{project.architecture}</dd>
            </div>
          ) : null}
        </dl>
        <section className="project-detail-contribution" aria-labelledby="project-contribution-title">
          <h3 id="project-contribution-title">My contribution</h3>
          <p>{project.contribution}</p>
        </section>
        <ProjectExternalLinks project={project} className="project-detail-external-links" />
        <section className="project-detail-stack" aria-labelledby="project-stack-title">
          <h3 id="project-stack-title">Technology stack</h3>
          <ul className="pill-list">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </ChamferedPanel>
    </PageContainer>
  )
}
