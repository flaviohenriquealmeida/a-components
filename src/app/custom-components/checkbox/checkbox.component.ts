// https://github.com/angular/angular/issues/17495

import { Component, Output, EventEmitter, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from "@angular/forms";

@Component({
    selector: 'my-checkbox',
    templateUrl: './checkbox.component.html',
    providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => CheckboxComponent),
          multi: true
        }
      ]    
})
export class CheckboxComponent implements ControlValueAccessor {

    @Input() checked:boolean = false;
    @Output() onChange = new EventEmitter<boolean>();
    
    propagateChange = (_: any) => {};

    /* This method gets called when the form is initialized, 
    with the form model’s initial value. This means it will override 
    the default value 0, which is fine but if we think about the simple 
    form setup we talked about earlier, we realise that there is 
    no initial value in the form model:
    */
    writeValue(value: any): void {
        console.log('writeValue', value);
        this.checked = value;
    }
    
    /* 
        We don’t want to do anything at this event, so we can implement 
        the interface with an empty function.
    */
    registerOnChange(fn: any): void {
        console.log('registerOnChange');
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void {}

    setDisabledState?(isDisabled: boolean): void {
        //this.disabled = isDisabled;
    }

    toogle() {
        this.checked = !this.checked;
        this.propagateChange(this.checked);
        this.onChange.emit(this.checked)
    }

    setChecked() {
        this.checked = true;
        this.propagateChange(this.checked);
        this.onChange.emit(this.checked);
    }

    setUnChecked() {
        this.checked = false;
        this.propagateChange(this.checked);
        this.onChange.emit(this.checked);
    }

    uncheckFirstThenCheck() {
        this.setUnChecked();
        this.setChecked();
    }
}