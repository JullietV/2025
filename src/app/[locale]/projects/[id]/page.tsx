import { getProjectById } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export default async function ProjectPage({ 
  params: { id } 
}: { 
  params: { id: string; locale: string } 
}) {
  const project = await getProjectById(id)

  if (!project) {
    notFound()
  }

  return (
    <article className="container mx-auto w-[1400px] max-w-full py-8">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <img 
        src={project.imageUrl} 
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      
      <div className="flex gap-4 mb-6">
        <Link
          href={project.liveUrl}
          target="_blank"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Ver Demo
        </Link>
        <Link
          href={project.githubUrl}
          target="_blank"
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Código Fuente
        </Link>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">{project.description}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">El Desafío</h2>
          <p>{project.details.challenge}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">La Solución</h2>
          <p>{project.details.solution}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <span 
                key={tech}
                className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Características Principales</h2>
          <ul className="list-disc pl-6">
            {project.details.features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </section>

        <footer className="text-sm text-gray-500 mt-8">
          Proyecto creado el {new Date(project.createdAt).toLocaleDateString()}
        </footer>
      </div>
    </article>
  )
} 