import notion from "@/notion/lib/client";
import { unstable_cache } from "next/cache";
import {
  PartialBlockObjectResponse,
  BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const getBlocks = (pageId: string) =>
  unstable_cache(
    async (): Promise<(PartialBlockObjectResponse | BlockObjectResponse)[]> => {
      const response = await notion.blocks.children.list({
        block_id: pageId,
      });

      console.log("fetch blocks from notion");

      // console.dir(response.results, { depth: null });

      // const results = response.results.map((item: any) => {
      //   return {
      //     pageId: item.id,
      //     title: item.properties.Title.title[0].plain_text,
      //     slug: item.properties.Slug.rich_text[0].plain_text,
      //     cover: mapNotionImageUrl({ id: item.id, cover: item.cover }),
      //     publishDate: item.properties.Published.date?.start,
      //     category: item.properties.Category.select?.name,
      //     tags: item.properties.Tags.multi_select.map((tag: any) => tag.name),
      //   };
      // });

      // console.dir(response.results, { depth: null });

      return response.results;
    },
    [pageId],
    {
      tags: [pageId],
      revalidate: 60 * 60 * 24,
    }
  );

export default getBlocks;
