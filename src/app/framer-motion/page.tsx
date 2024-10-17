/* eslint-disable @next/next/no-img-element */
import Code from "../components/Code";
import Reveal from "../components/Reveal";
import Section from "../components/slides/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framer Motion",
};

export default function Page() {
  return (
    <div className="h-full">
      <Reveal>
        <Section>
          <div className="flex justify-center">
            <img
              className="size-16 rounded-md"
              src="https://avatars.githubusercontent.com/u/42876"
              alt=""
            />
          </div>
          <h2>Framer Motion</h2>
        </Section>

        <Section>
          <h2>基础教程</h2>
        </Section>

        <Section>
          <Code
            code={`
console.log("111")
            `}
            lang="javascript"
            filename="foo.js"
          />
        </Section>
      </Reveal>
    </div>
  );
}
