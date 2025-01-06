import { Image } from "@nextui-org/react";
import Section from "~/components/slides/Section";
import FramerMotion from "../framer-motion.avif";

export default function FirstSection() {
  return (
    <Section>
      <div className="flex justify-center">
        <Image className="size-16 rounded-md" src={FramerMotion.src} alt="" />
      </div>
      <h1>Framer Motion</h1>
      <div className="flex flex-col">
        <a
          className="text-xl"
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noreferrer"
        >
          官方网站
        </a>

        <a
          className="text-xl"
          href="https://www.youtube.com/watch?v=znbCa4Rr054"
          target="_blank"
          rel="noreferrer"
        >
          参考
        </a>
      </div>
    </Section>
  );
}
