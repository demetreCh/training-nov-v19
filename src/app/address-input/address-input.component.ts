import { Component } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, FormRecord, FormsModule, NG_VALUE_ACCESSOR, NonNullableFormBuilder, ReactiveFormsModule, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Address } from '../address.interface';

@Component({
  selector: 'app-address-input',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './address-input.component.html',
  styleUrl: './address-input.component.css',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AddressInputComponent,
    multi: true,
  }]
})
export class AddressInputComponent implements ControlValueAccessor{

  set value(val: Address) {
    this.addressGroup.patchValue(val);
    // Les deux lignes suivantes permettent de faire évoluer le cycle de vie de mon formulaire
    this.onChange(val);
    this.onTouched();
  }

  get value() {
    return this.addressGroup.getRawValue();
  }

  private onTouched = () => { };
  private onChange = (val: Address) => { };
 
  writeValue(address?: Address): void {
    if (!address){
      return
    }
    this.value = address;
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  readonly addressGroup = new FormGroup({
    'number': new FormControl('', { nonNullable: true }),
    'street': new FormControl('', { validators: [Validators.required], nonNullable: true }),
    'postalCode': new FormControl('', { nonNullable: true }),
    'city': new FormControl('', { nonNullable: true }),
    'country': new FormControl('', { nonNullable: true }),
  });






}
