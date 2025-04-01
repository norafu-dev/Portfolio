import getDatabase from "@/notion/lib/getDatabase";

const page = async () => {
  const database = await getDatabase();

  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-col gap-8 w-md">
        {database.map((post) => {
          return (
            <li key={post.pageId} className="space-y-3">
              <div className="flex justify-between">
                <p className="border px-5 rounded-lg">{post.category}</p>
                <p>{post.publishDate}</p>
              </div>
              <h3 className="text-lg">{post.title}</h3>
              <p className="text-right"># {post.tags.join(", ")}</p>
              <div className="h-[1px] border"></div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default page;
