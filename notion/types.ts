import {
  BlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

interface PageProps {
  pageId: string;
  title: string;
  cover: string | undefined;
  slug: string;
  publishDate: string;
  category: string;
  tags: string[];
}

type FilteredBlockResponse = Omit<
  BlockObjectResponse,
  | "object"
  | "parent"
  | "created_time"
  | "last_edited_time"
  | "created_by"
  | "last_edited_by"
  | "archived"
  | "in_trash"
>;

type ApiColor =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red"
  | "default_background"
  | "gray_background"
  | "brown_background"
  | "orange_background"
  | "yellow_background"
  | "green_background"
  | "blue_background"
  | "purple_background"
  | "pink_background"
  | "red_background";

export type { PageProps, FilteredBlockResponse };
