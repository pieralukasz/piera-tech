import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppShell } from "@/components/layout/AppShell/AppShell";

export default {
  title: "Layout/Appshell",
  component: AppShell,
  argTypes: {},
} as ComponentMeta<typeof AppShell>;

const Template: ComponentStory<typeof AppShell> = (args) => (
  <AppShell {...args} />
);

export const appshell = Template.bind({});
appshell.args = {};
