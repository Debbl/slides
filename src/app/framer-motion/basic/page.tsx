import { Image } from "@nextui-org/react";
import PreCode from "~/components/slides/PreCode";
import Section from "~/components/slides/Section";
import EndSection from "../components/EndSection";
import FirstSection from "../components/FirstSection";
import ExampleGif1 from "./example-1.gif";
import ExampleGif2 from "./example-2.gif";
import Image1 from "./image-1.png";

export default function Page() {
  return (
    <>
      <FirstSection />

      <Section>
        <h3>安装环境</h3>
        <div>
          <PreCode
            lang="bash"
            code={`
degit debbl/starter-next-app framer-motion-course
            `}
          />
          <PreCode
            lang="bash"
            code={`
pnpm i
            `}
          />
          <PreCode
            lang="bash"
            code={`
pnpm run dev 
            `}
          />
        </div>
      </Section>

      <Section>
        <h2>基础教程</h2>
        <div className="flex justify-center">
          <Image className="h-80" src={ExampleGif1.src} />
        </div>
      </Section>

      <Section>
        <h3>无动画案例</h3>
        <div className="flex items-start gap-x-4">
          <PreCode
            lang="tsx"
            className="text-xl"
            code={`
"use client";
import { useState } from "react";

export default function BasicOfMotion() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        className="my-2 rounded-md border p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        show/hidden
      </button>

      {isVisible && <div className="size-24 rounded-md bg-blue-600"></div>}
    </div>
  );
}

            `}
          />
          <Image className="w-96" src={ExampleGif2.src} />
        </div>
      </Section>

      <Section>
        <h3>
          <a
            target="_blank"
            href="https://www.framer.com/motion/component/"
            rel="noreferrer"
          >
            Motion 组件
          </a>
        </h3>
        <Image src={Image1.src} />
      </Section>

      <Section>
        <h3>
          <a
            target="_blank"
            href="https://www.framer.com/motion/component/#props"
            rel="noreferrer"
          >
            Props
          </a>
        </h3>
        <p className="text-xl">
          animation 里的值变化后会自动执行动画
          <a
            href="https://www.framer.com/motion/animation/#simple-animations"
            target="_blank"
            rel="noreferrer"
          >
            simple-animations
          </a>
        </p>
        <ul>
          <li>
            <a
              href="https://www.framer.com/motion/component/###initial"
              target="_blank"
              rel="noreferrer"
            >
              initial
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/component/###initial"
              target="_blank"
              rel="noreferrer"
            >
              animation
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/component/###initial"
              target="_blank"
              rel="noreferrer"
            >
              exit
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/component/###initial"
              target="_blank"
              rel="noreferrer"
            >
              transition
            </a>
          </li>
        </ul>
      </Section>

      <Section>
        <h3>添加动画</h3>
        <ul>
          <li>进入动画</li>
          <ul>
            <li>关键帧</li>
          </ul>
          <li>过渡设置</li>
          <li>退出动画</li>
        </ul>
      </Section>

      <Section>
        <PreCode
          className="text-xl"
          lang="tsx"
          code={`
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function BasicOfMotion() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        className="my-2 rounded-md border p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        show/hidden
      </button>

      {isVisible && (
        <motion.div
          initial={{ scale: 0, rotate: "0deg", y: 0 }}
          animate={{ scale: 1, rotate: "180deg", y: [0, 100, -100, -100, 0] }}
          transition={{ ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1] }}
          className="size-24 rounded-md bg-blue-600"
        ></motion.div>
      )}
    </div>
  );
}
              `}
        />
      </Section>

      <Section>
        <h3>退出动画</h3>
        <ul>
          <li>
            <a
              href="https://www.framer.com/motion/animate-presence/"
              target="_blank"
              rel="noreferrer"
            >
              AnimatePresence
            </a>
          </li>
          <li>
            <a
              href="https://www.framer.com/motion/layout-animations/"
              target="_blank"
              rel="noreferrer"
            >
              Layout
            </a>
          </li>
        </ul>
      </Section>

      <Section>
        <PreCode
          lineNumbers
          className="text-xl"
          lang="tsx"
          code={`
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function BasicOfMotion() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <motion.button
        layout // [!code highlight]
        className="my-2 rounded-md border p-2"
        onClick={() => setIsVisible(!isVisible)}
      >
        show/hidden
      </motion.button>

      <AnimatePresence mode="popLayout"> // [!code highlight]
        {isVisible && (
          <motion.div
            initial={{ scale: 0, rotate: "0deg", y: 0 }}
            animate={{ scale: 1, rotate: "180deg", y: [0, 100, -100, -100, 0] }}
            transition={{ ease: "easeInOut", times: [0, 0.2, 0.5, 0.8, 1] }}
            className="size-24 rounded-md bg-blue-600"
          ></motion.div>
        )}
      </AnimatePresence> // [!code highlight]
    </div>
  );
}
            `}
        />
      </Section>

      <EndSection />
    </>
  );
}
