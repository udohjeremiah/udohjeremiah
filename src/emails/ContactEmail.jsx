// Dependencies
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

export default function ContactEmail({ name, email, message, type }) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>New email from {name}</Preview>
        <Body className="bg-neutral-50 font-sans">
          <Container className="mx-auto py-12">
            <Section className="mt-8 rounded-md bg-neutral-200 p-px">
              <Section className="rounded-[5px] bg-white p-8">
                <Text className="mb-4 mt-0 text-2xl font-semibold text-neutral-950">
                  New email from {name}
                </Text>
                <Text className="m-0 text-neutral-500">
                  {name} ({email}) has sent you a message:
                </Text>
                <Hr className="my-4" />
                <Text className="m-0 text-neutral-500">{message}</Text>
                <Hr className="my-4" />
                <Text className="m-0 capitalize text-neutral-500">{type}</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
