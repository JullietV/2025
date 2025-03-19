import { Project } from '@/types/project'

export async function getProjects(): Promise<Project[]> {
  try {
    const response = await import('../data/projects.json')
    return response.projects as unknown as Project[]
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getProjects()
  return projects.find(project => project.id === id) || null
} 