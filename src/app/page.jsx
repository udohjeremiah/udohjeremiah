// Next
import Image from "next/image";
import Link from "next/link";

// Depemdencies
import { allBlogs } from "contentlayer/generated";
import {
  BellIcon,
  MailOpenIcon,
  NotebookPenIcon,
  UserRoundIcon,
  FolderOpenDotIcon,
} from "lucide-react";

// Components
import Container from "@/components/Container";
import MailingListForm from "@/components/MailingListForm";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Data
import { personal, qualifications, skills } from "@/data/about";
import services from "@/data/services";

// Lib
import { createMetadata } from "@/lib/metadata";
import { cn, sortBlogPostByDate } from "@/lib/utils";

const title = "Home";
const description =
  "A self-taught software developer standing at the intersection of technology and humanity.";

export const metadata = createMetadata({
  title,
  description,
});

export default function HomePage() {
  return (
    <Container wide>
      <section
        className={cn("mb-16 flex items-center justify-center", "lg:mb-24")}
      >
        <div>
          <span className="mb-8 block text-2xl font-extralight">
            Hello, I&apos;m
          </span>
          <h2
            className={cn(
              "m-0 mb-10 text-6xl font-bold uppercase",
              "sm:text-8xl",
            )}
          >
            Udoh
            <span
              className={cn(
                "block pl-8 text-4xl font-normal opacity-40",
                "sm:text-7xl",
              )}
            >
              Jeremiah
            </span>
          </h2>
          <span className="mb-8 block text-2xl font-extralight">
            Self-Taught
          </span>
          <h2
            className={cn(
              "m-0 mb-10 text-6xl font-bold uppercase",
              "sm:text-8xl",
            )}
          >
            Software
            <span
              className={cn(
                "block pl-8 text-4xl font-normal opacity-40",
                "sm:text-7xl",
              )}
            >
              Developer
            </span>
          </h2>
        </div>
      </section>
      <section className={cn("mb-16", "lg:mb-24")}>
        <h2 className="flex items-center justify-center gap-x-3">
          <UserRoundIcon className="h-5 w-5" />
          About Me
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          <Avatar className={cn("not-prose h-72 w-72", "sm:h-80 sm:w-80")}>
            <AvatarImage src="/profile.webp" alt="Udoh Jeremiah" />
            <AvatarFallback className="text-7xl">UJ</AvatarFallback>
          </Avatar>
          <Tabs defaultValue="personal" className="flex-1">
            <TabsList className="flex">
              <TabsTrigger value="personal" className="flex-1">
                Personal Info
              </TabsTrigger>
              <TabsTrigger value="qualifications" className="flex-1">
                Qualifications
              </TabsTrigger>
              <TabsTrigger value="skills" className="flex-1">
                Skills
              </TabsTrigger>
            </TabsList>
            <TabsContent value="personal">
              <h3>Exceptional Service Over Time</h3>
              <p>
                I stand at the intersection of technology and humanity, making
                software for people who want to incorporate it into their lives
                for creative purposes, not just productivity. I&apos;m not just
                out to get the job done; I&apos;m out to change the world.
              </p>

              <div
                className={cn("grid items-center gap-y-4", "xl:grid-cols-2")}
              >
                {personal.map(({ text, icon: Icon }, index) => (
                  <div key={index} className="flex items-center gap-x-2">
                    <Icon className="h-5 w-5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="qualifications">
              <h3>My Awesome Journey</h3>
              {qualifications.map(({ title, icon: Icon, items }, index) => (
                <div key={index}>
                  <h4 className="flex items-center gap-x-4">
                    <Icon className="h-5 w-5" />
                    {title}
                  </h4>
                  <div className="ml-2 flex flex-col gap-y-8 border-l">
                    {items.map(({ location, position, years }, index) => (
                      <div key={index} className="group relative flex pl-7">
                        <div
                          className={cn(
                            "absolute -left-[6px] h-2.5 w-2.5 rounded-full bg-primary transition-all duration-500",
                            "group-hover:translate-y-20",
                          )}
                        ></div>
                        <div className="flex flex-col">
                          <h6>{location}</h6>
                          <span>{position}</span>
                          <span>{years}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="skills">
              <h3>What I Use Everyday</h3>
              {skills.map(({ title, icon: Icon, items }, index) => (
                <div key={index}>
                  <h4 className="flex items-center gap-x-4">
                    <Icon className="h-5 w-5" />
                    {title}
                  </h4>
                  <Accordion
                    type="single"
                    collapsible
                    className="not-prose w-full"
                  >
                    {items.map(({ title, items }, index) => (
                      <AccordionItem key={index} value={title}>
                        <AccordionTrigger>{title}</AccordionTrigger>
                        <AccordionContent className="grid grid-cols-4">
                          {items.map(({ text, image, name }, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center gap-2"
                            >
                              <Image src={image} alt={name} quality={100} />
                              <span className="text-center">{text}</span>
                            </div>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <section className={cn("mb-16 flex flex-col items-center", "lg:mb-24")}>
        <h2 className="flex items-center gap-x-3">
          <FolderOpenDotIcon className="h-5 w-5" />
          Latest Projects
        </h2>
        <p className="text-center">
          Explore a curated selection of my latest projects, showcasing a
          diverse range of skills and innovative solutions. From web
          applications to cutting-edge developments, discover the projects
          I&apos;ve brought to life and am currently working on.
        </p>
        <ProjectsCarousel />
      </section>
      <section className={cn("mb-16", "lg:mb-24")}>
        <h2 className="flex items-center justify-center gap-x-3">
          <BellIcon className="h-5 w-5" />
          My Services
        </h2>
        <div className={cn("grid gap-4", "sm:grid-cols-2")}>
          {services.map(({ title, description, link, cta }, index) => (
            <Card key={index} className="not-prose">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={link}>{cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      <section
        className={cn("grid gap-8", "sm:grid-cols-2 sm:gap-0 sm:divide-x")}
      >
        <div className={cn("text-sm", "sm:pr-8")}>
          <h5 className="flex items-center gap-x-2">
            <NotebookPenIcon />
            Latest Blog Posts
          </h5>
          {allBlogs
            .sort(sortBlogPostByDate)
            .slice(0, 3)
            .map(({ title, description, slug }, index) => (
              <Link
                key={index}
                href={slug}
                className={cn(
                  "my-5 block font-normal underline-offset-2",
                  "hover:opacity-50",
                )}
              >
                {title} - {description}
              </Link>
            ))}
        </div>
        <div className={cn("text-sm", "sm:pl-8")}>
          <h5 className="flex items-center gap-x-2">
            <MailOpenIcon />
            Newsletter
          </h5>
          <p className="text-muted-foreground">
            Join an exclusive community of avid readers and receive periodic
            updates on cutting-edge projects and advancements. No spam, ever.
          </p>
          <MailingListForm />
        </div>
      </section>
    </Container>
  );
}
