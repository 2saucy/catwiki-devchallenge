import clsx from "clsx";
import Link from "next/link";

interface CardProps {
  url: string;
  name: string;
  className?: string;
  id?: string;
  withLink?: boolean;
}

export default function Card({
  url,
  name,
  className,
  id,
  withLink = false,
}: CardProps) {
  return (
    <>
      <div
        className={clsx(
          "h-44 overflow-hidden rounded-3xl shadow-md",
          className,
        )}
      >
        <img
          src={url}
          alt={`${name} Image`}
          className="h-full w-full object-cover"
        />
      </div>

      {withLink && (
        <Link href={`/${id}`} className="mt-2 font-semibold hover:underline">
          {name}
        </Link>
      )}
    </>
  );
}
