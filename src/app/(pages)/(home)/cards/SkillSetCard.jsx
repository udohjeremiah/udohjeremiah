import Image from "next/image";

import Card from "@/components/Card";
import Link from "@/components/Link";

import skills from "@/data/skills.json";

export default async function SkillSetCard() {
  return (
    <Card title="Skill Set" className="flex flex-wrap items-center gap-8 p-4">
      {skills.map((skill, index) => (
        <Link key={index} href={skill.href} label={skill.name}>
          <Image
            src={skill.image}
            alt={skill.name}
            width={32}
            height={32}
            quality={100}
            className="rounded-md"
          />
        </Link>
      ))}
    </Card>
  );
}
