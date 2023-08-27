interface Props {
  url: string;
  name: string;
  styles: string;
}

export default function CatCard({ url, name, styles }: Props) {
  return (
    <div className={`${styles}`}>
      <img
        className='h-full w-full rounded-3xl object-cover'
        src={url}
        alt={`${name} Image`}
      />
    </div>
  );
}
