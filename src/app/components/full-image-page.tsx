import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImages(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <Image
      src={image.url}
      alt={image.name}
      width={480}
      height={480}
      className="w-96 object-cover"
    />
  );
}
