import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/c27bf877-04d4-424a-bd7c-0cbf9eebf977-ruzroe.png",
  "https://utfs.io/f/735fe3b7-0cec-4f3a-8e4d-79039286952b-fgflwh.jpg",
  "https://utfs.io/f/94b86ec1-e98a-4972-ba25-5764cd9c8548-tg5o7c.jpg",
  "https://utfs.io/f/b7757787-1487-425e-a976-a8946bd71a52-vjye2r.jpg",
  "https://utfs.io/f/5c32e28a-e5dc-4b58-a877-9516c2c47529-yzlz6h.jpg",
];

const mockImages = mockUrls.map((url, index) => ({ url, id: index + 1 }));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
