import React from "react";
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import Menu from '.';
export default {
  title: 'Example/Menu',
  component: Menu,
  control: {
    type: 'boolean',
  }
};

const Story = (args) => <ThemeProvider theme={theme}><Menu {...args} /></ThemeProvider>;

export const Logged = Story.bind({});
Logged.args = {
  logged: true,
};

export const NoAccount = Story.bind({});
NoAccount.args = {
  logged: false,
};