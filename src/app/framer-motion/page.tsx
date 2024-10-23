import { Link } from "@nextui-org/react";
import Section from "~/components/slides/Section";

export default function Page() {
  return (
    <>
      <Section>
        <h2>Framer Motion</h2>

        <div className="flex flex-col items-center">
          <Link className="text-2xl" href="./basic">
            基础教程
          </Link>

          <Link className="text-2xl" href="./gestures">
            手势动画
          </Link>

          <Link className="text-2xl" href="./animation-controls">
            手动控制动画
          </Link>

          <Link className="text-2xl" href="./view-base-animations">
            视口动画
          </Link>
        </div>
      </Section>
    </>
  );
}
