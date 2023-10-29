import Image from "next/image";
import { Metadata } from "next";

import Card from "@/components/Card";
import ScoreBar from "@/components/ScoreBar";
import { getBreedById, getBreedImgById } from "@/actions";

export async function generateMetadata({
  params,
}: {
  params: {
    id: string;
  };
}): Promise<Metadata> {
  const { name, description } = await getBreedById(params.id);

  return {
    title: name,
    description: description,
  };
}

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;
  const breed_info = await getBreedById(id);
  const images = await getBreedImgById(id, 10);

  const scoredAttributes = [
    {
      label: "Adaptability",
      result: breed_info.adaptability,
    },
    {
      label: "Affection Level",
      result: breed_info.affection_level,
    },
    {
      label: "Child Friendly",
      result: breed_info.child_friendly,
    },
    {
      label: "Grooming",
      result: breed_info.grooming,
    },
    {
      label: "Intelligence",
      result: breed_info.intelligence,
    },
    {
      label: "Health Issues",
      result: breed_info.health_issues,
    },
    {
      label: "Social Needs",
      result: breed_info.social_needs,
    },
    {
      label: "Stranger Friendly",
      result: breed_info.stranger_friendly,
    },
  ];

  return (
    <main className="space-y-24 px-6 text-[#291507] md:px-16 lg:px-24">
      <div className="flex gap-16 max-md:flex-col">
        <div>
          <Image
            className="rounded-2xl shadow-md"
            src={images[0].url}
            alt={`${breed_info.name} Image`}
            width={400}
            height={400}
          />
        </div>
        <div className="basis-[50%] space-y-8">
          <h1 className="text-4xl font-semibold">{breed_info.name}</h1>
          <p>{breed_info.description}</p>
          <p>
            <span className="font-bold">Temperament: </span>
            {breed_info.temperament}
          </p>
          <p>
            <span className="font-bold">Origin: </span>
            {breed_info.origin}
          </p>
          <p>
            <span className="font-bold">Life Span: </span>
            {breed_info.life_span}
          </p>
          {scoredAttributes.map(({ label: name, result: score }) => (
            <div key={name} className="grid grid-cols-2">
              <span className="font-bold">{name}:</span>
              <ScoreBar score={score} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="my-10 text-4xl font-semibold">Other Photos</h2>
        <div className="grid grid-cols-3 gap-8">
          {images.slice(0, 8).map(({ url }: { url: string }) => (
            <Card key={url} url={url} name={breed_info.name} />
          ))}
        </div>
      </div>
    </main>
  );
}
