import { Code, Image } from "@nextui-org/react";
import { Link } from "~/components/Link";
import PreCode from "~/components/slides/PreCode";
import Section from "~/components/slides/Section";
import EndSection from "../_components/EndSection";
import FirstSection from "../_components/FirstSection";
import Image1 from "./image-1.png";

export default function Page() {
  return (
    <>
      <FirstSection />
      <Section>
        <h2>视图动画</h2>

        <div>
          <Link href="https://www.framer.com/motion/use-in-view/">
            useInView
          </Link>
        </div>
      </Section>

      <Section>
        <h3>示例</h3>
        <PreCode
          lang="tsx"
          code={`
"use client";
export default function ViewBaseAnimations() {
  return (
    <div>
      <div className="h-[150vh]" />
      <div className="h-[150vh] bg-blue-600" />
      <div className="h-[150vh] bg-black" />
    </div>
  );
}
          `}
        />
      </Section>

      <Section>
        <h3>whileInView</h3>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { motion } from "framer-motion";

export default function ViewBaseAnimations() {
  return (
    <div>
      <div className="h-[150vh]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, backgroundColor: "rgba(255, 0, 0, 1)" }} // [!code highlight]
        transition={{ duration: 1 }}
        className="h-[150vh] bg-blue-600"
      />
      <div className="h-[150vh] bg-black" />
    </div>
  );
}
          `}
        />
        <div className="text-left">
          <p className="text-xl text-white">颜色变化最好使用具体的颜色值</p>
        </div>
      </Section>

      <Section>
        <Link href="https://www.framer.com/motion/use-in-view/">
          <h3>useInView</h3>
        </Link>
        <PreCode
          lang="ts"
          code={`
interface UseInViewOptions extends Omit<InViewOptions, "root" | "amount"> {
    root?: RefObject$1<Element>;
    once?: boolean;
    amount?: "some" | "all" | number;
}
declare function useInView(ref: RefObject$1<Element>, { root, margin, amount, once }?: UseInViewOptions): boolean;
          `}
        />
      </Section>

      <Section>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ViewBaseAnimations() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("isInView", isInView);
  }, [isInView]);

  return (
    <div>
      <div className="h-[150vh]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, backgroundColor: "rgba(255, 0, 0, 1)" }}
        transition={{ duration: 1 }}
        className="h-[150vh] bg-blue-600"
      />
      <div
        ref={ref}
        className={\`h-[150vh] \${isInView ? "bg-black" : "bg-blue-600"}\`}
      />
    </div>
  );
}
          `}
        />
      </Section>

      <Section>
        <Code className="text-white">
          packages/framer-motion/src/render/dom/viewport/index.ts
        </Code>
        <Image className="m-0 h-[30rem]" src={Image1.src} />
        <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API">
          Intersection Observer API
        </Link>
      </Section>

      <Section>
        <Link href="https://www.framer.com/motion/use-animate/##scroll-triggered-animations">
          scroll-triggered-animations
        </Link>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { motion, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export default function ViewBaseAnimations() {
  const [scope, animate] = useAnimate<HTMLDivElement>(); // [!code highlight:2]
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          backgroundColor: "rgba(0, 0, 0, 1)",
        },
        { duration: 1 },
      );
    } else {
      animate(
        scope.current,
        {
          backgroundColor: "rgba(0, 0, 255, 1)",
        },
        { duration: 1 },
      );
    }
  }, [animate, isInView, scope]);

  return (
    <div>
      <div className="h-[150vh]" />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, backgroundColor: "rgba(255, 0, 0, 1)" }}
        transition={{ duration: 1 }}
        className="h-[150vh] bg-blue-600"
      />
      <div ref={scope} className="h-[150vh] bg-blue-600" />
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
