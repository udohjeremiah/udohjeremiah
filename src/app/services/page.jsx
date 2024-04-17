// Next
import Link from "next/link";

// Components
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Data
import services from "@/data/services";

// Lib
import { createMetadata } from "@/lib/metadata";

const title = "Services";
const description = "What I can do for you.";

export const metadata = createMetadata({
  title,
  description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <Container>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <p>
        I maintain a flexible schedule and regularly take on freelance projects
        and consulting. Additionally, I am open to exploring employment
        opportunities, contributing to boards, and taking on advisory roles. If
        you&apos;re interested, please feel free to reach out.
      </p>
      <div className="mt-8 space-y-4">
        {services.map(({ title, description, link, cta }, index) => (
          <Card key={index} className="not-prose bg-primary-foreground">
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
    </Container>
  );
}
