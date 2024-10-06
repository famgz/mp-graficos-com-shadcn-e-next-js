import Image from 'next/image';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageSrc: any;
  imageAlt: string;
  title: string;
}

export default function NavButton({ imageSrc, imageAlt, title }: Props) {
  return (
    <button className='flex-center flex-col text-xs gap-2 border-2 px-4 py-3 rounded-lg hover:border-violet-500 transition-colors'>
      <Image src={imageSrc} alt={imageAlt} />
      {title}
    </button>
  );
}
