import { NumberedListItemBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import RichText from "./RichText";

interface NumberedListProps {
  id: string;
  type: "numbered_list";
  numbered_list: NumberedListItemBlockObjectResponse[];
}

const NumberedList = ({ numbered_list }: NumberedListProps) => {
  return (
    <ol className="pl-8 mb-3 space-y-2 list-decimal">
      {numbered_list.map((item) => (
        <li key={item.id} className="pl-1">
          {item.numbered_list_item.rich_text.map((text, index) => (
            <RichText key={index} {...text} />
          ))}
        </li>
      ))}
    </ol>
  );
};

export default NumberedList;
