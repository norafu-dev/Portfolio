import getDatabase from "@/notion/lib/getDatabase";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export default async function Home() {
  const database = await getDatabase();

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-4xl">Hello Notion</h1>
      <ul className="flex flex-col gap-4">
        {database.map((item) => {
          const { id, properties } = item as PageObjectResponse;

          return (
            <li key={id} className="flex gap-4">
              <div>{properties.Title?.title[0]?.plain_text}</div>
              <div>{properties.Published?.date?.start}</div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
