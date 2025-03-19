export const locales = ['en', 'es'] as const;
export const defaultLocale = 'es' as const;

export function getLocaleFromPathname(pathname: string): string {
  const segments = pathname.split('/');
  return segments[1] || defaultLocale;
} 