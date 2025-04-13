import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    const buffer = await response.arrayBuffer();

    const {
      base64,
      metadata: { width, height },
    } = await getPlaiceholder(Buffer.from(buffer));

    const aspectRatio = width / height;

    return { base64, aspectRatio };
  } catch (error) {
    console.log("Failed to fetch image", error);
    return "@/public/images/placeholder.webp";
  }
};

export default getBase64;
