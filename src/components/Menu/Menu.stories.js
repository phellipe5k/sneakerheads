import React from "react";
import Menu from '.';
export default {
  title: 'Example/Menu',
  component: Menu,
};

const Story = (args) => <Menu {...args} />;

export const Default = Story.bind({});
Default.args = {
};