import React from "react";
import Navigation from '.';
export default {
  title: 'Example/Navigation',
  component: Navigation,
};

const Story = (args) => <Navigation {...args} />;

export const Default = Story.bind({});
Default.args = {
};