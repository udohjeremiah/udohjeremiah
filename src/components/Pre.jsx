"use client";

import { useEffect, useRef, useState } from "react";

import CheckIcon from "@/components/icons/CheckIcon";
import CopyIcon from "@/components/icons/CopyIcon";

export default function Pre({ children, ...props }) {
  const [showCopy, setShowCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef(null);

  useEffect(() => {
    const dataLanguage = preRef.current.hasAttribute("data-language");

    if (dataLanguage) {
      setShowCopy(true);
    }
  }, []);

  const handleCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <pre ref={preRef} {...props}>
      {showCopy && (
        <button
          aria-label={isCopied ? "Copied" : "Copy to clipboard"}
          disabled={isCopied}
          onClick={handleCopy}
          className="absolute right-4 top-2 h-6 w-6"
        >
          {isCopied ? (
            <CheckIcon className="h-4 w-4 text-green-500" />
          ) : (
            <CopyIcon className="h-4 w-4" />
          )}
        </button>
      )}
      {children}
    </pre>
  );
}
