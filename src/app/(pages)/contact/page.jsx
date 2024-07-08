import Header from "@/components/Header";

import ContactForm from "./components/ContactForm";

const title = "Contact";
const description =
  "Let me know what's on your mind and I'll get back to you as soon as possible.";

export const metadata = {
  title,
  description,
};

export default function ContactPage() {
  return (
    <>
      <Header title={title} description={description} />
      <div className="not-prose mt-8 grid gap-8">
        <ContactForm />
      </div>
    </>
  );
}
