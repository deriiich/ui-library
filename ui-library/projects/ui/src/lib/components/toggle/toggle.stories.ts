import type { Meta, StoryObj } from '@storybook/angular';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_ARG_TYPE } from '../../theme/ui-product';
import { ToggleComponent } from './toggle';

const meta: Meta<ToggleComponent> = {
  title: 'Components/Toggle',
  component: ToggleComponent,
  argTypes: {
    product: UI_PRODUCT_ARG_TYPE,
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    product: DEFAULT_UI_PRODUCT,
    checked: false,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-toggle [product]="product" [checked]="checked" [disabled]="disabled">Enable notifications</ui-toggle>`,
  }),
};

export default meta;
type Story = StoryObj<ToggleComponent>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
