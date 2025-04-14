import { Suspense } from "react";
import getBlocks from "@/notion/utils/api/getBlocks";
import Toggle from "@/notion/components/blocks/Toggle";
import { renderBlock } from "@/notion/utils/blocks/registry";
import { processBlocks } from "@/notion/utils/blocks/processBlocks";

const Renderer = async ({ pageId }: { pageId: string }) => {
  const getBlocksByPageId = getBlocks(pageId);
  const blocks = await getBlocksByPageId();
  const processedBlocks = processBlocks(blocks);

  return (
    <div className="overflow-x-hidden max-w-screen">
      {/* Block Renderers */}
      {processedBlocks.map((block) => {
        return (
          <Suspense
            key={block.id}
            fallback={
              <div className="h-12 my-2 bg-gray-100 rounded-md animate-pulse" />
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
