import Image from "next/image";

import PagesLayout from "@/app/(pages)/layout";

import Header from "@/components/Header";
import Link from "@/components/Link";

import { cn } from "@/lib/utils";

export const metadata = {
  title: "About",
  description: `I'm Udoh Jeremiah — a Nigerian Software Developer and Technical Writer currently based in ${process.env.NEXT_PUBLIC_LOCATION}.`,
};

export default function About() {
  return (
    <div className="flex items-start">
      <div className="flex-1">
        <div className="mx-auto max-w-[38rem]">
          <PagesLayout>
            <Image
              src="/avatar.webp"
              alt="Udoh Jeremiah"
              width={64}
              height={96}
              className={cn(
                "m-0 block xl:hidden",
                "h-12 w-12 rounded-full object-cover",
              )}
              quality={100}
              loading="eager"
              priority
            />
            <Header
              title="About"
              description={`I'm Udoh Jeremiah — a Nigerian Software Developer and Technical Writer currently based in ${process.env.NEXT_PUBLIC_LOCATION}.`}
            />
            <main>
              <p>
                I&apos;m currently a Freelance Software Developer and Technical
                Writer. I&apos;ve had the pleasure of collaborating with
                numerous clients from diverse fields, crafting innovative and
                engaging projects that meet their unique needs. Each project is
                an opportunity to blend creativity and technical expertise,
                delivering solutions that make a real impact. My passion for
                simplifying complex tools and processes for other developers
                shines through in my writing, as showcased in my blog. I
                frequently produce content that demystifies the challenging
                aspects of software development, making them easy to understand
                for everyone.
              </p>
              <p>
                In the past, I was heavily involved with the{" "}
                <Link href="https://julialang.org" label="Julia">
                  Julia Programming Language
                </Link>
                , making significant contributions to its{" "}
                <Link href="https://docs.julialang.org" label="Julia Docs">
                  open-source documentation
                </Link>{" "}
                to make it more accessible to all users. As a result of my
                contributions, I was granted membership in the development team.
                I also developed packages like{" "}
                <Link
                  href="https://github.com/udohjeremiah/REPLference.jl"
                  label="Github"
                >
                  REPLference.jl
                </Link>
                , aimed at teaching Julia to beginners within the REPL, and{" "}
                <Link
                  href="https://github.com/udohjeremiah/ProjectEuler.jl"
                  label="Github"
                >
                  ProjectEuler.jl,
                </Link>
                which provides offline access to challenging mathematical
                problems from{" "}
                <Link href="https://projecteuler.net" label="Project Euler">
                  Project Euler
                </Link>{" "}
                through Julia&apos;s REPL. At that time, I was more into Machine
                Learning (ML) and Artificial Intelligence (AI). However, my
                interests have since changed.
              </p>
              <p>
                Currently, my focus is on web and mobile development. Utilizing
                tools like TypeScript, React.js, Next.js, React Native, Expo,
                and MongoDB, I develop interactive web and mobile applications
                that address and enhance users&apos; needs.
              </p>
              <p>
                I interned at{" "}
                <Link
                  href="http://www.sapelepower.com"
                  label="Sapele Power Plc"
                >
                  Sapele Power Plc (SPP)
                </Link>
                , a leading Nigerian integrated energy company specializing in
                power generation. SPP operates Nigeria&apos;s second-largest
                power plant by installed capacity of 1020MW; capable of meeting
                the energy needs of around 750,000 homes at full capacity.
                Working there allowed me to learn from experienced
                professionals, who have taught me not just the typical coding
                stuff I&apos;m accustomed to, but also broadened my experience
                to areas spanning into other fields in the IT industry.
              </p>
              <p>
                I have a National Diploma in Computer Science from Temple Gate
                Polytechnic, Nigeria. Also, I&apos;m currently a final-year
                student at Western Delta University, Nigeria, studying for a
                Bachelor of Science degree in Computer Science.
              </p>
              <p>
                In my &quot;spare&quot; time, those moments when my brain no
                longer allows me to code, I observe, meditate, and read.
                Observing the world around me and getting lost in the beauty or
                folly of the human species is an activity I enjoy. Dwelling
                deeply in my thoughts to the point where they take on a life of
                their own and have a deep conversation with me is also something
                I cherish. I devour books on spirituality, philosophy,
                programming, or anything that takes me out of this world to a
                place where all I can do is imagine. The best compliment I could
                ever receive would be to be addressed simply as &quot;a great
                observer, thinker, and reader.&quot;
              </p>
            </main>
          </PagesLayout>
        </div>
      </div>
      <Image
        src="/profile.webp"
        alt="Udoh Jeremiah"
        width={720}
        height={1080}
        quality={100}
        loading="eager"
        priority
        className={cn(
          "hidden xl:block",
          "flex-0 sticky bottom-0 top-0 aspect-[720/1080] h-screen w-auto max-w-[50vw] select-none object-cover",
        )}
      />
    </div>
  );
}
