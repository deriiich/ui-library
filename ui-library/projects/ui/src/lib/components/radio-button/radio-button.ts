import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-radio-button',
  standalone: true,
  templateUrl: './radio-button.html',
  styleUrl: './radio-button.scss',
})
export class RadioButtonComponent {
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
