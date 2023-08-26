'use client'
import { useState } from "react";
import Link from "next/link";

export default function Search({ cats }){

    const [filter, setFilter] = useState<string>('')
    const [filteredCats, setFilteredCats]= useState<object[]>([])

    const handleChange = (event: any) => {
        setFilter(event.target.value)
        const filtered = cats.filter((cat: any) => cat.name.toLowerCase().includes(event.target.value.toLowerCase()))
        setFilteredCats(filtered)
    }

    return(
        <div className="relative">
            <div className="bg-white text-black flex justify-between rounded-full p-6 w-96">
                <input type="text" placeholder="Enter your breed" value={filter} onChange={handleChange} />
                <span className="material-icons-outlined">search</span>
            </div>
            {
                filter ? 
                (<div className="bg-white text-black absolute mt-4 p-6 w-96 rounded-3xl">
                    <ul className="max-h-56 overflow-auto">
                        {
                        filteredCats.length === 0 
                        ? <li>No matches founded</li> 
                        :
                        filteredCats.map((cat: any) => (
                            <Link key={cat.id} href={`/${cat.id}`}>
                                <li className="font-medium text-lg rounded-xl p-3 hover:bg-[#979797]/10">{cat.name}</li>
                            </Link>
                        ))
                        }
                    </ul>
                </div>) 
                : <></>
            }
        </div>
    )
}