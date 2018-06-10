import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
    selector: 'my-select',
    templateUrl: './select.component.html'
})
export class SelectComponent implements ControlValueAccessor {
    
    @Input() options: any[] = [];
    @Input() label: string = "choose";
    @Input() propertyLabel: string;

    propagateChange = (_: Function) => { };

    writeValue(obj: any): void {
        throw new Error("Method not implemented.");
    }

    registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    registerOnTouched(fn: any): void { }
    setDisabledState?(isDisabled: boolean): void { } 
}
