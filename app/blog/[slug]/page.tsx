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
    <div>
      <h1>{post?.title}</h1>
      <ViewCounter pageId={post?.pageId} slug={slug} />
    </div>
  );
};

export default page;
