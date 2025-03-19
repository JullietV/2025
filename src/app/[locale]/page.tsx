import Headline from '@/components/Headline';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  
  return (
    <main>
      <div className="flex flex-col items-start justify-center h-screen mx-auto w-[1400px] max-w-full">
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