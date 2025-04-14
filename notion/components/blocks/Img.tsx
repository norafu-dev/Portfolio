import { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { mapNotionImageUrl } from "@/notion/utils/api/mapImageUrl";

const Img = (data: ImageBlockObjectResponse) => {
  const imageUrl = mapNotionImageUrl({ id: data.id, cover: data.image });

  const caption =
    data.image.caption.length > 0
      ? data.image.caption.map((item) => item.plain_text).join("")
      : "";

  return (
    <div className="mb-2">
      <ImagePlaceholder
        url={imageUrl}
        alt={caption || "Notion image"}
        containerClassName="relative w-full rounded-md overflow-hidden"
        imageClassName="object-contain"
      />
      {caption && (
        <figcaption className="mt-1 text-sm text-center text-gray-500">
          {caption}
        </figcaption>
      )}
    </div>
  );
};

export default Img;
