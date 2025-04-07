"use client";

import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const ViewCounter = ({
  pageId,
  slug,
  noCount = false,
}: {
  pageId: string;
  slug: string;
  noCount?: boolean;
}) => {
  const supabase = createClientComponentClient();
  const [views, setViews] = useState<number | "_">("_");

  useEffect(() => {
    const handlePageView = async () => {
      try {
        // 在需要计数的页面中增加计数
        if (!noCount) {
          await supabase.rpc("increment", {
            page_id_uuid: pageId,
            slug_text: slug,
          });
        }

        // 获取最新计数
        const { data, error } = await supabase
          .from("views")
          .select("count")
          .match({ page_id: pageId })
          .single();

        if (error) throw error;
        setViews(data?.count || "_");
      } catch (error) {
        console.error("Error with view counter:", error);
      }
    };

    handlePageView();
  }, [pageId, slug, noCount]);

  return <div>{views} views</div>;
};

export default ViewCounter;
