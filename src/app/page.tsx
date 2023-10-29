import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import HeroCard from "@/components/HeroCard";

export default async function Page() {
  return (
    <main className="space-y-24 px-0 md:px-16 lg:px-24">
      <HeroCard />
      <div className="flex gap-8 max-md:flex-col max-md:p-8">
        <div className="space-y-8">
          <h2 className="text-5xl font-bold">
            <span className="border-t-4 border-[#291507] pt-2">Wh</span>y should
            you have a cat?
          </h2>
          <p className="text-lg">
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <Link href={"/"} className="flex items-center gap-2 opacity-60">
            READ MORE
            <ArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/image 2.png"
            alt="A picture of a cat"
            width={500}
            height={500}
          />
          <Image
            className="row-span-2"
            src="/image 3.png"
            alt="A picture of a cat"
            width={500}
            height={500}
          />
          <Image
            src="/image 1.png"
            alt="A picture of a cat"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
