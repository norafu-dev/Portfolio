import getDatabase from "@/notion/lib/getDatabase";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const database = await getDatabase();
  const post = database.find((post) => post.slug === slug);
  return <div>{post?.title}</div>;
};

export default page;
