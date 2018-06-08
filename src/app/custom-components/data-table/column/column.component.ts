import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'mco-column',
    templateUrl: './column.component.html'
})
export class ColumnComponent implements OnInit {

    @Input() data: any;
    @Input() showTrueAs;
    @Input() showFalseAs;
    type: string = "text";

    ngOnInit(): void {
        
        if(!this.showFalseAs) this.showFalseAs = 'false';
        if(!this.showTrueAs) this.showTrueAs = 'true';
        if(this.isTypeDate(this.data)) this.type = 'date';
        if(this.isTypeBoolean(this.data)) this.type = 'boolean';
    }

    private isTypeDate(data: any) {
        if(typeof data != 'number') {
            return !isNaN(Date.parse(data));
        }
        return false;
    }

    private isTypeBoolean(data: any) {
        return typeof(data) === 'boolean';
    }
}
