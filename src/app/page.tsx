import Search from '@/components/Search'
import LogoSvg from '@/components/LogoSvg'


export default async function Home() {
  return (
    <main className='min-w-full text-[#291507]'>
        <div>
          <div className='p-24 rounded-t-[42px] sm:bg-hero-image-sm md:bg-hero-image-md lg:bg-hero-image-lg bg-no-repeat bg-cover p-24 text-white'>
              <LogoSvg fill="white" width={320} height={120}/>
              <p className='text-2xl max-w-[40%] mb-14'>Get to know more about your cat breed</p>
              <Search />
          </div>
          <div className='p-24 rounded-b-[42px] bg-[#E3E1DC]'>
              <p className='font-medium text-lg mb-9'><span className='pb-2 border-b-[3.21px] border-[#291507]'>Most S</span>earched Breeds</p>
              <div className='flex justify-between'>
                <h2 className='font-bold text-5xl'>66+ Breeds For you <br/>to discover</h2>
                <p className='font-bold text-lg opacity-60 flex items-center gap-1'>See more <span className="material-icons-outlined">trending_flat</span> </p>
              </div>
          </div>
        </div>
        <div className='flex p-24'>
          <div className='basis-1/2'>
            <h2 className='font-bold text-5xl mb-11'><span className='pt-2 border-t-4 border-[#291507]'>Wh</span>y should you have a cat?</h2>
            <p className='text-lg mb-11'>Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves</p>
            <p className='flex items-center gap-1 text-lg opacity-60'>READ MORE <span className="material-icons-outlined">trending_flat</span> </p>
          </div>
          <div className='basis-1/2'>
            <img className='' src="/images/image 1.png" alt="img1" />
            <img className='' src="/images/image 2.png" alt="img2" />
            <img className='' src="/images/image 3.png" alt="img3" />
          </div>
        </div>
    </main>
  )
}
