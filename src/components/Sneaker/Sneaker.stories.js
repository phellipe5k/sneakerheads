import React from "react";
import Sneaker from '.';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import mock from './mock';
import GlobalStyle from '../../styles/global';
export default {
  title: 'Example/Sneaker',
  component: Sneaker,
  control: {
    type: 'boolean',
  }
};

const Story = (args) => <ThemeProvider theme={theme}>
<GlobalStyle /><Sneaker item={mock[1]} {...args} /></ThemeProvider>;

export const Default = Story.bind({});
Default.args = {
  
};
