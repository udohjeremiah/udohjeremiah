"use client";

// React
import { useEffect, useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Dependencies
import { ExternalLinkIcon } from "lucide-react";

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
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {projects.map(({ title, description, link, image, name }, index) => (
            <CarouselItem key={index}>
              <Card className="not-prose">
                <CardHeader className="p-0">
                  <Image
                    src={image}
                    alt={name}
                    width={2850}
                    height={1398}
                    quality={100}
                    className="rounded-t-xl bg-cover"
                  />
                </CardHeader>
                <CardContent className="flex flex-col space-y-1.5 p-6">
                  <Link
                    href={link}
                    target="_blank"
                    className="flex items-center underline"
                  >
                    <h3 className="font-semibold leading-none tracking-tight">
                      {title}
                    </h3>
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </Link>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={cn("hidden", "sm:flex")} />
        <CarouselNext className={cn("hidden", "sm:flex")} />
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
