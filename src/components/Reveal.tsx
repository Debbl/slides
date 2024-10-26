"use client";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const Presentation = dynamic(() => import("./Presentation"), {
  ssr: false,
});

export default function Reveal({ children }: { children: ReactNode }) {
  return <Presentation>{children}</Presentation>;
}
