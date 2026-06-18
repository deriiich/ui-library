import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-checkbox [checked]="checked" [disabled]="disabled" [indeterminate]="indeterminate">Accept terms</ui-checkbox>`,
  }),
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true } };
