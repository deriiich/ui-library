import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_UI_PRODUCT, UI_PRODUCT_HOST, UiProductId } from '../../theme/ui-product';

@Component({
  selector: 'ui-radio-button',
  standalone: true,
  host: UI_PRODUCT_HOST,
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss',
})
export class RadioButtonComponent {
  @Input() product: UiProductId = DEFAULT_UI_PRODUCT;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) value!: string;
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<string>();

  onSelect(): void {
    if (!this.disabled) {
      this.checkedChange.emit(this.value);
    }
  }
}
