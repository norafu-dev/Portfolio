/**
 * 将Notion API返回的页面封面图片URL转换为永久访问链接
 * @param page Notion API返回的页面对象
 * @returns 处理后的永久图片URL或undefined
 */
export const mapNotionImageUrl = (page: {
  id: string;
  cover?: {
    type: string;
    file?: {
      url: string;
    };
    external?: {
      url: string;
    };
  };
}): string | undefined => {
  // 检查是否存在有效的页面ID和封面
  if (!page?.id || !page?.cover?.type) {
    return undefined;
  }

  if (page.cover.type === "external" && page.cover.external?.url) {
    // 处理外部链接类型
    return page.cover.external.url;
  }

  let url: string | undefined;

  // 根据封面类型获取URL
  if (page.cover.type === "file" && page.cover.file?.url) {
    // 处理文件类型
    url = page.cover.file.url;
  } else {
    return undefined;
  }

  // 数据URL直接返回
  if (url.startsWith("data:")) {
    return url;
  }

  // 检查是否为已签名的AWS URL
  try {
    const u = new URL(url);

    if (
      u.pathname.startsWith("/secure.notion-static.com") &&
      u.hostname.endsWith(".amazonaws.com")
    ) {
      if (
        u.searchParams.has("X-Amz-Credential") &&
        u.searchParams.has("X-Amz-Signature") &&
        u.searchParams.has("X-Amz-Algorithm")
      ) {
        // 所有URL都走Notion代理，不再特殊处理AWS签名URL
      }
    }
  } catch {
    // 忽略无效URL
  }

  // 处理相对路径
  if (url.startsWith("/images")) {
    url = `https://www.notion.so${url}`;
  }

  // 构建Notion代理URL
  url = `https://www.notion.so${
    url.startsWith("/image") ? url : `/image/${encodeURIComponent(url)}`
  }`;

  // 添加必要的查询参数
  try {
    const notionImageUrlV2 = new URL(url);

    // 对于数据库中的页面，使用'block'作为table类型
    notionImageUrlV2.searchParams.set("table", "block");
    notionImageUrlV2.searchParams.set("id", page.id);
    notionImageUrlV2.searchParams.set("cache", "v2");

    return notionImageUrlV2.toString();
  } catch {
    // 如果构建URL失败，返回原始处理后的URL
    return url;
  }
};
