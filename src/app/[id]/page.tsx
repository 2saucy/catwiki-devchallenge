import { Metadata } from 'next';
import ScoreBar from '@/components/ScoreBar';
import CatCard from '@/components/CatCard';
import { BreedInfo, BreedImage } from '@/app/types';

interface Params {
  params: {
    id: string;
  };
}

async function fetchBreedById(id: string) {
  const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`);
  if (!res.ok) {
    throw new Error('failed to fetch');
  }

  const data = (await res.json()) as BreedInfo;
  return data;
}

async function fetchBreedImages(id: string) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${id}`
  );
  if (!res.ok) {
    throw new Error('failed to fetch');
  }

  const data = (await res.json()) as Array<BreedImage>;
  return data;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { name, description } = await fetchBreedById(params.id);

  return {
    title: `CatWiki | ${name}`,
    description: description,
  };
}

export default async function CatDetailsPage({ params }: Params) {
  const breed = await fetchBreedById(params.id);
  const images = await fetchBreedImages(params.id);

  if (Object.keys(breed).length === 0) {
    return <p>Cat not found</p>;
  }

  const scoredAttributes: Array<{ name: string; score: number }> = [
    {
      name: 'Adaptability',
      score: breed.adaptability,
    },
    {
      name: 'Affection Level',
      score: breed.affection_level,
    },
    {
      name: 'Child Friendly',
      score: breed.child_friendly,
    },
    {
      name: 'Grooming',
      score: breed.grooming,
    },
    {
      name: 'Intelligence',
      score: breed.intelligence,
    },
    {
      name: 'Health Issues',
      score: breed.health_issues,
    },
    {
      name: 'Social Needs',
      score: breed.social_needs,
    },
    {
      name: 'Stranger Friendly',
      score: breed.stranger_friendly,
    },
  ];

  return (
    <main>
      <div className='flex gap-24 max-md:flex-col'>
        <div className='h-96 w-96'>
          <img
            className='h-full w-full rounded-3xl object-cover'
            src={images[0].url}
            alt={`${breed.name} Image`}
          />
        </div>
        <div className='flex basis-[60%] flex-col gap-8 text-base font-medium'>
          <h1 className='text-4xl font-semibold text-[#291507]'>
            {breed.name}
          </h1>
          <p className='text-lg font-medium text-[#291507]'>
            {breed.description}
          </p>
          <p>
            <span className='font-bold'>Temperament: </span>
            {breed.temperament}
          </p>
          <p>
            <span className='font-bold'>Origin: </span>
            {breed.origin}
          </p>
          <p>
            <span className='font-bold'>Life Span: </span>
            {breed.life_span}
          </p>
          {scoredAttributes.map(({ name, score }) => (
            <div key={name} className='grid grid-cols-2'>
              <span className='font-bold'>{name}:</span>
              <ScoreBar score={score} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className='my-10 text-4xl font-semibold text-[#291507]'>
          Other Photos
        </h2>
        <div className='mb-24 flex flex-wrap gap-8'>
          {images.slice(0, 8).map(({ url }: { url: string }) => (
            <CatCard key={url} url={url} name={breed.name} styles='h-72 w-72' />
          ))}
        </div>
      </div>
    </main>
  );
}
