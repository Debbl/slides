import { Image } from "@nextui-org/react";
import { Link } from "~/components/Link";
import PreCode from "~/components/slides/PreCode";
import Section from "~/components/slides/Section";
import EndSection from "../components/EndSection";
import FirstSection from "../components/FirstSection";
import Example1 from "./Example-1.gif";
import Image1 from "./image-1.png";
import Image2 from "./image-2.png";
import Image3 from "./image-3.png";

export default function Page() {
  return (
    <>
      <FirstSection />

      <Section>
        <h2>手动控制动画</h2>
        <p>
          <Link href="https://www.framer.com/motion/use-animation-controls/">
            useAnimationControls
          </Link>
        </p>
      </Section>

      <Section>
        <h3>实现效果</h3>
        <p className="text-xl">按钮点击后控制 box 的动画效果</p>
        <div className="flex items-center justify-center gap-x-2">
          <PreCode
            lang="tsx"
            code={`
"use client";

export default function AnimationControls() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button className="my-2 rounded-md border px-2 py-1">Flip it</button>

      <div className="size-24 rounded-md bg-blue-700"></div>
    </div>
  );
}
                `}
          />
          <Image className="h-80" src={Image1.src} />
        </div>
      </Section>

      <Section>
        <Link
          className="text-xl"
          href="https://www.framer.com/motion/use-animation-controls/"
        >
          useAnimationControls
        </Link>

        <div className="flex justify-center">
          <Image className="h-[34rem]" src={Image2.src} />
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-center gap-x-8">
          <PreCode
            lang="tsx"
            code={`
"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = async () => { // [!code highlight:12]
    await controls.start({
      scale: 1.1,
      rotate: "360deg",
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await controls.start({
      scale: 1,
      rotate: "0deg",
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="my-2 rounded-md border px-2 py-1"
      >
        Flip it
      </button>

      <motion.div
        animate={controls}
        className="size-24 rounded-md bg-blue-700"
      ></motion.div>
    </div>
  );
}
            `}
          />
          <Image className="h-80" src={Example1.src} />
        </div>
      </Section>

      <Section>
        <Link href="https://www.framer.com/motion/animation/#variants">
          Variants
        </Link>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { motion, useAnimationControls } from "framer-motion";

export default function AnimationControls() {
  const controls = useAnimationControls();

  const handleClick = async () => {
    await controls.start("flip"); // [!code highlight]
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await controls.start("initial"); // [!code highlight]
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="my-2 rounded-md border px-2 py-1"
      >
        Flip it
      </button>

      <motion.div
        animate={controls}
        variants={{
          initial: { scale: 1, rotate: "0deg" },
          flip: { scale: 1.1, rotate: "360deg" },
        }}
        className="size-24 rounded-md bg-blue-700"
      ></motion.div>
    </div>
  );
}
            `}
        />
      </Section>

      <Section>
        <h3>
          <a
            href="https://www.framer.com/motion/use-animate/"
            target="_blank"
            rel="noreferrer"
          >
            useAnimate
          </a>
        </h3>

        <div className="flex justify-center">
          <Image className="h-[32rem]" src={Image3.src} />
        </div>
      </Section>

      <Section>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { useAnimate } from "framer-motion";

export default function AnimationControls() {
  const [scope, animate] = useAnimate();

  const handleClick = async () => {
    await animate(scope.current, { // [!code highlight]
      scale: 1.1,
      rotate: "360deg",
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await animate(scope.current, { // [!code highlight]
      scale: 1,
      rotate: "0deg",
    });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <button
        onClick={handleClick}
        className="my-2 rounded-md border px-2 py-1"
      >
        Flip it
      </button>

      <div ref={scope} className="size-24 rounded-md bg-blue-700"></div>
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
