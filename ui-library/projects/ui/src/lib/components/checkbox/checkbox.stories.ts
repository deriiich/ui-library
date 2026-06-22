import type { Meta, StoryObj } from '@storybook/angular';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_ARG_TYPE } from '../../theme/ui-product';
import { CheckboxComponent } from './checkbox';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  argTypes: {
    product: UI_PRODUCT_ARG_TYPE,
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
  args: {
    product: DEFAULT_UI_PRODUCT,
    checked: false,
    disabled: false,
    indeterminate: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-checkbox [product]="product" [checked]="checked" [disabled]="disabled" [indeterminate]="indeterminate">Accept terms</ui-checkbox>`,
  }),
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const Disabled: Story = { args: { disabled: true } };
