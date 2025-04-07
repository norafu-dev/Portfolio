import getDatabase from "@/notion/lib/getDatabase";
import ViewCounter from "@/components/ViewCounter";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const database = await getDatabase();
  const post = database.find((post) => post.slug === slug);
  if (!post) {
    return <div>Post not found</div>;
  }
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-center text-2xl">{post?.title}</h1>
      <div className="text-end">
        <ViewCounter pageId={post?.pageId} slug={slug} />
      </div>
    </div>
  );
};

export default page;
