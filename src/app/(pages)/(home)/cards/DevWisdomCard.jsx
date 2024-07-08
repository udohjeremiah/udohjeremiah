"use client";

import { useEffect, useState } from "react";

import Card from "@/components/Card";

import quotes from "@/data/quotes.json";

import { useMounted } from "@/hooks/useMounted";

const getToday = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today;
};

export default function DevWisdomCard() {
  const [wisdom, setWisdom] = useState(null);
  const isMounted = useMounted();

  useEffect(() => {
    const createQuoteIndex = () => {
      const today = getToday();
      const randomIndex = Math.floor(Math.random() * quotes.length);

      setWisdom(quotes[randomIndex]);
      localStorage.setItem(
        "quoteIndex/timestamp",
        `${randomIndex}/${today.getTime()}`,
      );
    };

    const storedDate = localStorage.getItem("quoteIndex/timestamp");
    if (!storedDate) {
      createQuoteIndex();
    } else {
      const [quoteIndex, timestamp] = storedDate.split("/");
      const today = getToday();

      if (today.getTime() !== parseInt(timestamp)) {
        createQuoteIndex();
      } else {
        setWisdom(quotes[parseInt(quoteIndex)]);
      }
    }
  }, [wisdom]);

  if (!isMounted) {
    return null;
  }

  return (
    <Card
      title="Dev Wisdom"
      className="flex flex-col justify-between gap-4 p-4"
    >
      <p className='text-sm text-neutral-500 before:content-["\""] after:content-["\""] dark:text-neutral-400'>
        {wisdom.quote}
      </p>
      <p className="text-sm text-neutral-900 dark:text-neutral-100">
        — {wisdom.author}
      </p>
    </Card>
  );
}
