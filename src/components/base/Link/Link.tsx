import React, { forwardRef } from "react";
import NextLink from "next/link";

import { LinkProps as NextLinkProps } from "next/dist/client/link";

import { Anchor } from "@/components/base/Link/styles";

export interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<NextLinkProps, "href" | "as"> {
  to: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"];
  href?: NextLinkProps["href"];
}

export const Link = forwardRef<HTMLAnchorElement, NextLinkComposedProps>(
  (props, ref) => {
    const {
      to,
      linkAs,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      href,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      ...other
    } = props;

    return (
      <NextLink
        href={to}
        prefetch={prefetch}
        as={linkAs}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        passHref
        locale={locale}
      >
        <Anchor ref={ref} {...other} />
      </NextLink>
    );
  }
);

Link.displayName = "Link";
