import notion from "@/notion/lib/client";
import { unstable_cache } from "next/cache";

// use unstable_cache to cache the database, use cache tag to invalidate the cache
const getDatabase = unstable_cache(
  async () => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID as string,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Published Date",
          direction: "descending",
        },
      ],
    });

    return response.results;
  },
  ["notion-database"],
  { revalidate: 60 * 60 * 24 }
);

export default getDatabase;
