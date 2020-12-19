import React from "react";
import Button from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
export default {
  title: 'Example/Button',
  component: Button,
};

const Story = (args) => <ThemeProvider theme={theme}><Button {...args} /></ThemeProvider>;

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