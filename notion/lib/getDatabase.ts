import notion from "@/notion/lib/client";
import { unstable_cache } from "next/cache";

const databaseId = process.env.NOTION_DATABASE_ID as string;

// use unstable_cache to cache the database, use cache tag to invalidate the cache
const getDatabase = unstable_cache(
  async () => {
    const response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Published",
          direction: "descending",
        },
      ],
    });

    return response.results;
  },
  [databaseId],
  {
    tags: ["notion-database"],
    revalidate: 60 * 60 * 24,
  }
);

export default getDatabase;
