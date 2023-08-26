import { Metadata } from "next"
import ScoreBar from "@/components/ScoreBar"

interface Params {
    params: {
        id: string
    }
}

interface Breed {
    weight: {
        imperial: string,
        metric: string
      },
      id: string,
      name: string,
      cfa_url: string,
      vetstreet_url: string,
      vcahospitals_url: string,
      temperament: string,
      origin: string,
      country_codes: string,
      country_code: string,
      description: string,
      life_span: string,
      indoor: number,
      lap: number,
      alt_names: string,
      adaptability: number,
      affection_level: number,
      child_friendly: number,
      dog_friendly: number,
      energy_level: number,
      grooming: number,
      health_issues: number,
      intelligence: number,
      shedding_level: number,
      social_needs: number,
      stranger_friendly: number,
      vocalisation: number,
      experimental: number,
      hairless: number,
      natural: number,
      rare: number,
      rex: number,
      suppressed_tail: number,
      short_legs: number,
      wikipedia_url: string,
      hypoallergenic: number,
      reference_image_id: string
}

interface BreedImage {
    id: string,
    url: string,
    width: number,
    height: number
}

async function fetchCatBreed(id: string) {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
    if (!res.ok) {
        throw new Error('failed to fetch')
    }

    const data = (await res.json()) as Breed
    return data
}

async function fetchCatImages(id: string) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${id}`)
    if (!res.ok) {
        throw new Error('failed to fetch')
    }

    const data = (await res.json()) as Array<BreedImage>
    return data
}

export async function generateMetadata({ params }: Params) : Promise<Metadata> {

    const { name, description } = await fetchCatBreed(params.id)

    return {
        title: `CatWiki | ${name}`,
        description: description,
    }
}

export default async function CatDetails({ params } : Params){

    const breed = await fetchCatBreed(params.id)
    const images = await fetchCatImages(params.id)

    if(Object.keys(breed).length === 0){
        return <p>Cat not found</p>
    }

    const scoredAttributes : Array<{ name: string, score:number }> = [{
        name: 'Adaptability',
        score: breed.adaptability
    },
    {
        name: 'Affection Level',
        score: breed.affection_level
    },
    {
        name: 'Child Friendly',
        score: breed.child_friendly
    },
    {
        name: 'Grooming',
        score: breed.grooming
    },
    {
        name: 'Intelligence',
        score: breed.intelligence
    },
    {
        name: 'Health Issues',
        score: breed.health_issues
    },
    {
        name: 'Social Needs',
        score: breed.social_needs
    },
    {
        name: 'Stranger Friendly',
        score: breed.stranger_friendly
    }]

    return(
        <main>
            <div className="flex gap-24">
                <div className="w-96 h-96">
                    <img className="rounded-3xl w-full h-full object-cover" src={images[0].url} alt={`${breed.name} Image`} />
                </div>
                <div className="basis-[60%] flex flex-col gap-8 text-base font-medium">
                    <h1 className='font-semibold text-4xl text-[#291507]'>{breed.name}</h1>
                    <p className='font-medium text-lg text-[#291507]'>{breed.description}</p>
                    <p><span className='font-bold'>Temperament: </span>{breed.temperament}</p>
                    <p><span className='font-bold'>Origin: </span>{breed.origin}</p>
                    <p><span className='font-bold'>Life Span: </span>{breed.life_span}</p>
                    {
                        scoredAttributes.map(({ name, score }) => (
                            <div key={name} className='grid grid-cols-2'>
                                <span className='font-bold'>{name}:</span>
                                <ScoreBar score={score} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-4xl text-[#291507] my-10">Other Photos</h2>
                <div className="grid grid-cols-3 grid-rows-2 gap-11 mb-28">
                    {
                        images.slice(0,8).map(({ url } : { url: string }) => (
                            <div key={url} className="w-72 h-72">
                                <img className="rounded-3xl w-full h-full object-cover" src={url} alt={`${breed.name} Image`} />
                            </div>
                        ))
                    }
                </div>
            </div> 
        </main>
    )
}
