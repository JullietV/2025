"use client"; 

import { useTranslations } from 'next-intl';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Headline() {
  const t = useTranslations();
  const headlineRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const text = headlineRef.current;
      const chars = text?.textContent?.split('');
      
      if (text && chars) {
        text.textContent = '';
        
        chars.forEach((char: string) => {
          const span = document.createElement('span');
          if (char === ' ') {
            span.innerHTML = '&nbsp;';
            span.style.marginRight = '0.25em';
          } else {
            span.textContent = char;
          }
          span.style.display = 'inline-block';
          text.appendChild(span);
        });

        // Animamos cada span
        gsap.from(text.children, {
          opacity: 0,
          y: 50,
          stagger: 0.05,
          duration: 0.8,
          ease: "back.out"
        });
      }
    }, headlineRef);

    return () => ctx.revert();
  }, []);

  return (
    <h1 
      ref={headlineRef}
      className="bg-gradient-to-r from-purple-300 to-indigo-500 inline-block text-transparent bg-clip-text font-playwrite-hu text-8xl font-bold"
    >
      {t('Experiences that connect')} ✨
    </h1>
  );
}
