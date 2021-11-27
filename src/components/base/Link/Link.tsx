import * as React from "react";
import { useRouter } from "next/router";
import { LinkProps as NextLinkProps } from "next/dist/client/link";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

import clsx from "clsx";

import { NextLinkComposed, NextLinkComposedProps } from "./NextLinkComposed";

export type LinkProps = {
  activeClassName?: string;
  as?: NextLinkProps["as"];
  href: NextLinkProps["href"];
  linkAs?: NextLinkProps["as"]; // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<MuiLinkProps, "href">;

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link(props, ref) {
    const {
      activeClassName = "active",
      as: linkAs,
      className: classNameProps,
      href,
      ...other
    } = props;

    const router = useRouter();
    const pathname = typeof href === "string" ? href : href.pathname;
    const className = clsx(classNameProps, {
      [activeClassName]: router.pathname === pathname && activeClassName,
    });

    const isExternal =
      typeof href === "string" &&
      (href.indexOf("http") === 0 || href.indexOf("mailto:") === 0);

    if (isExternal) {
      return <MuiLink className={className} href={href} ref={ref} {...other} />;
    }

    return (
      <MuiLink
        component={NextLinkComposed}
        linkAs={linkAs}
        className={className}
        ref={ref}
        to={href}
        {...other}
      />
    );
  }
);
