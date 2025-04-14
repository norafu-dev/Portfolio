import { Suspense } from "react";
import { notFound } from "next/navigation";
import getDatabase from "@/notion/utils/api/getDatabase";
import ViewCounter from "@/components/ViewCounter";
import Renderer from "@/notion/components/Renderer";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const database = await getDatabase();
  const post = database.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <header className="text-center text-2xl">{post?.title}</header>
      <section className="text-end">
        <ViewCounter pageId={post?.pageId} slug={slug} />
      </section>

      <Suspense
        fallback={
          <div className="space-y-4 my-8">
            <div className="h-6 bg-gray-100 animate-pulse rounded w-3/4" />
            <div className="h-6 bg-gray-100 animate-pulse rounded w-1/2" />
            <div className="h-24 bg-gray-100 animate-pulse rounded" />
            <div className="h-6 bg-gray-100 animate-pulse rounded w-2/3" />
          </div>
        }
      >
        <Renderer pageId={post?.pageId} />
      </Suspense>
    </article>
  );
};

export default page;
