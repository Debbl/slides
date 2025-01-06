import { Code, Image } from "@nextui-org/react";
import PreCode from "~/components/slides/PreCode";
import Section from "~/components/slides/Section";
import EndSection from "../_components/EndSection";
import FirstSection from "../_components/FirstSection";
import Example1 from "./example-1.png";

export default function Page() {
  return (
    <>
      <FirstSection />
      <Section>
        <h2>手势动画</h2>

        <a
          href="https://www.framer.com/motion/gestures/"
          target="_blank"
          rel="noreferrer"
        >
          Gestures
        </a>
      </Section>

      <Section>
        <ul>
          <li>
            <a
              href="https://www.framer.com/motion/gestures/#hover"
              target="_blank"
              rel="noreferrer"
            >
              Hover
            </a>
            <ul>
              <li>whileHover</li>
              <li>onHoverStart</li>
              <li>onHoverEnd</li>
            </ul>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/gestures/#focus"
              target="_blank"
              rel="noreferrer"
            >
              Focus
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/gestures/#tap"
              target="_blank"
              rel="noreferrer"
            >
              Tap
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/gestures/#pan"
              target="_blank"
              rel="noreferrer"
            >
              Pan
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/gestures/#drag"
              target="_blank"
              rel="noreferrer"
            >
              Drag
            </a>
          </li>
        </ul>
      </Section>

      <Section>
        <PreCode
          lang="tsx"
          code={`
"use client";
import React from "react";

export default function Gestures() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4">
      <button className="rounded-md border bg-red-600 p-2 text-white">
        Click me!
      </button>

      <button className="rounded-md border bg-blue-800 p-2 text-white">
        Click me!
      </button>
    </div>
  );
}
            `}
        />
        <div className="flex justify-center">
          <Image className="h-64" src={Example1.src} />
          <ul className="pt-8">
            <li>whileHover</li>
            <li>whileTap</li>
          </ul>
        </div>
      </Section>

      <Section>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { motion, MotionConfig } from "framer-motion";
import React from "react";

export default function Gestures() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-4">
      <MotionConfig // [!code highlight:6]
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }} // [!code highlight:2]
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="rounded-md border bg-red-600 p-2 text-white"
        >
          Click me!
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }} // [!code highlight:2]
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
          className="rounded-md border bg-blue-800 p-2 text-white"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
}
            `}
        />
        <p className="text-left text-xl">
          <a
            href="https://www.framer.com/motion/motion-config/"
            className="pr-2"
          >
            Motion Config
          </a>
          所有的 <Code className="text-white">children</Code> 共用{" "}
          <Code className="text-white">transition</Code>
        </p>
      </Section>

      <EndSection />
    </>
  );
}
