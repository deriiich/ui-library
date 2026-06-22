import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_HOST, UiProductId } from '../../theme/ui-product';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  host: UI_PRODUCT_HOST,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class CheckboxComponent {
  @Input() product: UiProductId = DEFAULT_UI_PRODUCT;
  @Input() checked = false;
  @Input() disabled = false;
  @Input() indeterminate = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle(): void {
    if (!this.disabled) {
      this.checkedChange.emit(!this.checked);
    }
  }
}
