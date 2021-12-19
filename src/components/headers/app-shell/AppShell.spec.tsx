import React from "react";
import { useRouter } from "next/router";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import mockRouter from "next-router-mock";

import { AppShell } from "@/components/headers/app-shell";

import Path from "@/types/enums/Path";

jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("<AppShell />", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl(Path.HOME);
  });

  const component = (): RenderResult => {
    return render(<AppShell />);
  };

  it(`should navigate to another page`, () => {
    const { getAllByText } = component();
    const { result } = renderHook(() => useRouter());

    const [aboutNavLink] = getAllByText("About");

    expect(result.current).toMatchObject({
      asPath: "/",
    });

    fireEvent.click(aboutNavLink);

    expect(result.current).toMatchObject({
      asPath: "/about",
    });
  });

  it(`should have aria-current set to 'page' on active element`, () => {
    const { getAllByText } = component();

    const [blogNavLink, blogMenuLink] = getAllByText("Blog");
    const [aboutNavLink, aboutMenuLink] = getAllByText("About");

    expect(blogNavLink).toHaveAttribute("aria-current", "page");
    expect(blogMenuLink).toHaveAttribute("aria-current", "page");

    expect(aboutNavLink).toHaveAttribute("aria-current", "false");
    expect(aboutMenuLink).toHaveAttribute("aria-current", "false");

    fireEvent.click(aboutNavLink);

    expect(blogNavLink).toHaveAttribute("aria-current", "false");
    expect(blogMenuLink).toHaveAttribute("aria-current", "false");

    expect(aboutNavLink).toHaveAttribute("aria-current", "page");
    expect(aboutMenuLink).toHaveAttribute("aria-current", "page");
  });

  it(`should open and close hamburger menu on touch and navigate to `, () => {
    const { getByRole } = component();

    const menuButton = getByRole("button");

    expect(menuButton).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(menuButton);

    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });
});
