// Components
import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";

// Lib
import { createMetadata } from "@/lib/metadata";

const title = "Contact";
const description =
  "Share your thoughts or inquiries, and I'll respond promptly. Your feedback is valuable. Thank you.";

export const metadata = createMetadata({
  title,
  description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <ContactForm />
    </Container>
  );
}
