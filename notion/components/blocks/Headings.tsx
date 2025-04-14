import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import RichText from "./RichText";

const Heading1 = (data: Heading1BlockObjectResponse) => {
  return (
    <h1 className="notion-heading-1">
      {data.heading_1.rich_text.map((item, index) => {
        if (item.type === "text") {
          return <RichText key={index} {...item} />;
        }
        return item.plain_text;
      })}
    </h1>
  );
};

const Heading2 = (data: Heading2BlockObjectResponse) => {
  return (
    <h2 className="notion-heading-2">
      {data.heading_2.rich_text.map((item, index) => {
        if (item.type === "text") {
          return <RichText key={index} {...item} />;
        }
        return item.plain_text;
      })}
    </h2>
  );
};

const Heading3 = (data: Heading3BlockObjectResponse) => {
  return (
    <h3 className="notion-heading-3">
      {data.heading_3.rich_text.map((item, index) => {
        if (item.type === "text") {
          return <RichText key={index} {...item} />;
        }
        return item.plain_text;
      })}
    </h3>
  );
};

export { Heading1, Heading2, Heading3 };
