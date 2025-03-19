import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold ">Julliet V.</h1> 
      </Link>
      <ul className="flex gap-4 text-lg">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
