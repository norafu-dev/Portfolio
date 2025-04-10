import notion from "@/notion/lib/client";
import { unstable_cache } from "next/cache";
import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const getBlocks = (pageId: string) =>
  unstable_cache(
    async (): Promise<> => {
      const response = await notion.blocks.children.list({
        block_id: pageId,
      });

      const results = response.results.map((item: any) => {
        const {
          object,
          parent,
          created_time,
          last_edited_time,
          created_by,
          last_edited_by,
          archived,
          in_trash,
          ...rest
        } = item;
        return rest;
      });

      return results;
    },
    [pageId],
    {
      tags: [pageId],
      revalidate: 60 * 60 * 24,
    }
  );

export default getBlocks;
