import { getProjectById } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
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
    <article className="container mx-auto w-[1400px] max-w-full py-8 mt-14">
      <div className="grid grid-cols-12 gap-4 items-end h-full text-slate-500">
        <div className="col-span-12 md:col-span-5">
          <p className="text-sm mb-4">Proyecto creado el {new Date(project.createdAt).toLocaleDateString(
            'es-ES',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          )}</p>
          <h1 className="text-8xl font-bold mb-4">{project.title}</h1>                    
          <p className="text-sm mb-4">{project.role?.map(role => role).join(', ')}</p>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">{project.description}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">El desafío</h2>
              <p>{project.details.challenge}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">La solución</h2>
              <p>{project.details.solution}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tecnologías utilizadas</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Características principales</h2>
              <ul className="list-disc pl-6">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </section>
            <div className="flex gap-4 mb-6">
              
              <Link
                href={project.liveUrl}
                target="_blank"
                className="text-4xl font-bold hover:text-indigo-500 underline"
              >
                Demo
              </Link>
              {project.githubUrl && <Link
                href={project.githubUrl}
                target="_blank"
                className="text-4xl font-bold hover:text-indigo-500 underline"
              >
                Código fuente
              </Link>}
              
            </div>
            
          </div>
        </div>
        <div className="col-span-12 md:col-span-7">
          <Image 
            src={project.images[0]} 
            alt={project.title} 
            width={1000} 
            height={1000} 
            className="w-full h-full object-contain"
            objectFit="contain"
          />
        </div>
      </div>
      
    </article>
  )
} 