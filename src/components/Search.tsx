'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BreedInfo } from '@/app/types';

export default function Search({ breeds }: { breeds: Array<BreedInfo> }) {
  const [filter, setFilter] = useState<string>('');
  const [filteredCats, setFilteredCats] = useState<Array<BreedInfo>>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    if (!filter) {
      setFilteredCats(breeds);
    } else {
      setFilteredCats(
        breeds.filter((breed) =>
          breed.name.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
  }, [filter, breeds]);

  return (
    <div className='relative mt-8'>
      <div className='flex max-w-[30%] justify-between rounded-full bg-white p-4 text-black max-md:p-2'>
        <input
          className='w-full'
          type='text'
          placeholder='Search'
          value={filter}
          onChange={handleChange}
          onFocus={() =>
            setTimeout(() => {
              setIsActive(true);
            }, 100)
          }
          onBlur={() =>
            setTimeout(() => {
              setIsActive(false);
            }, 100)
          }
        />
        <span className='material-icons-outlined'>search</span>
      </div>
      {isActive && (
        <div className='absolute mt-4 w-96 rounded-3xl bg-white p-6 text-black'>
          <ul className='max-h-56 overflow-auto'>
            {filteredCats.length === 0 ? (
              <li>No matches founded</li>
            ) : (
              filteredCats.map(({ id, name }) => (
                <Link key={id} href={`/${id}`}>
                  <li className='rounded-xl p-3 text-lg font-medium hover:bg-[#979797]/10'>
                    {name}
                  </li>
                </Link>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
