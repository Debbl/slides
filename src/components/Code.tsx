"use client";
import { transformerNotationHighlight } from "@shikijs/transformers";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import { useEffect, useMemo, useState } from "react";
import { createHighlighter } from "shiki";
import { cn } from "twl";
import { Icon } from "~/icons";
import type { ComponentProps, ReactElement } from "react";
import type { BundledLanguage } from "shiki";

export function CopyButton({
  lang,
  code,
  className,
}: {
  lang: string;
  code: string;
  className: string;
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <motion.button
      type="button"
      aria-label="Copy code"
      data-value={code}
      data-lang={lang}
      className={className}
      onClick={handleCopy}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon
        icon={isCopied ? "CarbonCheckmark" : "Copy"}
        className={cn(isCopied && "text-green-500")}
      />
    </motion.button>
  );
}

export default function Code({
  lang,
  code: rawCode,
  lineNumbers,
  className,
}: ComponentProps<"pre"> & {
  code: string;
  lineNumbers?: boolean;
  lang: BundledLanguage | "text" | "plain";
  className?: string;
}): ReactElement {
  const code = rawCode.trim();
  const [renderedHTML, setRenderedHTML] = useState<string>("");

  useEffect(() => {
    (async () => {
      const highlighter = await createHighlighter({
        themes: ["one-dark-pro"],
        langs: [lang],
      });

      setRenderedHTML(
        highlighter.codeToHtml(code.trim(), {
          lang,
          theme: "one-dark-pro",
          transformers: [transformerNotationHighlight()],
        }),
      );
    })();
  }, [code, lang]);

  useEffect(() => {
    if (renderedHTML) window.reveal?.sync();
  }, [renderedHTML]);

  const preJSXElement = useMemo(
    () => parse(renderedHTML),
    [renderedHTML],
  ) as JSX.Element;

  return (
    <div
      className={cn(
        "group relative mt-4 overflow-hidden text-xl rounded-xl first:mt-0",
        className,
      )}
    >
      <div className={cn(`language-${lang}`, "group relative")}>
        <span className="absolute right-2 top-2 z-10 text-xs text-gray-300 transition-opacity group-hover:opacity-0">
          {lang}
        </span>
        <figure>
          {renderedHTML ? (
            <pre
              {...preJSXElement.props}
              className={cn("p-4", { "line-numbers": lineNumbers })}
            />
          ) : (
            <pre className={cn("p-4", "bg-[rgb(40, 44, 52)]")}>
              <code className={cn({ "!pl-[2.8125rem]": lineNumbers })}>
                {code}
              </code>
            </pre>
          )}
        </figure>

        <CopyButton
          className="absolute right-2 top-2 z-30 rounded-md p-1 text-gray-300 opacity-0 transition-opacity hover:bg-gray-700 group-hover:opacity-100"
          lang={lang}
          code={code}
        />
      </div>
    </div>
  );
}
