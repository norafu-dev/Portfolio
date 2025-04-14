import getDatabase from "@/notion/utils/api/getDatabase";

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const database = await getDatabase();
  const { tag } = await params;

  // decode non-encoded category
  const decodedTag = decodeURIComponent(tag);

  const posts = database.filter((post) => {
    return post.tags.includes(decodedTag);
  });

  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="text-2xl font-bold">Tag: {decodedTag}</h1>
      <p>{posts.length} posts</p>

      <div>
        {posts.map((post) => (
          <div key={post.title}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
