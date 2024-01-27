"use client";

// React
import { useEffect, useState } from "react";

// Data
import { quotes } from "@/data/quotes";

// Lib
import { cn } from "@/lib/utils";

const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

export default function RandomQuotes() {
  const [index, setIndex] = useState(null);
  const [quoteText, setQuoteText] = useState("");
  const [authorText, setAuthorText] = useState("");

  useEffect(() => {
    const updateQuoteIndex = () => {
      const today = new Date();
      const year = today.getUTCFullYear();
      const month = today.getUTCMonth();
      const day = today.getUTCDate();

      const lastUpdate = localStorage.getItem("lastQuoteUpdate");
      let [lastUpdateYear, lastUpdateMonth, lastUpdateDate, lastUpdateIndex] =
        (lastUpdate && lastUpdate.split("-")) || [];

      const timeDifference = lastUpdate
        ? Date.now() -
          new Date(lastUpdateYear, lastUpdateMonth - 1, lastUpdateDate)
        : ONE_DAY_IN_MILLISECONDS;

      if (lastUpdate && timeDifference >= ONE_DAY_IN_MILLISECONDS) {
        lastUpdateIndex = Math.floor(Math.random() * quotes.length);
        setIndex(lastUpdateIndex);
        localStorage.setItem(
          "lastQuoteUpdate",
          `${year}-${month + 1}-${day}-${lastUpdateIndex}`,
        );
      } else {
        setIndex(lastUpdateIndex || 0);
        localStorage.setItem(
          "lastQuoteUpdate",
          `${year}-${month + 1}-${day}-${lastUpdateIndex || 0}`,
        );
      }
    };

    updateQuoteIndex();
  }, []);

  useEffect(() => {
    let i = 0;

    const typingInterval = setInterval(() => {
      if (i === quotes[index]?.quote.length) {
        clearInterval(typingInterval);
        startAuthorAnimation();
      }
      setQuoteText(quotes[index]?.quote.substring(0, i++));
    }, 50);

    const startAuthorAnimation = () => {
      let j = 0;

      const authorInterval = setInterval(() => {
        if (j === quotes[index]?.author.length) {
          clearInterval(authorInterval);
        }
        setAuthorText(" — " + quotes[index]?.author.substring(0, j++));
      }, 50);
    };

    return () => {
      clearInterval(typingInterval);
    };
  }, [index]);

  return (
    <blockquote className={cn("w-full text-pretty text-xs", "lg:w-[60ch]")}>
      <p className="inline">&quot;{quoteText}&quot;</p>
      <footer className="inline whitespace-nowrap">{authorText}</footer>
    </blockquote>
  );
}
