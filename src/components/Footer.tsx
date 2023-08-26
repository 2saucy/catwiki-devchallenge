import LogoSvg from "./LogoSvg"

export default function Footer(){
    return(
        <footer className="bg-black text-white rounded-t-[42px] flex justify-between items-center py-7 px-24">
            <LogoSvg fill="white" width={127} height={42} />
            <p>© created by 2saucy - devChallenge.io 2023</p>
        </footer>
    )
}