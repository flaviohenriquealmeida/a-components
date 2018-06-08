import { NgModule } from "@angular/core";
import { HtmlControlsComponent } from "./html-controls.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ HtmlControlsComponent ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule 
    ]
})
export class HtmlControlsModule {}