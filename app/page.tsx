import getDatabase from "@/notion/lib/getDatabase";

export default async function Home() {
  const database = await getDatabase();

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl">Hello Notion</h1>
      <pre>{JSON.stringify(database, null, 2)}</pre>
    </main>
  );
}
