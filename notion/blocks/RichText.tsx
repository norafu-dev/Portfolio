import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export default (data: TextRichTextItemResponse) => {
  let result = data.plain_text;

  if (data.href) {
    return (
      <a href={data.href} className="notion-text-href">
        {result}
      </a>
    );
  }

  if (data.annotations.color !== "default") {
    return (
      <span className={`notion-color-${data.annotations.color}`}>{result}</span>
    );
  }

  if (data.annotations.bold) {
    return <b className="text-bold">{result}</b>;
  }

  if (data.annotations.italic) {
    return <i className="italic">{result}</i>;
  }

  if (data.annotations.strikethrough) {
    return <s className="line-through">{result}</s>;
  }

  if (data.annotations.underline) {
    return <u className="underline">{result}</u>;
  }

  if (data.annotations.code) {
    return <code className="notion-text-code">{result}</code>;
  }

  return result;
};
