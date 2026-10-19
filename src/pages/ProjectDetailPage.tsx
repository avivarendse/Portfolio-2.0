import { Link, useParams } from 'react-router-dom'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'
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
    <PageContainer eyebrow="Case study" title={project.name}>
      <ChamferedPanel title="Project overview">
        <p>{project.summary}</p>
        <ul className="pill-list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ChamferedPanel>

    </PageContainer>
  )
}
