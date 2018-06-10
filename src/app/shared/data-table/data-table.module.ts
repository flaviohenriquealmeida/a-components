import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataTableComponent } from "./data-table.component";
import { HttpClientModule } from "@angular/common/http";
import { PaginationComponent } from "./paginator/pagination.component";
import { ColumnHeaderComponent } from "./column-header/column-header.component";
import { ColumnComponent } from "./column/column.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { CheckboxModule } from "../checkbox/checkbox.module";

@NgModule({
    declarations: [ 
        DataTableComponent, 
        PaginationComponent,
        ColumnHeaderComponent,
        ColumnComponent
    ],
    exports: [ 
        DataTableComponent,
    ],
    imports: [ 
        CommonModule,
        CheckboxModule,
        HttpClientModule
    ]
})
export class DataTableModule {}