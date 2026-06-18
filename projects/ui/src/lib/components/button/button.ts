import { Component, Input } from '@angular/core';

export type UiButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

@Component({
  selector: 'ui-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input() variant: UiButtonVariant = 'primary';
  @Input() disabled = false;

  get variantClass(): string {
    return `variant-${this.variant}`;
  }
}
