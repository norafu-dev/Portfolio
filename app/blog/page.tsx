import getDatabase from "@/notion/lib/getDatabase";
import Link from "next/link";

const page = async () => {
  const database = await getDatabase();

  return (
    <main className="flex flex-col items-center">
      <ul className="flex flex-col gap-8 w-md">
        {database.map((post) => {
          return (
            <li key={post.pageId} className="space-y-3">
              <div className="flex justify-between">
                <p className="flex items-center px-3 text-xs border rounded-lg">
                  {post.category}
                </p>
                <p>{post.publishDate}</p>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3>{post.title}</h3>
              </Link>
              <p className="text-xs text-right"># {post.tags.join(", ")}</p>
              <div className="h-[1px] border"></div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default page;
