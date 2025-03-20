import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Nav({ locale }: { locale: string | undefined }) {
  const t = useTranslations();

  return (
    <nav className="flex justify-between items-center py-4 mx-auto w-[1400px] max-w-full">
      <Link href={`/${locale}`}>
        <h1 className="text-2xl font-bold text-slate-500">Julliet V.</h1> 
      </Link>
      <ul className="flex gap-4 text-lg text-slate-500 underline">
        <li className="hover:text-indigo-500">
          <Link href={`/${locale}`}>{t('Home')}</Link>
        </li>
        <li className="hover:text-indigo-500">
          <Link href={`/${locale}/about`}>{t('About')}</Link>
        </li>
        <li className="hover:text-indigo-500">
          <Link href="https://wa.link/4a8qs7" target="_blank">{t('Let\'s talk')}</Link>
        </li>
      </ul>
    </nav>
  );
}
