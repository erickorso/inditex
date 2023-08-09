import type { Meta, StoryObj } from '@storybook/react';
import XH1 from '@/components/Atoms/XH1';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta = {
  title: 'Example/XH1',
  component: XH1,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    title: 'Hello, Storybook!',
  },
};

export const WithColor: Story = {
  args: {
    title: 'Hello, Storybook!',
    color: 'red',
  },
};
export const WithSize: Story = {
  args: {
    title: 'Hello, Storybook!',
    color: 'red',
    size: '40',
  },
};
