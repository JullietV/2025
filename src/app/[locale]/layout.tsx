import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { Poppins, Zilla_Slab, Playwrite_HU } from 'next/font/google';

import '../globals.css';
import Nav from '@/components/Layout/Nav';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const zillaSlab = Zilla_Slab({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-zilla-slab',
});

const playwriteHu = Playwrite_HU({
  weight: ['400'],
  variable: '--font-playwrite-hu',
});

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'es' }];
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  // Esperamos a que los parámetros estén disponibles
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  if (!['es', 'en'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  console.log(Object.keys(require('next/font/google')));

  return (
    <html 
      lang={locale} 
      className={`${poppins.variable} ${zillaSlab.variable} ${playwriteHu.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Nav locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 