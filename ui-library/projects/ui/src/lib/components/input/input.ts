import { Component, EventEmitter, Input, Output } from '@angular/core';

export type UiInputType = 'text' | 'email' | 'password' | 'number' | 'search';

@Component({
  selector: 'ui-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type: UiInputType = 'text';
  @Input() value = '';
  @Input() disabled = false;
  @Input() required = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
