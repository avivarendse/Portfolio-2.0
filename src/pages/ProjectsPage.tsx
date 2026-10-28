import { ProjectCard } from '../components/ProjectCard'
import { PageContainer } from '../components/PageContainer'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <PageContainer eyebrow="Match centre" title="The work speaks.">
      <div className="projects-layout">
        <div className="projects-intro-row">
          <p className="projects-intro">
            Explore project summaries, my contributions, and technologies.
          </p>
          <div className="projects-tactical-rule" aria-hidden="true" />
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}
