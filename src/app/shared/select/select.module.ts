import { NgModule } from "@angular/core";
import { SelectComponent } from "./select.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [ SelectComponent ],
    exports: [ SelectComponent ],
    imports: [ CommonModule, FormsModule ]
})
export class SelectModule { }