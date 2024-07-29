import { db } from "~/server/db";

export const dynamic = "force-dynamic";


const mockUrls = [
  'https://utfs.io/f/da006ba4-fc8f-46bd-9999-b4632a6bd9ec-qxv1t2.jpg',
  'https://utfs.io/f/db052bdc-f8d0-457a-afce-d674fc2a1600-j2mo3i.jpg',
  'https://utfs.io/f/90e6d436-a859-4e7e-840b-7a10fbed70e6-5c3bgw.jpg',
  'https://utfs.io/f/727a523c-6a20-4c89-b3bc-52d3436c3413-tiekz0.jpg'
]

const mockImages = mockUrls.map((url, index) => (
  {
    id: index + 1,
    url
  }
))

export default async function HomePage() {

  const posts = await db.query.posts.findMany();


  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + '-' + index} className="w-48">
            <img src={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
