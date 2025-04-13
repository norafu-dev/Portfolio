import { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "./RichText";

const Paragraph = (data: ParagraphBlockObjectResponse) => {
  return (
    <p className="notion-paragraph">
      {data.paragraph.rich_text.map((item, index) => {
        return <RichText key={index} {...item} />;
      })}
    </p>
  );
};

export default Paragraph;
