import FullImages from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid images ID");

  return(
    <div className="w-full h-full">
      <FullImages id={idAsNumber} />
    </div>
  );
}
