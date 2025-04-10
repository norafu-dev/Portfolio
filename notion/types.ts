interface PageProps {
  pageId: string;
  title: string;
  cover: string | undefined;
  slug: string;
  publishDate: string;
  category: string;
  tags: string[];
}

interface BlockProps {
  id: string;
  has_children: boolean;
  type: string;
}

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

export type { PageProps };
