import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_HOST, UiProductId } from '../../theme/ui-product';

@Component({
  selector: 'ui-toggle',
  standalone: true,
  host: UI_PRODUCT_HOST,
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class ToggleComponent {
  @Input() product: UiProductId = DEFAULT_UI_PRODUCT;
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle(): void {
    if (!this.disabled) {
      this.checkedChange.emit(!this.checked);
    }
  }
}
