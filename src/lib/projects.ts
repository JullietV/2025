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

export async function getAdjacentProjects(currentId: string) {
  const projects = await getProjects()
  
  const currentIndex = projects.findIndex(p => p.id === currentId)
  
  return {
    prevProject: currentIndex > 0 ? projects[currentIndex - 1] : null,
    nextProject: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  }
} 