// import dynamic from "next/dynamic";
import { FilteredBlockResponse } from "@/notion/types";

import { Heading1, Heading2, Heading3 } from "@/notion/blocks/Headings";
import Paragraph from "@/notion/blocks/Paragraph";
import Img from "@/notion/blocks/Img";

export const blockComponents = {
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  paragraph: Paragraph,
  image: Img,
};

export const renderBlock = (block: FilteredBlockResponse) => {
  const BlockComponent =
    blockComponents[block.type as keyof typeof blockComponents];

  if (!BlockComponent) {
    return (
      <div>
        not supported block type:
        <span className="text-rose-400"> {block.type}</span>
      </div>
    );
  }

  return <BlockComponent {...(block as any)} />;
};
