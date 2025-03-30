import getDatabase from "@/notion/lib/getDatabase";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

interface TitleProperty {
  type: "title";
  title: Array<{ plain_text: string }>;
}

interface DateProperty {
  type: "date";
  date: { start: string } | null;
}

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
              <div>
                {(properties.Title as unknown as TitleProperty)?.title?.[0]
                  ?.plain_text || "无标题"}
              </div>
              <div>
                {(properties.Published as unknown as DateProperty)?.date
                  ?.start || "未发布"}
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
