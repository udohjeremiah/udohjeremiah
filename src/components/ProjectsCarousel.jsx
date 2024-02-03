"use client";

// React
import { useEffect, useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Data
import projects from "@/data/projects";

// Lib
import { cn } from "@/lib/utils";

export default function ProjectsCarousel() {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn("flex w-full flex-col items-center", "sm:w-10/12")}>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {projects.map(({ title, description, link, image, name }, index) => (
            <CarouselItem key={index}>
              <Card className="not-prose">
                <Link href={link} target="_blank" className="hover:opacity-50">
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                  </CardHeader>
                </Link>
                <CardContent className="flex items-center justify-center p-6">
                  <Image
                    src={image}
                    alt={name}
                    width={2850}
                    height={1398}
                    quality={100}
                    className="rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="max-sm:sm:hidden" />
        <CarouselNext className="max-sm:sm:hidden" />
      </Carousel>
      <div className="mt-4 flex items-center justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2.5 w-2.5 rounded-full bg-muted transition-all duration-500",
              current - 1 === index && "bg-muted-foreground",
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
