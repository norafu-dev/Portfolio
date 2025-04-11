import getBlocks from "@/notion/lib/getBlocks";
import Toggle from "@/notion/blocks/Toggle";

const Renderer = async ({ pageId }: { pageId: string }) => {
  const getBlocksByPageId = getBlocks(pageId);
  const blocks = await getBlocksByPageId();
  const blockTypes: string[] = [];
  blocks.map((block) => {
    if ("type" in block && !blockTypes.includes(block.type)) {
      blockTypes.push(block.type);
    }
  });

  return (
    <div className="max-w-screen overflow-x-hidden">
      {/* Block Types */}
      <ul>
        {blockTypes.map((type, index) => {
          return <div key={index}>{type}</div>;
        })}
      </ul>
      {/* Blocks Data */}
      <Toggle title="Blocks">
        <pre>{JSON.stringify(blocks, null, 2)}</pre>
      </Toggle>
    </div>
  );
};

export default Renderer;
