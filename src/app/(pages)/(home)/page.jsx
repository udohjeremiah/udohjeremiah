import { tw } from "@/lib/utils";

import BookCard from "./cards/BookCard";
import DevWisdomCard from "./cards/DevWisdomCard";
import GitHubContributionsCard from "./cards/GitHubContributionsCard";
import RecentPostsCard from "./cards/RecentPostsCard";
import Newsletter from "./components/Newsletter";

export const metadata = {
  title: "Udoh Jeremiah",
  description: `I'm a Software Developer based in ${process.env.NEXT_PUBLIC_LOCATION}. I'm a student at Western Delta University, Oghara, and a Freelance Software Developer taking up gigs as they present themselves.`,
};

export default function HomePage() {
  return (
    <>
      <h1
        className={tw("text-3xl leading-tight tracking-tight", "sm:text-4xl")}
      >
        Hi there 👋! I&apos;m Udoh. I&apos;m a software developer currently
        based in {process.env.NEXT_PUBLIC_LOCATION}.
      </h1>
      <Newsletter />
      <div
        className={tw(
          "grid gap-3",
          "prose-p:m-0 prose-img:m-0",
          "md:grid-cols-3",
        )}
      >
        <div className="overflow-auto md:col-span-2">
          <GitHubContributionsCard />
        </div>
        <DevWisdomCard />
        <BookCard />
        <div className="md:col-span-2">
          <RecentPostsCard />
        </div>
      </div>
    </>
  );
}
