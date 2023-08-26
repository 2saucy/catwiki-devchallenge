import { Metadata } from "next"
import ScoreBar from "@/components/ScoreBar"

interface Params {
    params: {
        id: string
    }
}

export async function generateStaticParams() {
    const cats = await fetch('https://api.thecatapi.com/v1/breeds').then((res) => res.json())

    return cats.map(({ id } : { id: string }) => ({
      id: id,
    }))
}

export async function generateMetadata({ params }: Params) : Promise<Metadata> {

    const { name, description } = await getCatById(params.id)

    return {
        title: `CatWiki | ${name}`,
        description: description,
    }
}

export async function getCatById(id: string) {
    const res = await fetch(`https://api.thecatapi.com/v1/breeds/${id}`)
    if (!res.ok) {
        throw new Error('failed to fetch')
    }
    return res.json()
}

export async function getCatImagesById(id: string) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_id=${id}`)
    if (!res.ok) {
        throw new Error('failed to fetch')
    }
    return res.json()
}

export default async function CatDetails({ params } : Params){

    const cat = await getCatById(params.id)
    const images = await getCatImagesById(params.id)

    if(Object.keys(cat).length === 0){
        return <p>Cat not found</p>
    }

    const scoredAttributes = [{
        name: 'Adaptability',
        score: cat.adaptability
    },
    {
        name: 'Affection Level',
        score: cat.affection_level
    },
    {
        name: 'Child Friendly',
        score: cat.child_friendly
    },
    {
        name: 'Grooming',
        score: cat.grooming
    },
    {
        name: 'Intelligence',
        score: cat.intelligence
    },
    {
        name: 'Health Issues',
        score: cat.health_issues
    },
    {
        name: 'Social Needs',
        score: cat.social_needs
    },
    {
        name: 'Stranger Friendly',
        score: cat.stranger_friendly
    }]

    return(
        <main>
            <div className="flex gap-24">
                <div className="w-96 h-96">
                    <img className="rounded-3xl w-full h-full object-cover" src={images[0].url} alt={`${cat.name} Image`} />
                </div>
                <div className="basis-[60%] flex flex-col gap-8 text-base font-medium">
                    <h1 className='font-semibold text-4xl text-[#291507]'>{cat.name}</h1>
                    <p className='font-medium text-lg text-[#291507]'>{cat.description}</p>
                    <p><span className='font-bold'>Temperament: </span>{cat.temperament}</p>
                    <p><span className='font-bold'>Origin: </span>{cat.origin}</p>
                    <p><span className='font-bold'>Life Span: </span>{cat.life_span}</p>
                    {
                        scoredAttributes.map(({ name, score }) => (
                            <div className='grid grid-cols-2'>
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
                            <div className="w-72 h-72">
                                <img className="rounded-3xl w-full h-full object-cover" src={url} alt={`${cat.name} Image`} />
                            </div>
                        ))
                    }
                </div>
            </div> 
        </main>
    )
}
