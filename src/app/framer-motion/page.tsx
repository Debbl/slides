import { Link } from "@nextui-org/react";
import Section from "~/components/slides/Section";

export default function Page() {
  return (
    <>
      <Section>
        <h2>Framer Motion</h2>

        <Link className="text-2xl" href="./basic">
          基础教程
        </Link>
      </Section>
    </>
  );
}
