import ProjectCard from "./Project";
import { Project } from "@/types/project";
export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="w-full inline-flex flex-nowrap gap-10 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll gap-10">
        {projects.map((project: Project) => (
          <ProjectCard id={project.id} key={project.id} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none infinite-scroll gap-10" aria-hidden="true">
        {projects.map((project: Project) => (
          <ProjectCard id={project.id} key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}