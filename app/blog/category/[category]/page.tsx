import getDatabase from "@/notion/lib/getDatabase";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const database = await getDatabase();

  // decode non-encoded category
  const decodedCategory = decodeURIComponent(category);

  const posts = database.filter((post) => {
    return post.category === decodedCategory;
  });

  return (
    <div className="flex flex-col justify-center gap-4">
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
