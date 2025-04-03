import getDatabase from "@/notion/lib/getDatabase";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const database = await getDatabase();

  // decode non-encoded category
  const decodedCategory = decodeURIComponent(params.category);

  const posts = database.filter((post) => {
    return post.category === decodedCategory;
  });

  return (
    <div className="flex flex-col gap-4 justify-center">
      <h1 className="text-2xl font-bold">Category: {decodedCategory}</h1>
      <p>{posts.length} posts</p>

      <div>
        {posts.map((post) => (
          <div key={post.title}>{post.title}</div>
        ))}
      </div>
    </div>
  );
}
