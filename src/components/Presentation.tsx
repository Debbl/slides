"use client";
import { useMount } from "@debbl/ahooks";
import { useRef } from "react";
import Reveal from "reveal.js";
import type { ReactNode } from "react";

export default function Presentation({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reveal = useRef<Reveal.Api | null>(null);

  useMount(() => {
    if (reveal.current) return;

    reveal.current = new Reveal(containerRef.current!, {
      width: 1100,
      height: 700,
      transition: "slide",
      hash: true,
    });

    window.reveal = reveal.current;
    reveal.current.initialize().then(() => {});

    return () => {
      try {
        if (reveal.current) {
          reveal.current.destroy();
          reveal.current = null;
        }
      } catch {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  });

  return (
    <div className="reveal h-full" ref={containerRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
