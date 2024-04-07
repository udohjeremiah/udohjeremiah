// Next
import Image from "next/image";
import Link from "next/link";

// Dependencies
import { ExternalLinkIcon } from "@radix-ui/react-icons";

// Components
import Container from "@/components/Container";

// Data
import songs from "@/data/songs";

// Lib
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/metadata";

const title = "Musics";
const description =
  "List of artists, musicians, composers, etc., whose music I've been blessed with and continue to enjoy while meditating, working, or savoring the moment (alphabetically listed).";

export const metadata = createMetadata({ title, description, path: "/musics" });

export default async function MusicsPage() {
  return (
    <Container wide>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <div
        className={cn(
          "not-prose mt-8 grid grid-cols-2 place-items-center gap-x-4 gap-y-10",
          "md:grid-cols-4 md:place-items-start",
        )}
      >
        {songs
          .sort((songA, songB) => songA.author.localeCompare(songB.author))
          .map((song, index) => (
            <figure key={index} className="space-y-3">
              <Image
                src={song.profilePic}
                alt={song.author}
                width={128}
                height={196}
                className="rounded-md object-contain transition-all"
              />
              <figcaption>
                <h3 className="font-medium leading-none">
                  <Link
                    href={song.youtubeLink}
                    target="_blank"
                    className={cn(
                      "flex items-center underline underline-offset-4 transition",
                      "hover:opacity-50",
                    )}
                  >
                    {song.author}
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </Link>
                </h3>
              </figcaption>
            </figure>
          ))}
      </div>
    </Container>
  );
}
