'use client';

import Headline from '@/components/Headline';
import GradientOrb from '@/components/GradientOrb';
import { useTranslations } from 'next-intl';

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
      <div className="relative z-10 flex flex-col items-start justify-center h-screen mx-auto w-[1400px] max-w-full">
        <h2 className="text-3xl font-bold text-slate-400">
          {t('Hello, Im Julls!')}        
        </h2>
        <h3 className="text-5xl font-bold text-slate-400">
          {t('and I like to create')}
        </h3>
        <Headline />
      </div>
    </main>
  );
} 