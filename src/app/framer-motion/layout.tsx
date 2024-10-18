import Reveal from "~/components/Reveal";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Framer Motion",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <Reveal>{children}</Reveal>
    </div>
  );
}
