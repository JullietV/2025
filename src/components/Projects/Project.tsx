import { Project } from '@/types/project';
import Link from 'next/link';

export default function ProjectCard({ id, project }: { id: number | string, project?: Project }) {
  return (
    <Link href={`/es/projects/${id}`}>
      <div className="rounded-xl bg-slate-400 w-[500px] h-[300px] overflow-hidden">
        <img src={project?.coverImage} alt="Project 1" className="w-full h-full object-cover" />
      </div>
    </Link>
  );
}