import { BulletedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "./RichText";

const BulletList = ({
  bulleted_list,
}: {
  bulleted_list: BulletedListItemBlockObjectResponse[];
}) => {
  return (
    <ul className="pl-8 mb-3 space-y-2 list-disc">
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
