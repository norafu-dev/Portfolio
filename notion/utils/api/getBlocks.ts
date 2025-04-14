import notion from "@/notion/utils/api/client";
import { unstable_cache } from "next/cache";
import { FilteredBlockResponse } from "@/notion/types";

const getBlocks = (pageId: string) =>
  unstable_cache(
    async (): Promise<FilteredBlockResponse[]> => {
      const response = await notion.blocks.children.list({
        block_id: pageId,
      });

      // console.log("fetch blocks from notion: " + pageId);

      const results = response.results.map((item: any) => {
        const {
          object,
          // parent,
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

      console.dir(results, { depth: null });
      return results;
    },
    [pageId],
    {
      tags: [pageId],
      revalidate: 60 * 60 * 24,
    }
  );

export default getBlocks;
