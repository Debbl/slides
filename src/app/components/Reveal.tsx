import dynamic from "next/dynamic";
import Section from "./slides/Section";
import type { ReactNode } from "react";

const Presentation = dynamic(() => import("../components/Presentation"), {
  ssr: false,
});

export default function Reveal({ children }: { children: ReactNode }) {
  return (
    <Presentation>
      {children}

      <Section>
        <h2>The End</h2>
        <a
          className="text-medium"
          target="_blank"
          href="https://aiwan.run"
          rel="noreferrer"
        >
          aiwan.run
        </a>
      </Section>
    </Presentation>
  );
}
