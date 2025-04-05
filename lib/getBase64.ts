import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    console.log("Failed to fetch image", error);
    return "@/public/placeholder.webp";
  }
};

export default getBase64;
