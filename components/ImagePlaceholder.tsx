import getBase64 from "@/lib/getBase64";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.webp";

const ImagePlaceholder = async ({
  url,
  alt,
  containerClassName,
  imageClassName,
}: {
  url: string | undefined;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
}) => {
  let base64;
  let aspectRatio = 16 / 9; // 默认宽高比

  if (url) {
    const data = await getBase64(url);
    console.log(data);
    base64 = typeof data === "string" ? data : data.base64;
    // 如果获取到了宽高比，则使用它
    if (typeof data !== "string" && data.aspectRatio) {
      aspectRatio = data.aspectRatio;
    }
  }

  return (
    <figure
      className={containerClassName || "w-full"}
      style={{
        aspectRatio: aspectRatio,
      }}
    >
      <Image
        src={url || placeholder}
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
        className={imageClassName || "object-cover"}
        fill
      />
    </figure>
  );
};

export default ImagePlaceholder;
