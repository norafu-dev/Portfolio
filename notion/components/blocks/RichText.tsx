import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export default (data: RichTextItemResponse) => {
  let result = data.plain_text;

  if (data.href && data.type !== "mention") {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={data.href}
        className="cursor-pointer hover:text-indigo-400"
      >
        {result}
      </a>
    );
  }

  if (data.type === "mention" && data.mention?.type === "link_mention") {
    const title = data.mention.link_mention.title;
    const icon = data.mention.link_mention.icon_url;
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={data.mention.link_mention.href}
        className="flex items-center gap-2 transition-all duration-300 cursor-pointer hover:text-indigo-400 w-fit"
      >
        {icon && (
          <span className="block w-5 h-5 overflow-hidden rounded-md">
            <img src={icon} alt={title || result} />
          </span>
        )}
        {title || result}
      </a>
    );
  }

  if (data.annotations.color !== "default") {
    return (
      <span className={`notion-color-${data.annotations.color}`}>{result}</span>
    );
  }

  if (data.annotations.bold) {
    return <b className="text-semibold">{result}</b>;
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
    return (
      <code className="p-1 mx-0.5 text-sm text-indigo-400 bg-gray-100 rounded-md">
        {result}
      </code>
    );
  }

  return result;
};
