import React from "react";
import Button from '.';
export default {
  title: 'Example/Button',
  component: Button,
};

const Story = (args) => <Button {...args} />;

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