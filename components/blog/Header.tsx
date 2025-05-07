import ViewCounter from "@/components/blog/ViewCounter";
import { PageProps } from "@/notion/types";
import ImagePlaceholder from "../ImagePlaceholder";

const Header = ({ post }: { post: PageProps }) => {
  const { title, pageId, slug, cover } = post;
  return (
    <header>
      <h1 className="text-xl font-medium text-center sm:text-2xl">{title}</h1>
      <section className="text-sm text-end sm:text-base">
        <ViewCounter pageId={pageId} slug={slug} />
      </section>
      {cover && (
        <ImagePlaceholder
          url={cover}
          alt={title}
          containerClassName="relative w-full h-auto rounded-2xl overflow-hidden my-6"
        />
      )}
    </header>
  );
};

export default Header;
