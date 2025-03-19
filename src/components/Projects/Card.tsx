import { Project } from '@/types/project'
import Link from 'next/link'

interface ProjectCardProps {
  project: Project
  locale: string
}

export default function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link href={`/${locale}/projects/${project.id}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-gray-100 px-2 py-1 rounded-md text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
} 