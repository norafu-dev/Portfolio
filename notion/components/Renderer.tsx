import { Suspense } from "react";
import getBlocks from "@/notion/utils/api/getBlocks";
import Toggle from "@/notion/components/blocks/Toggle";
import { renderBlock } from "@/notion/utils/blocks/registry";
import { processBlocks } from "@/notion/utils/blocks/processBlocks";

const Renderer = async ({ pageId }: { pageId: string }) => {
  const getBlocksByPageId = getBlocks(pageId);
  const blocks = await getBlocksByPageId();
  const processedBlocks = processBlocks(blocks);
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
          return <li key={index}>{type}</li>;
        })}
      </ul>

      {/* Block Renderers */}
      {processedBlocks.map((block) => {
        return (
          <Suspense
            key={block.id}
            fallback={
              <div className="h-12 bg-gray-100 animate-pulse rounded-md my-2" />
            }
          >
            {renderBlock(block)}
          </Suspense>
        );
      })}
      {/* Blocks Data */}
      <Toggle title="Blocks">
        <pre>{JSON.stringify(blocks, null, 2)}</pre>
      </Toggle>
    </div>
  );
};

export default Renderer;
