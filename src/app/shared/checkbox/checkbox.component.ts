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

    @Input() checked: boolean = false;
    @Output() onChange = new EventEmitter<boolean>();

    propagateChange = (_: any) => { };


    writeValue(value: any): void {
        this.checked = !!value;
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    registerOnTouched(fn: any): void { }

    setDisabledState?(isDisabled: boolean): void { }

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