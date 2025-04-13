// import dynamic from "next/dynamic";
import { FilteredBlockResponse } from "@/notion/types";
import { ProcessedBlock } from "@/notion/processBlocks";

import { Heading1, Heading2, Heading3 } from "@/notion/blocks/Headings";
import Paragraph from "@/notion/blocks/Paragraph";
import Img from "@/notion/blocks/Img";
import NumberedList from "@/notion/blocks/NumberList";
import BulletList from "@/notion/blocks/BulletList";

export const blockComponents = {
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  paragraph: Paragraph,
  image: Img,
  numbered_list: NumberedList,
  bulleted_list: BulletList,
};

export const renderBlock = (block: ProcessedBlock) => {
  const BlockComponent =
    blockComponents[block.type as keyof typeof blockComponents];

  if (!BlockComponent) {
    console.warn(`Block type not supported: ${block.type}`);
    return (
      <div>
        not supported block type:
        <span className="text-rose-400"> {block.type}</span>
      </div>
    );
  }

  return <BlockComponent {...(block as any)} />;
};
