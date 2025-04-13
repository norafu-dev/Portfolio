import { FilteredBlockResponse } from "@/notion/types";

// 定义处理块的通用类型
export type ProcessedBlock =
  | FilteredBlockResponse
  | {
      id: string;
      type: string;
      [key: string]: any; // 允许任何额外属性
    };

// 处理有序列表项，将连续的有序列表项组合成一个数组
export function processNumberedLists(
  blocks: ProcessedBlock[]
): ProcessedBlock[] {
  const processedBlocks: ProcessedBlock[] = [];
  let currentListItems: ProcessedBlock[] = [];

  for (const block of blocks) {
    // 如果是列表项，收集起来
    if (block.type === "numbered_list_item") {
      currentListItems.push(block);
    }
    // 如果不是列表项，但之前收集了列表项
    else if (currentListItems.length > 0) {
      // 把收集的列表项作为一个整体添加
      processedBlocks.push({
        id: `list-form-${currentListItems[0].id}-to-${
          currentListItems[currentListItems.length - 1].id
        }`,
        type: "numbered_list",
        has_children: false,
        numbered_list: currentListItems,
      });
      currentListItems = []; // 清空收集器
      processedBlocks.push(block); // 添加当前非列表块
    }
    // 普通块，直接添加
    else {
      processedBlocks.push(block);
    }
  }

  // 处理最后可能剩余的列表项
  if (currentListItems.length > 0) {
    processedBlocks.push({
      id: `list-form-${currentListItems[0].id}-to-${
        currentListItems[currentListItems.length - 1].id
      }`,
      type: "numbered_list",
      has_children: false,
      numbered_list: currentListItems,
    });
  }

  return processedBlocks;
}

// 可以添加更多处理函数，例如处理无序列表项
export function processBulletedLists(
  blocks: ProcessedBlock[]
): ProcessedBlock[] {
  const processedBlocks: ProcessedBlock[] = [];
  let currentListItems: ProcessedBlock[] = [];

  for (const block of blocks) {
    if (block.type === "bulleted_list_item") {
      currentListItems.push(block);
    } else if (currentListItems.length > 0) {
      processedBlocks.push({
        id: `list-form-${currentListItems[0].id}-to-${
          currentListItems[currentListItems.length - 1].id
        }`,
        type: "bulleted_list",
        has_children: false,
        bulleted_list: currentListItems,
      });
      currentListItems = []; // 清空收集器
      processedBlocks.push(block); // 添加当前非列表块
    }
    // 普通块，直接添加
    else {
      processedBlocks.push(block);
    }
  }

  // 处理最后可能剩余的列表项
  if (currentListItems.length > 0) {
    processedBlocks.push({
      id: `list-form-${currentListItems[0].id}-to-${
        currentListItems[currentListItems.length - 1].id
      }`,
      type: "bulleted_list",
      has_children: false,
      bulleted_list: currentListItems,
    });
  }

  return processedBlocks;
}

// 主处理函数，可以按顺序应用所有处理函数
export function processBlocks(
  blocks: FilteredBlockResponse[]
): ProcessedBlock[] {
  // 首先处理有序列表
  let processedBlocks = processNumberedLists(blocks);

  // 可以添加更多处理步骤
  processedBlocks = processBulletedLists(processedBlocks);
  // processedBlocks = processColumns(processedBlocks);

  return processedBlocks;
}
