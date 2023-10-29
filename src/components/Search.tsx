"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Search as SearchIcon } from "lucide-react";

import { BreedInfo } from "@/types";

export default function Search({ all_breeds }: { all_breeds: BreedInfo[] }) {
  const [value, setValue] = useState<string>("");
  const [filteredBreeds, setFilteredBreeds] = useState<BreedInfo[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (!value) return;

    const filterBreeds = all_breeds.filter((breed) =>
      breed.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredBreeds(filterBreeds);
  }, [value]); // eslint-disable-line

  return (
    <div className="relative w-full  md:w-[450px]">
      <input
        className="w-full rounded-lg py-2 pl-4 pr-9"
        type="text"
        placeholder="Search"
        onFocus={() => setIsActive(true)}
        onBlur={() => setTimeout(() => setIsActive(false), 100)}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <SearchIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
      <DropdownMenu isActive={isActive} breeds={filteredBreeds} />
    </div>
  );
}

function DropdownMenu({
  isActive,
  breeds,
}: {
  isActive: boolean;
  breeds: BreedInfo[];
}) {
  return (
    <div
      className={clsx(
        isActive ? "block" : "hidden",
        "top-100 absolute flex w-full flex-col rounded-lg bg-white shadow-sm",
      )}
    >
      {breeds.slice(0, 5).map((breed) => (
        <Link
          key={breed.id}
          href={`/${breed.id}`}
          className="p-2 hover:bg-slate-400/10"
        >
          {breed.name}
        </Link>
      ))}
    </div>
  );
}
