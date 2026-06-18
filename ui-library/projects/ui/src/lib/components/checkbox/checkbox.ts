import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  standalone: true,
  templateUrl: './checkbox.html',
  styleUrl: './checkbox.scss',
})
export class CheckboxComponent {
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
