import Link from "next/link";

export default function Nav({ locale }: { locale: string | undefined }) {

  return (
    <nav className="flex justify-between items-center py-4 mx-auto w-[1400px] max-w-full">
      <Link href={`/${locale}`}>
        <h1 className="text-2xl font-bold text-slate-500">Julliet V.</h1> 
      </Link>
      <ul className="flex gap-4 text-lg text-slate-500">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
