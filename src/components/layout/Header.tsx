import Link from "next/link";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="px-0 py-7 md:px-16 lg:px-24">
      <Link href={"/"}>
        <Logo fill="black" className="h-11" />
      </Link>
    </header>
  );
}
