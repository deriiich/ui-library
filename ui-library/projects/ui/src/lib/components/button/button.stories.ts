import type { Meta, StoryObj } from '@storybook/angular';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_ARG_TYPE } from '../../theme/ui-product';
import { ButtonComponent } from './button';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    product: UI_PRODUCT_ARG_TYPE,
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    product: DEFAULT_UI_PRODUCT,
    variant: 'primary',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-button [product]="product" [variant]="variant" [disabled]="disabled">Button</ui-button>`,
  }),
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Ghost: Story = { args: { variant: 'ghost' } };
export const Danger: Story = { args: { variant: 'danger' } };
export const Disabled: Story = { args: { disabled: true } };
