import { idToUuid } from "@/lib/utils";
import notion from "@/notion/lib/client";
import { unstable_cache } from "next/cache";
import { PageProps } from "../types";

const databaseId = idToUuid(process.env.NOTION_DATABASE_ID);

// use unstable_cache to cache the database results, use cache tag to invalidate the cache
const getDatabase = unstable_cache(
  async (): Promise<PageProps[]> => {
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

    const results = response.results.map((item: any) => {
      return {
        pageId: item.id,
        title: item.properties.Title.title[0].plain_text,
        slug: item.properties.Slug.rich_text[0].plain_text,
        publishDate: item.properties.Published.date?.start,
        category: item.properties.Category.select?.name,
        tags: item.properties.Tags.multi_select.map((tag: any) => tag.name),
      };
    });

    return results;
  },
  [databaseId],
  {
    tags: [databaseId],
    revalidate: 60 * 60 * 24,
  }
);

export default getDatabase;
