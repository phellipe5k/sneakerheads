import React from "react";
import Footer from '.';
export default {
  title: 'Example/Footer',
  component: Footer,
  control: {
    type: 'boolean',
  }
};

const Story = (args) => <Footer {...args} />;

export const Default = Story.bind({});
Default.args = {
  
};
