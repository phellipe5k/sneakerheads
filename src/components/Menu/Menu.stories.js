import React from "react";
import Menu from '.';
export default {
  title: 'Example/Menu',
  component: Menu,
  control: {
    type: 'boolean',
  }
};

const Story = (args) => <Menu {...args} />;

export const Logged = Story.bind({});
Logged.args = {
  logged: true,
};

export const NoAccount = Story.bind({});
NoAccount.args = {
  logged: false,
};