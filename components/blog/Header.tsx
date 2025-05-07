import ViewCounter from "@/components/blog/ViewCounter";
import { PageProps } from "@/notion/types";
import ImagePlaceholder from "../ImagePlaceholder";

const Header = ({ post }: { post: PageProps }) => {
  const { title, pageId, slug, cover } = post;
  return (
    <header>
      <h1 className="text-2xl font-medium text-center">{title}</h1>
      <section className="text-end">
        <ViewCounter pageId={pageId} slug={slug} />
      </section>
      {cover && (
        <ImagePlaceholder
          url={cover}
          alt={title}
          containerClassName="relative w-2xl h-auto rounded-2xl overflow-hidden my-6"
        />
      )}
    </header>
  );
};

export default Header;
