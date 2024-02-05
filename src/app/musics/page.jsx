// Next
import Image from "next/image";

// Components
import Container from "@/components/Container";

// Data
import songs from "@/data/songs";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

const title = "Musics";
const description =
  "Audio and video materials of music that I've listened to and continue to enjoy while meditating, working, or simply savoring the moment (listed in alphabetical order).";

export const metadata = createMetadata({ title, description, path: "/musics" });

export default async function MusicsPage() {
  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <div
        className={cn(
          "not-prose mt-8 grid grid-cols-2 gap-x-4 gap-y-10",
          "md:grid-cols-4",
        )}
      >
        {songs
          .sort((songA, songB) => songA.title.localeCompare(songB.title))
          .map((song, index) => (
            <figure key={index} className="space-y-3">
              <Image
                src={song.cover}
                alt={song.title}
                width={128}
                height={196}
                className={cn("rounded-md transition-all", "hover:scale-105")}
              />
              <figcaption className="space-y-1">
                <h3 className="font-medium leading-none">{song.title}</h3>
                <p className="text-muted-foreground">{song.author}</p>
              </figcaption>
            </figure>
          ))}
      </div>
    </Container>
  );
}
