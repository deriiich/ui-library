import type { Meta, StoryObj } from '@storybook/angular';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_ARG_TYPE } from '../../theme/ui-product';
import { RadioButtonComponent } from './radio-button';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  argTypes: {
    product: UI_PRODUCT_ARG_TYPE,
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    product: DEFAULT_UI_PRODUCT,
    name: 'plan',
    value: 'basic',
    checked: false,
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<ui-radio-button [product]="product" [name]="name" [value]="value" [checked]="checked" [disabled]="disabled">Option</ui-radio-button>`,
  }),
};

export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Group: Story = {
  render: () => ({
    props: { selected: 'basic' },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ui-radio-button
          name="plan"
          value="basic"
          [checked]="selected === 'basic'"
          (checkedChange)="selected = $event"
        >
          Basic
        </ui-radio-button>
        <ui-radio-button
          name="plan"
          value="pro"
          [checked]="selected === 'pro'"
          (checkedChange)="selected = $event"
        >
          Pro
        </ui-radio-button>
      </div>
    `,
  }),
};
