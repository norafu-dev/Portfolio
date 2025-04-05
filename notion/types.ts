interface PageProps {
  pageId: string;
  title: string;
  cover: string | undefined;
  slug: string;
  publishDate: string;
  category: string;
  tags: string[];
}

export type { PageProps };
