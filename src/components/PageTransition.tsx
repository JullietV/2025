'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

function PageTransitionContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const direction = searchParams.get('direction') || 'none';

  const variants = {
    enter: (direction: string) => ({
      x: direction === 'next' ? 50 : direction === 'prev' ? -50 : 0,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      x: direction === 'next' ? -50 : direction === 'prev' ? 50 : 0,
      opacity: 0
    })
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <PageTransitionContent>{children}</PageTransitionContent>
    </Suspense>
  );
} 