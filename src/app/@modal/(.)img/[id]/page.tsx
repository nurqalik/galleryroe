import { Modal } from "./modal";
import FullImages from "~/app/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid images ID");

  return (
    <Modal>
      <FullImages id={idAsNumber} />
    </Modal>
  );
}
