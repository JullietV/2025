"use client"; 

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Headline() {
  const t = useTranslations();
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: 100,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        clearProps: "transform",
      }
    );
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-0 left-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
      <div className="absolute bottom-0 left-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
      <div className="absolute bottom-0 right-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
      <div className="absolute top-0 right-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
      <div className="absolute top-0 right-[-25px] text-slate-400 text-sm h-[1px] w-[25px] bg-slate-200"></div>
      <div className="absolute bottom-[-25px] right-[0] text-slate-400 text-sm h-[25px] w-[1px] bg-slate-200"></div>
      <div className="absolute bottom-[-25px] left-[0] text-slate-400 text-sm h-[25px] w-[1px] bg-slate-200"></div>
      <div className="absolute top-0 left-[-25px] text-slate-400 text-sm">
        <span className="text-slate-400 text-sm">h1</span>
      </div>

      <h1 
        ref={headlineRef}
        className="bg-gradient-to-r from-purple-300 to-indigo-500 inline-block text-transparent bg-clip-text font-playwrite-hu text-5xl md:text-8xl font-bold p-4 border-y border-slate-200 headline-before relative w-fit"
      >
        {t('Experiences that connect')} ✨
      </h1>
    </div>
  );
}
