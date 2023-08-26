import Link from "next/link";
import LogoSvg from "./LogoSvg";

export default function Header(){
    return(
        <header className="py-7">
            <Link href="/"><LogoSvg fill="black" width={127} height={42} /></Link>
        </header>
    )
}