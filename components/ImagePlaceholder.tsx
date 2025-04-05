import getBase64 from "@/lib/getBase64";
import Image from "next/image";
import placeholder from "@/public/images/placeholder.webp";

const ImagePlaceholder = async ({
  url,
  alt,
  className,
}: {
  url: string | undefined;
  alt: string;
  className?: string;
}) => {
  if (!url)
    return (
      <Image
        src={placeholder}
        alt="placeholder"
        placeholder="blur"
        className={className}
        fill
      />
    );
  const base64 = await getBase64(url);
  return (
    <Image
      src={url}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      className={className}
      fill
    />
  );
};

export default ImagePlaceholder;
