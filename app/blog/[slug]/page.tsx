import { Suspense } from "react";
import { notFound } from "next/navigation";
import getDatabase from "@/notion/utils/api/getDatabase";
import Header from "@/components/blog/Header";
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
      <div className="h-20"></div>
      <Header post={post} />
      <Suspense
        fallback={
          <div className="my-8 space-y-4">
            <div className="w-3/4 h-6 bg-gray-100 rounded animate-pulse" />
            <div className="w-1/2 h-6 bg-gray-100 rounded animate-pulse" />
            <div className="h-24 bg-gray-100 rounded animate-pulse" />
            <div className="w-2/3 h-6 bg-gray-100 rounded animate-pulse" />
          </div>
        }
      >
        <Renderer pageId={post?.pageId} />
      </Suspense>
    </article>
  );
};

export default page;
