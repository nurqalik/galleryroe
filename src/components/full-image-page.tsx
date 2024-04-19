import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/queries";

export default async function FullImages(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <>
    {image ? <div className="flex h-full w-full min-w-0">
      <div className="shrink w-full flex items-center justify-center">
        <Image
          src={image.url}
          alt={image.name}
          width={1000}
          height={1000}
          className="h-screen object-contain"
        />
      </div>
      <div className="flex grow-0 w-80 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          <span>Uploaded By: </span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Create On: </span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div> : null}
    </>
  );
}
