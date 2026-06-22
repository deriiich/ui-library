import { Component, Input } from '@angular/core';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_HOST, UiProductId } from '../../theme/ui-product';

export type UiButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

@Component({
  selector: 'ui-button',
  standalone: true,
  host: UI_PRODUCT_HOST,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input() product: UiProductId = DEFAULT_UI_PRODUCT;
  @Input() variant: UiButtonVariant = 'primary';
  @Input() disabled = false;

  get variantClass(): string {
    return `variant-${this.variant}`;
  }
}
