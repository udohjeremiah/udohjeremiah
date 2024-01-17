"use client";

import { useState, useEffect } from "react";
import { quotes } from "@/data/quotes";

const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export default function RandomQuotes() {
  const [quoteIndex, setQuoteIndex] = useState(null);

  useEffect(() => {
    const updateQuoteIndex = () => {
      const today = new Date();
      const year = today.getUTCFullYear();
      const month = today.getUTCMonth();
      const day = today.getUTCDate();

      const lastUpdate = localStorage.getItem("lastQuoteUpdate");
      let [lastUpdateYear, lastUpdateMonth, lastUpdateDate] =
        (lastUpdate && lastUpdate.split("-")) || [];

      const timeDifference = lastUpdate
        ? Date.now() -
          new Date(lastUpdateYear, lastUpdateMonth - 1, lastUpdateDate)
        : ONE_DAY_IN_MILLISECONDS;

      if (lastUpdate && timeDifference >= ONE_DAY_IN_MILLISECONDS) {
        setQuoteIndex(() => Math.floor(Math.random() * quotes.length));
        localStorage.setItem("lastQuoteUpdate", `${year}-${month + 1}-${day}`);
      } else {
        setQuoteIndex(0);
        localStorage.setItem("lastQuoteUpdate", `${year}-${month + 1}-${day}`);
      }
    };

    updateQuoteIndex();
  }, []);

  return (
    <blockquote className="max-w-[40ch] text-xs">
      <p>&quot;{quotes[quoteIndex]?.quote}&quot;</p>
      <footer>—{quotes[quoteIndex]?.author}</footer>
    </blockquote>
  );
}
