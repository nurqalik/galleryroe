import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImages(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex-shrink flex items-center justify-center">
      <Image
        src={image.url}
        alt={image.name}
        width={1000}
        height={1000}
        className="flex-shrink object-contain"
      />
      </div>
      <div className="flex w-48 flex-col flex-shrink-0 border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
