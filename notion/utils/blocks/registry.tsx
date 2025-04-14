// import dynamic from "next/dynamic";
import { ProcessedBlock } from "@/notion/utils/blocks/processBlocks";

import {
  Heading1,
  Heading2,
  Heading3,
} from "@/notion/components/blocks/Headings";
import Paragraph from "@/notion/components/blocks/Paragraph";
import Img from "@/notion/components/blocks/Img";
import NumberedList from "@/notion/components/blocks/NumberList";
import BulletList from "@/notion/components/blocks/BulletList";
import Code from "@/notion/components/blocks/Code";

export const blockComponents = {
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  paragraph: Paragraph,
  image: Img,
  numbered_list: NumberedList,
  bulleted_list: BulletList,
  code: Code,
};

export const renderBlock = (block: ProcessedBlock) => {
  const BlockComponent =
    blockComponents[block.type as keyof typeof blockComponents];

  if (!BlockComponent) {
    console.warn(`Block type not supported: ${block.type}`);
    return (
      <div>
        not supported block type:
        <span className="notion-color-red"> {block.type}</span>
      </div>
    );
  }

  return <BlockComponent {...(block as any)} />;
};
