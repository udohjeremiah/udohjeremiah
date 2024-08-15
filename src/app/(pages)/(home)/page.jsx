import BookCard from "./cards/BookCard";
import DevWisdomCard from "./cards/DevWisdomCard";
import GitHubContributionsCard from "./cards/GitHubContributionsCard";
import SkillSetCard from "./cards/SkillSetCard";
import Avatar from "./components/Avatar";
import Newsletter from "./components/Newsletter";
import Wave from "./components/Wave";

export const metadata = {
  title: "Udoh Jeremiah",
  description: `I'm a Nigerian Software Developer and Technical Writer based in ${process.env.NEXT_PUBLIC_LOCATION}. I'm a student at Western Delta University, Oghara, and a Freelance Developer and Writer taking up gigs as they present themselves.`,
};

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl leading-tight tracking-tight sm:text-4xl">
        Hello <Wave /> I&apos;m Udoh Jeremiah <Avatar />. I&apos;m a Nigerian 🇳🇬
        Software Developer 👨🏼‍💻 and Technical Writer ✍🏼 currently based in{" "}
        {process.env.NEXT_PUBLIC_LOCATION}.
      </h1>
      <Newsletter />
      <div className="grid gap-3 prose-p:m-0 prose-img:m-0 md:grid-cols-3">
        <div className="md:col-span-2">
          <GitHubContributionsCard />
        </div>
        <DevWisdomCard />
        <BookCard />
        <div className="md:col-span-2">
          <SkillSetCard />
        </div>
      </div>
    </>
  );
}
