"use client";

// Dependencies
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="max-h-96 overflow-y-auto">
      <Giscus
        id="comments"
        repo="udohjeremiah/udohjeremiah"
        repoId="R_kgDOLE0agA"
        category="Q&A"
        categoryId="DIC_kwDOLE0agM4CdJPd"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
