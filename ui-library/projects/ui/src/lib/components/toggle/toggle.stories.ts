import type { Meta, StoryObj } from '@storybook/angular';
import { ToggleComponent } from './toggle';

const meta: Meta<ToggleComponent> = {
  title: 'Components/Toggle',
  component: ToggleComponent,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    checked: false,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-toggle [checked]="checked" [disabled]="disabled">Enable notifications</ui-toggle>`,
  }),
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
