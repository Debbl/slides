import { Image } from "@nextui-org/react";
import { Link } from "~/components/Link";
import PreCode from "~/components/slides/PreCode";
import Section from "~/components/slides/Section";
import EndSection from "../_components/EndSection";
import FirstSection from "../_components/FirstSection";
import Example1 from "./example1.gif";
import Example2 from "./example2.gif";
import Image1 from "./image1.png";
import Image2 from "./image2.png";

export default function Page() {
  return (
    <>
      <FirstSection />
      <Section>
        <h2>滚动动画</h2>

        <Link href="https://www.framer.com/motion/use-scroll/">useScroll</Link>
      </Section>

      <Section>
        <Image src={Example1.src} />
      </Section>

      <Section>
        <Image src={Example2.src} />
      </Section>

      <Section>
        <PreCode
          lang="tsx"
          code={`
"use client";

export default function ScrollAnimations() {
  return (
    <div>
      <div className="p-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="pt-2 indent-2 first:pt-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eveniet
            consectetur nam deleniti inventore libero quia expedita quidem
            voluptate enim, magni aspernatur tempora doloremque tenetur.
            Temporibus eum eligendi nihil doloribus. Totam, ut assumenda labore
            cum rerum dolores numquam inventore eaque similique sapiente omnis
            nulla. Iure tempore non temporibus provident reiciendis repellendus
            maiores, velit earum, at minima, aperiam fugit impedit. Nihil. Animi
            saepe fuga totam dignissimos blanditiis iure. Architecto iste
            tempore dolorum omnis pariatur impedit quasi eius, adipisci sequi
            consequuntur quas? Excepturi ad eos corrupti veniam ducimus,
            eligendi dolorum recusandae facilis. Exercitationem officiis maiores
            modi totam nam distinctio deleniti velit molestiae ab, magnam labore
            dolores veniam omnis mollitia tempore vel reprehenderit facere
            maxime. Itaque inventore nulla enim suscipit est commodi nam.
            Cupiditate, dolorem ipsum ducimus labore dolores odit similique
            natus provident voluptatibus voluptas quibusdam iure totam saepe ex
            itaque fuga. Alias saepe velit similique blanditiis incidunt neque
            repellendus recusandae, facilis quisquam. Ad quam aliquid doloremque
            voluptates, laboriosam qui ex soluta dolore optio obcaecati neque,
            esse fugit ipsam ipsum repudiandae, ullam quos! Totam minima ullam
            eius quos sit labore eos voluptas rerum.
          </p>
        ))}
      </div>
    </div>
  );
}
          `}
        />
      </Section>

      <Section>
        <Link href="https://www.framer.com/motion/use-scroll/">useScroll</Link>
        <div className="flex justify-center">
          <Image className="h-[36rem]" src={Image1.src} />
        </div>
      </Section>

      <Section>
        <Link href="https://www.framer.com/motion/motionvalue/">
          <h3>Motion Value</h3>
        </Link>
        <p className="text-left text-sm">
          更新 motion value 的值不会触发重新渲染
        </p>
        <div className="flex justify-center">
          <Image src={Image2.src} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-center">
          <Link href="https://www.framer.com/motion/use-spring/">
            useSpring
          </Link>
          <Link href="https://www.framer.com/motion/use-transform/">
            useTransform
          </Link>
        </div>
      </Section>

      <Section>
        <PreCode
          lang="tsx"
          code={`
"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#000", "#0f0"],
  );

  return (
    <div>
      <motion.div
        style={{ scaleX, backgroundColor }}
        className="fixed top-0 h-6 w-full origin-left bg-red-600"
      />
      <div className="p-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id eveniet
            consectetur nam deleniti inventore libero quia expedita quidem
            voluptate enim, magni aspernatur tempora doloremque tenetur.
            Temporibus eum eligendi nihil doloribus. Totam, ut assumenda labore
            cum rerum dolores numquam inventore eaque similique sapiente omnis
            nulla. Iure tempore non temporibus provident reiciendis repellendus
            maiores, velit earum, at minima, aperiam fugit impedit. Nihil. Animi
            saepe fuga totam dignissimos blanditiis iure. Architecto iste
            tempore dolorum omnis pariatur impedit quasi eius, adipisci sequi
            consequuntur quas? Excepturi ad eos corrupti veniam ducimus,
            eligendi dolorum recusandae facilis. Exercitationem officiis maiores
            modi totam nam distinctio deleniti velit molestiae ab, magnam labore
            dolores veniam omnis mollitia tempore vel reprehenderit facere
            maxime. Itaque inventore nulla enim suscipit est commodi nam.
            Cupiditate, dolorem ipsum ducimus labore dolores odit similique
            natus provident voluptatibus voluptas quibusdam iure totam saepe ex
            itaque fuga. Alias saepe velit similique blanditiis incidunt neque
            repellendus recusandae, facilis quisquam. Ad quam aliquid doloremque
            voluptates, laboriosam qui ex soluta dolore optio obcaecati neque,
            esse fugit ipsam ipsum repudiandae, ullam quos! Totam minima ullam
            eius quos sit labore eos voluptas rerum.
          </p>
        ))}
      </div>
    </div>
  );
}
          `}
        />
      </Section>

      <Section>
        <Image src={Example2.src} />
      </Section>

      <EndSection />
    </>
  );
}
