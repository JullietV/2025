import Headline from '@/components/Headline';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Headline');
  
  return (
    <main>
      <Headline />
    </main>
  );
} 