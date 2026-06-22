import type { Meta, StoryObj } from '@storybook/angular';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_ARG_TYPE } from '../../theme/ui-product';
import { InputComponent } from './input';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    product: UI_PRODUCT_ARG_TYPE,
    label: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search'],
    },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
  },
  args: {
    product: DEFAULT_UI_PRODUCT,
    label: 'Email',
    placeholder: 'you@example.com',
    type: 'email',
    value: '',
    disabled: false,
    required: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <ui-input
        [product]="product"
        [label]="label"
        [placeholder]="placeholder"
        [type]="type"
        [value]="value"
        [disabled]="disabled"
        [required]="required"
        (valueChange)="value = $event"
      />
    `,
  }),
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {};
export const Required: Story = { args: { required: true } };
export const Disabled: Story = { args: { disabled: true, value: 'Read only' } };
export const Password: Story = {
  args: { label: 'Password', type: 'password', placeholder: 'Enter password' },
};
