import React from "react";
import Button from '.';
export default {
  title: 'Example/Button',
  component: Button,
};

const Story = (args) => <Button {...args} />;

export const Primary = Story.bind({});
Primary.args = {
  size: 'medium',
  styles: 'primary',
};

export const Secondary = Story.bind({});
Secondary.args = {
  size: 'medium',
  styles: 'secondary',
};

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