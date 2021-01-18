import React from "react";
import Logo from '.';
export default {
  title: 'Example/Logo',
  component: Logo,
};

const Story = (args) => <Logo {...args} />;

export const Default = Story.bind({});
Default.args = {
  size: 'medium',
};

export const Small = Story.bind({});

Small.args = {
  size: 'small',
};

export const Large = Story.bind({});

Large.args = {
  size: 'large',
};