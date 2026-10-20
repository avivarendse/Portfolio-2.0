import { ProjectCard } from '../components/ProjectCard'
import { PageContainer } from '../components/PageContainer'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <PageContainer eyebrow="Match centre" title="The work speaks.">
      <div className="projects-layout">
        <p className="projects-intro">
          Explore project overviews and confirmed technologies where available.
        </p>
        <div className="project-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageContainer>
  )
}
