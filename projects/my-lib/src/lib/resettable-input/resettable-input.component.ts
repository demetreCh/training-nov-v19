import { Component, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-resettable-input',
  imports: [FormsModule],
  templateUrl: './resettable-input.component.html',
  styleUrl: './resettable-input.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ResettableInputComponent,
    multi: true,
  }]
})
export class ResettableInputComponent implements ControlValueAccessor {
  _value: string = '';

  set value(val: string) {
    this._value = val;
    // Les deux lignes suivantes permettent de faire évoluer le cycle de vie de mon formulaire
    this.onChange(val);
    this.onTouched();
  }

  get value() {
    return this._value;
  }

  reset(): void {
    this.value = '';
  }

  private onTouched = () => { };
  private onChange = (val: string) => { };

  writeValue(obj?: string): void {
    if (!obj) return;
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
