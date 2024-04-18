import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid images ID");

  const image = await getImage(idAsNumber);

  return (
    <div>
      <Image
        src={image.url}
        alt={image.name}
        width={480}
        height={480}
        className="w-96 object-cover"
      />
    </div>
  );
}
