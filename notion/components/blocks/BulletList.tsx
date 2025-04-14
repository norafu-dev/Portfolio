import { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "./RichText";

const BulletList = ({
  bulleted_list,
}: {
  bulleted_list: BulletedListItemBlockObjectResponse[];
}) => {
  return (
    <ul className="list-disc pl-8 mb-2 space-y-1">
      {bulleted_list.map((item) => (
        <li key={item.id} className="pl-1">
          {item.bulleted_list_item.rich_text.map((text, index) => (
            <RichText key={index} {...text} />
          ))}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
