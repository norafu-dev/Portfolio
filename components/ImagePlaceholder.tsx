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
  let base64;
  if (url) base64 = await getBase64(url);

  return (
    <Image
      src={url || placeholder}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      className={className}
      fill
    />
  );
};

export default ImagePlaceholder;
