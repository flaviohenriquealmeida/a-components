import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';

import { AbstractDataModel } from "./abstract-data-model";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { PaginationComponent } from "./paginator/pagination.component";
import { fade } from "../animations/animations";

@Component({
    selector: 'mco-data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.scss'],
    animations: [ fade ]
})
export class DataTableComponent implements OnInit {

    @Input() dataModel: AbstractDataModel<any>;
    @Input() title: string;
    @Input() showTrueAs: string;
    @Input() showFalseAs: string;
    @Output() onChecked: EventEmitter<any> = new EventEmitter<any>();
    @Output() onUnChecked: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild(PaginationComponent) paginator: PaginationComponent;
    @ViewChildren(CheckboxComponent) checkboxes: CheckboxComponent[];

    private dataList$: Observable<any[]>;
    private fields: string[] = [];
    private firstLoad = true;

    ngOnInit(): void {

        this.dataModel
            .getRowCount()
            .subscribe(rowCount => 
                this.paginator.setRowCount(rowCount));
            
        this.loadData();
    }

    loadData(
        page: number = this.paginator.getCurrentPage(), 
        rows: number = this.paginator.getMaxRowsPerPage()): void {
    
        this.dataList$ = this.dataModel.load(page, rows)
            .pipe(tap(data => {
                if (this.isFirstTimeLoad()) {
                    this.setLoaded();
                    this.extractFieldsFromSampleObject(data[0]);
                }
            }));
        }

    toogleAll(checked) {
        this.checkboxes.forEach((checkbox, index) => {
            if(index !=0) checked
                ? checkbox.uncheckFirstThenCheck()
                : checkbox.setUnChecked();
        });
    }

    select(item: any, checked: boolean) {
        checked 
            ? this.onChecked.emit(item)
            : this.onUnChecked.emit(item); 
    }

    private extractFieldsFromSampleObject(sample: Object) {
        this.fields = Object.getOwnPropertyNames(sample);
    }

    private isFirstTimeLoad() {
        return this.firstLoad;
    }

    private setLoaded() {
        this.firstLoad = false;
    }
}