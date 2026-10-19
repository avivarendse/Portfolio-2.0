export type ProjectSummary = {
  id: string
  name: string
  summary: string
  stack: string[]
}

export const projects: ProjectSummary[] = []

export function getProjectById(id: string | undefined): ProjectSummary | undefined {
  if (!id) {
    return undefined
  }

  return projects.find((project) => project.id === id)
}
