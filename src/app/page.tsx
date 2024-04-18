import Image from "next/image";
import { db } from "~/server/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getImages } from "~/server/queries";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Images = async() => {

  const images = await getImages(); 

  return (
    <div className="flex flex-wrap gap-4 w-full justify-center p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-48 flex-col">
          <Link href={`/img/${image.id}`}>
          <Image
            alt={image.name}
            width={480}
            height={480}
            className="w-48 object-cover"
            src={image.url}
          />
          </Link>
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
