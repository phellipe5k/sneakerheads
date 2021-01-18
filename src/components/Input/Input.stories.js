import React from "react";
import Input from '.';
export default {
  title: 'Example/Input',
  component: Input,
};

const Story = (args) => <Input {...args} />;

export const Default = Story.bind({});
Logged.args = {
  type: 'text',
};


export const Password = Story.bind({});
Password.args = {
  type: 'password'
};


export const Email = Story.bind({});
Email.args = {
  type: 'email'
};
