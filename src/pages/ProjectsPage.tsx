import { Link } from 'react-router-dom'
import { ChamferedPanel } from '../components/ChamferedPanel'
import { PageContainer } from '../components/PageContainer'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <PageContainer eyebrow="Match centre" title="The work speaks.">
      <div className="projects-layout">
        {projects.length === 0 ? (
          <p className="empty-state">No projects have been added yet.</p>
        ) : (
          <div className="project-list">
            {projects.map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="project-card-link">
                <ChamferedPanel className="project-card" title={project.name}>
                  <p>{project.summary}</p>
                  <ul className="pill-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </ChamferedPanel>
              </Link>
            ))}
          </div>
        )}
      </div>
    </PageContainer>
  )
}
