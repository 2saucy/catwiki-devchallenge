import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">Not Found 404</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="rounded-lg border-[1px] bg-black px-4 py-2 text-white hover:bg-black/90"
      >
        Return Home
      </Link>
    </main>
  );
}
