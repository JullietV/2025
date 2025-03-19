"use client"; 
  
import { useTranslations } from 'next-intl';

export default function AnimatedText() {
  const t = useTranslations('Headline');

  return (
    <h1 className="bg-gradient-to-r from-blue-600 to-green-500 inline-block text-transparent bg-clip-text font-playwrite-hu text-4xl font-bold">
      {t('title')}
    </h1>
  );
}
