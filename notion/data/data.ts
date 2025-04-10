import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const deleteUnnecessaryProps = (obj: BlockObjectResponse) => {
  const {
    object,
    parent,
    created_time,
    last_edited_time,
    created_by,
    last_edited_by,
    archived,
    in_trash,
    ...rest
  } = obj;
  return rest;
};

const data = [
  {
    object: "block",
    id: "1d1e1972-f33f-80c2-a532-fa02b100bc2c",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:16:00.000Z",
    last_edited_time: "2025-04-10T01:16:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "标题一二三",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "标题一二三",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-803f-ad6a-ec6e9640b3c2",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:16:00.000Z",
    last_edited_time: "2025-04-10T01:16:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "段落",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "段落",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80d2-9dc5-d0d5abaa8a4b",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:16:00.000Z",
    last_edited_time: "2025-04-10T01:16:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "加粗，下划线，斜体，删除线，代码",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "加粗，下划线，斜体，删除线，代码",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80a3-b0b0-f5579d23eb10",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:16:00.000Z",
    last_edited_time: "2025-04-10T01:16:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "图片",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "图片",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80e2-b926-c2b86b5362be",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:33:00.000Z",
    last_edited_time: "2025-04-10T01:34:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "代码块",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "代码块",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80ea-8a91-ce4b37ddd26e",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:16:00.000Z",
    last_edited_time: "2025-04-10T01:17:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "折叠",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "折叠",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8085-b95d-ee87836ee595",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:33:00.000Z",
    last_edited_time: "2025-04-10T01:39:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "metion",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "metion",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80b4-8640-c783851c792a",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:33:00.000Z",
    last_edited_time: "2025-04-10T01:40:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "bookmark",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "bookmark",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80f7-9b3e-e36daefcfe91",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:17:00.000Z",
    last_edited_time: "2025-04-10T01:17:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "bullet list",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "bullet list",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80bd-bb59-d2ee6957f9f1",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:17:00.000Z",
    last_edited_time: "2025-04-10T01:17:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "number list",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "number list",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8004-9139-c4a7a920ef67",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:17:00.000Z",
    last_edited_time: "2025-04-10T01:17:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "check",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "check",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8025-b8f3-fab012ab66bd",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:38:00.000Z",
    last_edited_time: "2025-04-10T01:38:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "文字颜色",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "文字颜色",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-805c-be53-f2c2507359ec",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:38:00.000Z",
    last_edited_time: "2025-04-10T01:38:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "引用",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "引用",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80c6-8dae-fc48139e35ba",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:38:00.000Z",
    last_edited_time: "2025-04-10T01:38:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "callout",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "callout",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-809a-a1e1-d34fbc105496",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:40:00.000Z",
    last_edited_time: "2025-04-10T01:40:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "emoji",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "emoji",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-8008-b9bf-f8a901f9b250",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:35:00.000Z",
    last_edited_time: "2025-04-03T14:35:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_1",
    heading_1: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "标题1",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "标题1",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-8009-aa7c-e79962569006",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:35:00.000Z",
    last_edited_time: "2025-04-03T14:35:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_2",
    heading_2: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "标题2",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "标题2",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-800d-b2a9-c8557ad94b0a",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:35:00.000Z",
    last_edited_time: "2025-04-03T14:35:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "heading_3",
    heading_3: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "标题3",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "标题3",
          href: null,
        },
      ],
      is_toggleable: false,
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-8036-a5be-c4363dc806c8",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:35:00.000Z",
    last_edited_time: "2025-04-10T01:13:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "段落，",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "段落，",
          href: null,
        },
        {
          type: "text",
          text: {
            content:
              "手术果实，理论上最符合描述的果实，考虑到几百年这个跨度，手术果实在古代有其他名字也很合理。但是，由于手术果实早就有50亿的估价，因此不管改不改描述这都是个炙手可热的果实，又不太符合沉寂几百年的说法。",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "手术果实，理论上最符合描述的果实，考虑到几百年这个跨度，手术果实在古代有其他名字也很合理。但是，由于手术果实早就有50亿的估价，因此不管改不改描述这都是个炙手可热的果实，又不太符合沉寂几百年的说法。",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-8018-8a97-c8664a9b615a",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:36:00.000Z",
    last_edited_time: "2025-04-10T01:12:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "加粗",
            link: null,
          },
          annotations: {
            bold: true,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "加粗",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-8050-ae8a-e5f27a327009",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:36:00.000Z",
    last_edited_time: "2025-04-10T01:12:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "下划线",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: true,
            code: false,
            color: "default",
          },
          plain_text: "下划线",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-80da-914d-c385262d2a55",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:36:00.000Z",
    last_edited_time: "2025-04-10T01:12:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "斜体",
            link: null,
          },
          annotations: {
            bold: false,
            italic: true,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "斜体",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-801a-937f-d2669c6830f7",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:13:00.000Z",
    last_edited_time: "2025-04-10T01:13:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "删除线",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: true,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "删除线",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-805c-b9a1-c3564b4d1614",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:13:00.000Z",
    last_edited_time: "2025-04-10T01:14:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "代码",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: true,
            color: "default",
          },
          plain_text: "代码",
          href: null,
        },
        {
          type: "text",
          text: {
            content: " ",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: " ",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1cae1972-f33f-804f-8f8d-e616e260fa0b",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-03T14:34:00.000Z",
    last_edited_time: "2025-04-10T01:16:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "image",
    image: {
      caption: [],
      type: "file",
      file: {
        url: "https://prod-files-secure.s3.us-west-2.amazonaws.com/7c449e1f-d499-4c44-ab38-4431623221e8/4c24bc16-b6d5-4bdc-9abb-6dde0ae7cc7c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7CRXKJA%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T014357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCIKm7SCHydhmPeGePncnksO08eVdHhe0oaG7Mn3gJt5QIgeZmpBA7r4lha%2FQXWbRbVocexC75%2FyFCyMQqcRBEg2FgqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOpnsKH8aMiEV1jQUyrcAw5PExz3nwjbrp3lmOAAIatcqHCEZOl3YCb0COxVK31i9MYtrn0TfVfTT%2F6f2ZYtPcFE7lWwkaVzRALEKfU6jw9PN9w9y8DUxYzDUvYoreVEDxxFJbyQegZlM%2Buy1lb6s2j3dtYnoC90Y%2FsjV%2Bx3783XjnM6VEFWavR52jT9TrSh1X6rKJBApCF6FuVoRpnz30ckkEFx6Yv1eQNviF3uxkRY0OrRIPwMMTHyfu5irtOBdL5ZEyg3ut%2FdhYMq4RD0WZ39vGB7Sj%2FGsZBPqvi44GBJcIR9n9UogBbZLZY8MXxrFB2SdSOE4i5TbREVnlLlb%2FEA2HXCo7jq324Y5CbSpfCYvea%2BTB9vEjjlG6kTyKPMuBsJbMenxG9NDBerTJ2tqGeGiVcrkBWyhNd5Pa%2BMhSBuYDzdAHBLKTmpHa6xjHvOg8f3ybzOtIaVwO5RF6I1Xr4b6Y3z9aYO94cKfPflrDMFSwksA3pTisiMPR03G92af51LfNNxxP%2FRBviENb%2FnlPHRB%2B2BJHoSJjqhD4g4ZgqYz3yzMT3kIDIAX96piTaMJepyhWdv4v950Q%2F41CNQzApGBhCZzSx1gzEfoVT0tyLzMi8hccod05CqimIGOKw5KwtGyRdt6JIlCK2uMPnC3L8GOqUBAkS2t27o6%2Bc4vph2LuQcUJcMg3T8H7%2BHh69U%2B%2F8W7FJxSn0YoIb%2BrC%2BsY2VaWDu731RD4SxtaSLHOIWVZdwBWyKSe1NWBaFOvcrL25%2BPgCEpWlMZwIEI3PXVucPYVa%2BDBdDFjGDRAkoP8TfaIY%2BJHG1pZxtZoaDRCNIQi8mfpc%2FECDQd3oOKXBEfGXiV4AfvPB3mLoNWcHZRjv1vLbi6ZBh2PXCk&X-Amz-Signature=2765f517298f5c7c662c320b85461fbf28b90f60cc5d9953fe6da334f4ce4a79&X-Amz-SignedHeaders=host&x-id=GetObject",
        expiry_time: "2025-04-10T02:43:57.760Z",
      },
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80bf-982b-feb8895f1207",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:17:00.000Z",
    last_edited_time: "2025-04-10T01:17:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: true,
    archived: false,
    in_trash: false,
    type: "toggle",
    toggle: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "折叠",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "折叠",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80a6-80de-fcfd494d8dfc",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:17:00.000Z",
    last_edited_time: "2025-04-10T01:18:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "bullet list 1",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "bullet list 1",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8062-acb4-fe9de4754e32",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:18:00.000Z",
    last_edited_time: "2025-04-10T01:18:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bulleted_list_item",
    bulleted_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "bullet list 1",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "bullet list 1",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-808b-a387-eda86cb042b0",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:18:00.000Z",
    last_edited_time: "2025-04-10T01:18:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "number list 1",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "number list 1",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8038-9fb0-c1ff1047a4e4",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:18:00.000Z",
    last_edited_time: "2025-04-10T01:18:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "numbered_list_item",
    numbered_list_item: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "number list 2",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "number list 2",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-803f-99a6-d7e101a4fa5f",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:12:00.000Z",
    last_edited_time: "2025-04-10T01:18:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "mention",
          mention: {
            type: "link_mention",
            link_mention: {
              href: "https://www.xiaohongshu.com/explore?m_source=mengfanwetab",
              title: "小红书 - 你的生活指南",
              icon_url:
                "https://picasso-static.xiaohongshu.com/fe-platform/f43dc4a8baf03678996c62d8db6ebc01a82256ff.png",
              description:
                "沪ICP备13030189号  | 营业执照  | 2024沪公网安备31010102002533号  | 增值电信业务经营许可证：沪B2-20150021  | 医疗器械网络交易服务第三方平台备案：(沪)网械平台备字[2019]第00006号  | 互联网药品信息服务资格证书：(沪)-经营性-2023-0144  | 违法不良信息举报电话：(021)2077 3004  | 上海市互联网举报中心  | 网上有害信息举报专区  | 自营经营者信息  | 网络文化经营许可证：沪网文(2024)1344-086号  | 个性化推荐算法 网信算备310101216601302230019号",
              thumbnail_url:
                "https://picasso-static.xiaohongshu.com/fe-platform/e6214e4fbfae2cf14d634d4296916e8a5eaefdf4.png",
            },
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text:
            "https://www.xiaohongshu.com/explore?m_source=mengfanwetab",
          href: "https://www.xiaohongshu.com/explore?m_source=mengfanwetab",
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80a0-a0fd-e9706bef1d40",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:33:00.000Z",
    last_edited_time: "2025-04-10T01:33:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "bookmark",
    bookmark: {
      caption: [],
      url: "https://www.cursor.com/ja/settings",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80a1-be9c-e6b8f6847e0c",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:37:00.000Z",
    last_edited_time: "2025-04-10T01:37:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "默认文字",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "默认文字",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80b9-bbbd-f941a3459b41",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:35:00.000Z",
    last_edited_time: "2025-04-10T01:35:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "红色文字",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "red",
          },
          plain_text: "红色文字",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8003-95ab-d297148a4d89",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:35:00.000Z",
    last_edited_time: "2025-04-10T01:36:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "红色背景",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "brown_background",
          },
          plain_text: "红色背景",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-801f-9d78-fad0bdb4d3c5",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:36:00.000Z",
    last_edited_time: "2025-04-10T01:36:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "蓝色文字",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "blue",
          },
          plain_text: "蓝色文字",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8055-8a22-f8cb4360d244",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:36:00.000Z",
    last_edited_time: "2025-04-10T01:36:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "蓝色背景",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "blue_background",
          },
          plain_text: "蓝色背景",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80e0-ba9b-d5e5bcb6cb97",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:37:00.000Z",
    last_edited_time: "2025-04-10T01:37:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "灰色文字",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "gray",
          },
          plain_text: "灰色文字",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80ad-9767-db7c285931c2",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:37:00.000Z",
    last_edited_time: "2025-04-10T01:37:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "灰色背景",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "gray_background",
          },
          plain_text: "灰色背景",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-805d-ad9b-ef4f22d8454d",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:39:00.000Z",
    last_edited_time: "2025-04-10T01:39:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "quote",
    quote: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "引用",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "引用",
          href: null,
        },
      ],
      color: "default",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-8074-9ebb-cb83c8cb7ad8",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:39:00.000Z",
    last_edited_time: "2025-04-10T01:39:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "callout",
    callout: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "callout",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "callout",
          href: null,
        },
      ],
      icon: {
        type: "emoji",
        emoji: "👉",
      },
      color: "green_background",
    },
  },
  {
    object: "block",
    id: "1d1e1972-f33f-80b1-8e0e-f23a302af8bc",
    parent: {
      type: "page_id",
      page_id: "1cae1972-f33f-8048-803c-e544a0e9bae9",
    },
    created_time: "2025-04-10T01:12:00.000Z",
    last_edited_time: "2025-04-10T01:40:00.000Z",
    created_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    last_edited_by: {
      object: "user",
      id: "7f96f208-218e-446e-a832-68a8c22b6fac",
    },
    has_children: false,
    archived: false,
    in_trash: false,
    type: "paragraph",
    paragraph: {
      rich_text: [
        {
          type: "text",
          text: {
            content: "😛🙇‍♀️🥲",
            link: null,
          },
          annotations: {
            bold: false,
            italic: false,
            strikethrough: false,
            underline: false,
            code: false,
            color: "default",
          },
          plain_text: "😛🙇‍♀️🥲",
          href: null,
        },
      ],
      color: "default",
    },
  },
];

const filteredData = data.map((item) =>
  deleteUnnecessaryProps(item as BlockObjectResponse)
);

export default filteredData;
