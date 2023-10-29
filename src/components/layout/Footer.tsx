import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="mt-24 px-0 md:px-16 lg:px-24">
      <div className="flex justify-between gap-4 rounded-t-[42px] bg-black p-7 text-white max-sm:flex-col sm:items-center">
        <Logo fill="white" className="h-11" />
        <p className="max-sm:text-sm sm:text-lg">
          © created by 2saucy - devChallenge.io 2023
        </p>
      </div>
    </footer>
  );
}
