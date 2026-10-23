import { ProjectCard } from '../components/ProjectCard'
import { PageContainer } from '../components/PageContainer'
import { projects } from '../data/projects'

export function ProjectsPage() {
  const featuredProject = projects.find((project) => project.featured)
  const featuredIndex = featuredProject
    ? projects.findIndex((project) => project.id === featuredProject.id)
    : -1
  const supportingProjects = projects
    .map((project, index) => ({ project, index }))
    .filter(({ project }) => !project.featured)

  return (
    <PageContainer eyebrow="Match centre" title="The work speaks.">
      <div className="projects-layout">
        <div className="projects-intro-row">
          <p className="projects-intro">
            Explore project overviews and confirmed technologies where available.
          </p>
          <div className="projects-tactical-rule" aria-hidden="true" />
        </div>
        <div className="projects-composition">
          {featuredProject ? (
            <ProjectCard
              project={featuredProject}
              index={featuredIndex}
              headingLevel="h2"
            />
          ) : null}
          <section
            className="projects-supporting"
            aria-labelledby="projects-supporting-title"
          >
            <h2 className="projects-supporting-title" id="projects-supporting-title">
              More projects
            </h2>
            <div className="projects-supporting-grid">
              {supportingProjects.map(({ project, index }) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  headingLevel="h3"
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageContainer>
  )
}
