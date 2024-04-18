import Image from "next/image";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";

export const dynamic = "force-dynamic";

const Images = async() => {

  const images = await getImages(); 

  return (
    <div className="flex flex-wrap gap-4 w-full justify-center md:justify-start">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Image
            alt={image.name}
            width={300}
            height={300}
            className="w-48 object-cover"
            src={image.url}
          />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
};

export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
