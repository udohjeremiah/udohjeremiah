import { createMetadata } from "@/lib/metadata";

import Container from "@/components/Container";
import MailingListForm from "@/components/MailingListForm";

const title = "Mailing List";
const description =
  "Join a thriving community of avid readers and receive periodic updates on new projects and developments. Rest assured, no spam, ever.";

export const metadata = createMetadata({
  title,
  description,
  path: "/mailing-list",
});

export default function MailingListPage() {
  return (
    <Container>
      <h1 className="mb-0">{title}</h1>
      <p>
        Join an exclusive community of avid readers by subscribing to my mailing
        list. Receive periodic updates on cutting-edge projects and
        advancements, ensuring a spam-free experience with high-quality content.
        Gain valuable insights into the latest trends and essential developments
        in web development. Stay well-informed and at the forefront of the
        ever-evolving tech landscape. Join us for continuous learning and
        innovation!
      </p>
      <MailingListForm />
    </Container>
  );
}
