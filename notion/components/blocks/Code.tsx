"use client";

import { useEffect, useRef, useState } from "react";
import { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Prism from "prismjs";
// import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-python";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-go";
import "prismjs/components/prism-swift";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "@/styles/code-theme.css";

const Code = (data: CodeBlockObjectResponse) => {
  const { rich_text, language, caption } = data.code;
  const codeText = rich_text[0]?.plain_text;
  const codeCaption = caption[0]?.plain_text;

  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [codeText, language]);

  return (
    <section className="mt-2 mb-6 p-2 bg-[#faf8f5] border-1 border-gray-300 rounded-md text-sm sm:text-base">
      <div className="flex items-center justify-between pb-2 border-b border-gray-300">
        <h3>{codeCaption}</h3>
        <button
          onClick={() => {
            navigator.clipboard.writeText(codeText);
            setIsCopied(true);
          }}
          className="px-2 rounded-md cursor-pointer text-[#728fcd] hover:bg-gray-100"
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto line-numbers">
        <code
          ref={codeRef}
          className={`language-${language}`}
          style={{
            fontSize: window.innerWidth < 640 ? "14px" : "16px",
          }}
        >
          {codeText}
        </code>
      </pre>
    </section>
  );
};

export default Code;
