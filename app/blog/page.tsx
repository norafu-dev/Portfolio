import getDatabase from "@/notion/lib/getDatabase";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const page = async () => {
  const database = await getDatabase();

  return (
    <main className="flex flex-col items-center max-w-2xl mx-auto">
      <ul className="flex items-start gap-4">
        <li>
          <button>Latest</button>
        </li>
        <li>
          <button>Trending</button>
        </li>
      </ul>
      <ul className="flex flex-col w-full gap-4">
        {database.map((post) => {
          return (
            <li
              key={post.pageId}
              className="flex justify-between py-4 border-b border-gray-400 gap-x-6 group"
            >
              <figure className="relative w-1/4 h-24 overflow-hidden rounded-xl">
                <ImagePlaceholder
                  url={post.cover}
                  alt={post.title}
                  className="object-cover transition-all duration-300 group-hover:scale-105"
                />
              </figure>
              <div className="flex flex-col justify-between flex-1">
                {/* category and publish date */}
                <div className="flex justify-between text-sm">
                  <Link href={`/blog/category/${post.category}`}>
                    <p className="flex items-center px-3 py-0.5 text-xs border rounded-sm">
                      {post.category}
                    </p>
                  </Link>
                  <p>{post.publishDate}</p>
                </div>
                {/* title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3>{post.title}</h3>
                </Link>
                {/* tags */}
                <ul className="flex justify-end gap-2 text-sm">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <Link href={`/blog/tag/${tag}`}>#{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default page;
