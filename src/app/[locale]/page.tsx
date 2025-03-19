'use client';

import Headline from '@/components/Headline';
import GradientOrb from '@/components/GradientOrb';
import { useTranslations } from 'next-intl';
import ProjectsGrid from '@/components/Projects/Grid';
export default function Home() {
  const t = useTranslations();
  
  return (
    <main className="relative overflow-hidden min-h-screen">
      <div className="fixed inset-0 overflow-hidden">
        <GradientOrb 
          from="tw-violet-200"
          to="tw-pink-200"
          size="w-[600px] h-[600px]"
          position="top-[-10%] right-[-10%]"
          animation="float-medium"
        />
        <GradientOrb 
          from="tw-blue-200"
          to="tw-purple-200"
          size="w-[400px] h-[400px]"
          position="bottom-[-10%] left-[-5%]"
          animation="float-medium"
        />
        <GradientOrb 
          from="tw-green-200"
          to="tw-indigo-200"
          size="w-[300px] h-[300px]"
          position="top-[60%] left-[20%]"
          animation="float-fast"
        />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center h-[calc(100vh-300px)] mx-auto w-[1400px] max-w-full">
        <div className="border-x border-slate-200">
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
            <h3 className="border-t border-slate-200 p-4 text-3xl font-bold text-slate-400">
              {t('Hello, Im Julls!')}        
            </h3>
          </div>
          <div className="relative">                        
            <div className="absolute top-0 left-[-25px] text-slate-400 text-sm">
              <span className="text-slate-400 text-sm">h2</span>
            </div>
            <h2 className="border-t border-slate-200 p-4 text-5xl font-bold text-slate-400">
              {t('and I like to create')}
            </h2>
            
          </div>
          <Headline />
        </div>
        
      </div>

      <ProjectsGrid />
    </main>
  );
} 