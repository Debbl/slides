import { Image } from "@nextui-org/react";
import Section from "~/components/slides/Section";

export default function FirstSection() {
  return (
    <Section>
      <div className="flex justify-center">
        <Image
          className="size-16 rounded-md"
          src="https://avatars.githubusercontent.com/u/42876"
          alt=""
        />
      </div>
      <h1>Framer Motion</h1>
      <a
        className="text-xl"
        href="https://www.framer.com/motion/"
        target="_blank"
        rel="noreferrer"
      >
        官方网站
      </a>
    </Section>
  );
}
