import Link from 'next/link';
import Search from '@/components/Search';
import LogoSvg from '@/components/LogoSvg';
import CatCard from '@/components/CatCard';
import { BreedInfoAndImage, BreedInfo } from './types';

async function fetchAllBreeds() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds');

  if (!res.ok) {
    throw new Error('failed to fetch');
  }

  const data = (await res.json()) as Array<BreedInfo>;
  return data;
}

async function fetchBreedImages() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=4&breed_ids=beng,sava,norw,srex&api_key=${process.env.API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    throw new Error('failed to fetch');
  }

  const data = (await res.json()) as Array<BreedInfoAndImage>;
  return data;
}

export default async function Home() {
  const breeds = await fetchAllBreeds();
  const images = await fetchBreedImages();

  return (
    <main className='min-w-full text-[#291507]'>
      <div>
        <div className='flex flex-col justify-center rounded-t-[42px] bg-cover bg-no-repeat text-white max-lg:bg-hero-image-md max-lg:p-12 max-md:bg-hero-image-sm lg:bg-hero-image-lg lg:p-16'>
          <LogoSvg
            fill='white'
            styles='max-lg:w-[170px] max-lg:h-[60px] w-[320px] h-[120px]'
          />
          <p className='max-w-[50%] max-sm:text-sm lg:text-2xl'>
            Get to know more about your cat breed
          </p>
          <Search breeds={breeds} />
        </div>
        <div className='rounded-b-[42px] bg-[#E3E1DC] text-lg max-lg:p-12 max-sm:text-sm lg:p-24'>
          <p className='mb-9 font-medium'>
            <span className='border-b-[3.21px] border-[#291507] pb-2'>
              Most S
            </span>
            earched Breeds
          </p>
          <div className='mb-11 flex justify-between'>
            <h2 className='text-5xl font-bold max-lg:text-2xl'>
              66+ Breeds For you <br />
              to discover
            </h2>
            <p className='flex items-center gap-1 text-lg font-bold opacity-60 max-sm:hidden'>
              See more{' '}
              <span className='material-icons-outlined'>trending_flat</span>{' '}
            </p>
          </div>
          <div className='flex flex-wrap gap-4'>
            {images.map(({ id, url, breeds }) => (
              <div key={id}>
                <CatCard
                  url={url}
                  name={breeds[0].name}
                  styles='h-[186px] w-[186px]'
                />
                <Link href={`/${breeds[0].id}`}><p className='mt-2 font-semibold hover:underline'>{breeds[0].name}</p></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='my-24 flex gap-12 max-lg:p-12 max-md:flex-col max-md:p-12 lg:px-24'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-5xl font-bold'>
            <span className='border-t-4 border-[#291507] pt-2'>Wh</span>y should
            you have a cat?
          </h2>
          <p className='text-lg'>
            Having a cat around you can actually trigger the release of calming
            chemicals in your body which lower your stress and anxiety leves
          </p>
          <p className='flex items-center gap-1 text-lg opacity-60'>
            READ MORE{' '}
            <span className='material-icons-outlined'>trending_flat</span>{' '}
          </p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='grid gap-4'>
            <img src='/images/image 2.png' alt='img2' />
            <img src='/images/image 1.png' alt='img1' />
          </div>
          <div>
            <img src='/images/image 3.png' alt='img3' />
          </div>
        </div>
      </div>
    </main>
  );
}
