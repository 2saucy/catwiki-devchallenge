import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { BreedInfo, BreedImage } from "@/types";
import { getBreedById, getBreedImgById, getBreeds } from "@/actions";
import Logo from "@/components/Logo";
import Search from "@/components/Search";
import Card from "@/components/Card";

export default async function HeroCard() {
  const all_breeds = await getBreeds();
  const images = await getBreedImgById("sava", 4);
  const breed_info = await getBreedById("sava");

  return (
    <div className="overflow-hidden shadow-lg md:rounded-[42px]">
      <div className="space-y-8 bg-hero-image-sm bg-cover p-16 md:bg-hero-image-md lg:bg-hero-image-lg">
        <div>
          <Logo fill="white" className="max-lg:h-16 lg:h-32" />
          <p className="text-2xl text-white">
            Get to know more about your cat breed
          </p>
        </div>
        <Search all_breeds={all_breeds} />
      </div>
      <div className="space-y-8 bg-[#E3E1DC] p-16">
        <p className=" font-medium">
          <span className="border-b-2 border-[#291507] pb-2">Most S</span>
          earched Breeds
        </p>
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-bold">
            66+ Breeds For you <br />
            to discover
          </h2>
          <Link
            href={"/"}
            className="flex items-center gap-2 font-bold opacity-60 max-sm:hidden"
          >
            See more
            <ArrowRight />
          </Link>
        </div>
        <HeroCardGrid images={images} breed_info={breed_info} />
      </div>
    </div>
  );
}

function HeroCardGrid({
  images,
  breed_info,
}: {
  images: BreedImage[];
  breed_info: BreedInfo;
}) {
  const { id, name } = breed_info;

  return (
    <div className="grid gap-4 max-lg:grid-cols-2 lg:grid-cols-4">
      {images.slice(0, 4).map((img, i) => (
        <div key={i}>
          <Card url={img.url} name={name} id={id} withLink />
        </div>
      ))}
    </div>
  );
}
