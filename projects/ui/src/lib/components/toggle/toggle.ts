import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-toggle',
  standalone: true,
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class ToggleComponent {
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle(): void {
    if (!this.disabled) {
      this.checkedChange.emit(!this.checked);
    }
  }
}
