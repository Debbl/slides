import { Link as NextUILink } from "@nextui-org/react";
import type { LinkProps } from "@nextui-org/react";

export function Link(props: LinkProps) {
  return <NextUILink target="_blank" rel="noreferrer" {...props} />;
}
