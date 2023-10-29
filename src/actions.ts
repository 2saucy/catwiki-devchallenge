import { BreedInfo, BreedImage } from "@/types";
import { notFound } from "next/navigation";

export async function getBreeds() {
  const url = `${process.env.API_BASE_URL}/breeds`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to get all breeds.");
  }

  const data = (await res.json()) as Array<BreedInfo>;

  return data;
}

export async function getBreedById(id: string) {
  const url = `${process.env.API_BASE_URL}/breeds/${id}`;

  const res = await fetch(url);

  if (!res.ok) {
    notFound();
  }

  const data = (await res.json()) as BreedInfo;

  return data;
}

export async function getBreedImgById(id: string, amount: number = 1) {
  const queryParams = new URLSearchParams({
    limit: amount.toString(),
    breed_id: id,
  });

  const url = `${
    process.env.API_BASE_URL
  }/images/search?${queryParams.toString()}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  const data = (await res.json()) as Array<BreedImage>;
  return data;
}
