import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

import { Poppins, Zilla_Slab, Playwrite_HU } from 'next/font/google';

import '../globals.css';
import Nav from '@/components/Layout/Nav';
import GradientOrb from '@/components/GradientOrb';
import PageTransition from '@/components/PageTransition';
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
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  if (!['es', 'en'].includes(locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) { // eslint-disable-line @typescript-eslint/no-unused-vars
    notFound();
  }

  return (
    <html 
      lang={locale} 
      data-theme="light"
      className={`${poppins.variable} ${zillaSlab.variable} ${playwriteHu.variable}`}
    >
      <head>
        <title>Portafolio | Julliet V.</title>
        <meta name="description" content="Portafolio personal de Julliet V. - UX Engineer" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <div className="relative">
          <div className="fixed inset-0 overflow-hidden z-[-1]">
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
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Nav locale={locale} />
            <PageTransition>
              {children}
            </PageTransition>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
} 