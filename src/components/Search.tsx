'use client'

import { useState } from "react";
const Search = ({ cats }) => {
    const [filter, setFilter] = useState('')
    const [filteredCats, setFilteredCats]= useState([])

    const handleChange = (event: any) => {
        setFilter(event.target.value)
        const filtered = cats.filter((cat) => cat.name.toLowerCase().includes(event.target.value.toLowerCase()))
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
                        filteredCats.map(({ name }) => (
                            <li key={name} className="font-medium text-lg rounded-xl p-3 hover:bg-[#979797]/10">{name}</li>
                        ))
                        }
                    </ul>
                </div>) 
                : <></>
            }
        </div>
    )
}

export default Search