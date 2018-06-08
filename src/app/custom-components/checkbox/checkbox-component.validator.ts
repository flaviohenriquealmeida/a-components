import { AbstractControl } from '@angular/forms';

export function myCheckboxRequired(control: AbstractControl) {

    return !control.value 
        ? { myCheckboxRequired: true }
        : null;
}