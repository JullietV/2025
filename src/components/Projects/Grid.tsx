import ProjectCard from "./Project";
import { Project } from "@/types/project";
export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="w-full inline-flex flex-nowrap gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll gap-4">
        {projects.slice(0, 6).map((project: Project, index: number) => {
          return (
            <ProjectCard id={project.id} key={project.id} project={project} />
          )
        })}
      </div>
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll gap-4" aria-hidden="true">
        {projects.slice(6, 12).map((project: Project, index: number) => {
          return (
          <ProjectCard id={index + 6} key={index + 6} project={project}/>
          )
        })}
      </div>
    </div>
  );
}