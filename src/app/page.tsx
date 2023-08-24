import Search from '@/components/Search'
import { Mystery_Quest } from 'next/font/google'

const mystery = Mystery_Quest({
  subsets: ['latin'],
  weight: '400',
})

export default function Home() {
  return (
    <main>
        <div className='min-w-full'>
          <div>
            <div className='sm:bg-hero-image-sm md:bg-hero-image-md lg:bg-hero-image-lg bg-no-repeat bg-cover p-24'>
              <h1 className={`${mystery.className} text-6xl text-white`}>CatWiki</h1>
              <p>Get to know more about your cat breed</p>
              <Search />
            </div>
            <div className='bg-[#E3E1DC] text-[#291507]'>
              <p className='font-medium text-lg'>Most Searched Breeds</p>
              <div>
                <h2 className='font-bold text-5xl'>66+ Breeds For you to discover</h2>
                <p className='font-bold text-lg opacity-60 flex items-center gap-1'>See more <span className="material-icons-outlined">trending_flat</span> </p>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
    </main>
  )
}
