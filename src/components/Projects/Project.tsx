import { Project } from '@/types/project';
import Link from 'next/link';

export default function ProjectCard({ id, project }: { id: number | string, project?: Project }) {
  return (
    <Link href={`/es/projects/${id}`}>
      <div className="rounded-xl bg-slate-400 w-[300px] h-[200px] overflow-hidden">
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="Project 1" className="w-full h-full object-cover" />
      </div>
    </Link>
  );
}