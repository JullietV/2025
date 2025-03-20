import Headline from '@/components/Headline';
import GradientOrb from '@/components/GradientOrb';
import { getTranslations } from 'next-intl/server';
import ProjectsGrid from '@/components/Projects/Grid';
import { getProjects } from '@/lib/projects'

export default async function Home({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations();
  const projects = await getProjects()
  
  return (
    <main className="min-h-screen">
      
      <div className="relative z-10 flex flex-col items-start justify-center h-[calc(100vh-300px)] mx-auto w-[1400px] max-w-full">
        <div className="border-x border-slate-200 px-10 md:px-0">
          <div className="relative">
            <div className="absolute top-0 left-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
            <div className="absolute bottom-0 left-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
            <div className="absolute bottom-0 right-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
            <div className="absolute top-0 right-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
            <div className="absolute top-0 right-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
            <div className="absolute top-[-25px] right-[0] text-slate-400 text-sm h-[25px] w-[1px] bg-slate-200"></div>
            <div className="absolute top-[-25px] left-[0] text-slate-400 text-sm h-[25px] w-[1px] bg-slate-200"></div>
            <div className="absolute top-0 left-[-25px] text-slate-400 text-sm">
              <span className="text-slate-400 text-sm">h3</span>
            </div>
            <h3 className="border-t border-slate-200 p-4 text-2xl md:text-3xl font-bold text-slate-400">
              {t('Hello, Im Julls!')}        
            </h3>
          </div>
          <div className="relative">                        
            <div className="absolute top-0 left-[-25px] text-slate-400 text-sm">
              <span className="text-slate-400 text-sm">h2</span>
            </div>
            <h2 className="border-t border-slate-200 p-4 text-3xl md:text-5xl font-bold text-slate-400">
              {t('and I like to create')}
            </h2>
          </div>
          <Headline />
        </div>
      </div>

      <ProjectsGrid projects={projects} />
    </main>
  );
} 