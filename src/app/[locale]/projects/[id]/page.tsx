import { getProjectById, getAdjacentProjects } from '@/lib/projects'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

interface PageProps {
  params?: {
    id: string;
    locale: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

type Props = {
  params: Promise<{ id: string; locale: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params

  return {
    title: `Proyecto ${id}`
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const resolvedParams = await params
  
  if (!resolvedParams.id) {
    notFound()
  }

  const project = await getProjectById(resolvedParams.id)
  const { prevProject, nextProject } = await getAdjacentProjects(resolvedParams.id)

  if (!project) {
    notFound()
  }

  return (
    <article className="container mx-auto w-[1400px] max-w-full py-8 mt-14 px-4 md:px-0">
      <div className="grid grid-cols-12 gap-4 h-full text-slate-500">
        <div className="col-span-12 md:col-span-5 order-2 md:order-1">
          <p className="text-xs md:text-sm mb-4">Proyecto creado el {new Date(project.createdAt).toLocaleDateString(
            'es-ES',
            {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }
          )}</p>
          <h1 className="text-4xl md:text-8xl font-bold mb-4">{project.title}</h1>                    
          <p className="text-xs md:text-sm mb-4">{project.role?.map(role => role).join(', ')}</p>
          <div className="prose max-w-none">
            <p className="text-base md:text-lg mb-6">{project.description}</p>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">El desafío</h2>
              <p>{project.details.challenge}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">La solución</h2>
              <p>{project.details.solution}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Tecnologías utilizadas</h2>
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
              <h2 className="text-xl md:text-2xl font-bold mb-4">Características principales</h2>
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
                className="text-2xl md:text-4xl font-bold hover:text-indigo-500 underline"
              >
                Demo
              </Link>
              {project.githubUrl && <Link
                href={project.githubUrl}
                target="_blank"
                className="text-2xl md:text-4xl font-bold hover:text-indigo-500 underline"
              >
                Código fuente
              </Link>}
              
            </div>
            
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 order-1 md:order-2 mb-8 md:mb-0">
          <div className="flex justify-end gap-4 items-center mb-4">
            {prevProject ? (
              <Link
                href={`/es/projects/${prevProject.id}?direction=prev`}
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
                <span>{prevProject.title}</span>
              </Link>
            ) : <div />}
            {(nextProject && prevProject) && (
              <span className="text-slate-500 dark:text-slate-400">
                |
              </span>
            )}
            {nextProject ? (
              <Link
                href={`/es/projects/${nextProject.id}?direction=next`}
                className="flex items-center gap-2 text-slate-500 hover:text-indigo-500"
              >
                <span>{nextProject.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            ) : <div />}
          </div>
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