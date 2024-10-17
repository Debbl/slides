import type { ReactNode } from "react";

export default function Section({ children }: { children: ReactNode }) {
  return (
    <section className="h-full">
      <div className="flex h-full flex-col">
        <div className="relative flex flex-1 flex-col justify-center">
          {children}
        </div>
      </div>
    </section>
  );
}
