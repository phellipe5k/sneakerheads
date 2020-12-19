import React from "react";
import Footer from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

export default {
  title: 'Example/Footer',
  component: Footer,
  control: {
    type: 'boolean',
  }
};

const Story = (args) => <ThemeProvider theme={theme}><Footer {...args} /></ThemeProvider>;

export const Default = Story.bind({});
Default.args = {
  
};
