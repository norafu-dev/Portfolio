import getBlocks from "@/notion/lib/getBlocks";
import filteredData from "@/notion/data/data";

const Renderer = async ({ pageId }: { pageId: string }) => {
  const getBlocksByPageId = getBlocks(pageId);
  const blocks = await getBlocksByPageId();
  const blockTypes: string[] = [];

  return (
    <div>
      {blocks.map((block) => {
        if ("type" in block && !blockTypes.includes(block.type)) {
          blockTypes.push(block.type);
        }
        return null;
      })}
      {blockTypes.map((type, index) => {
        return <div key={index}>{type}</div>;
      })}
      <pre>{JSON.stringify(filteredData, null, 2)}</pre>
    </div>
  );
};

export default Renderer;
