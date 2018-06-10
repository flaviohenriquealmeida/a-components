import { Component, Input, Output, OnChanges, SimpleChanges, OnInit } from "@angular/core";

@Component({
    selector: 'my-column-header',
    templateUrl: './column-header.component.html'
})
export class ColumnHeaderComponent implements OnInit {

    @Input() field: string;
    columnTitle: string;

    ngOnInit(): void {
        this.columnTitle = this.createColumnTitleFromField(this.field)
    }

    private createColumnTitleFromField(field: string) {
        let title = '';
        for (let letter of field) {
            this.isUpperCase(letter)
                ? title += ' ' + letter.toLowerCase()
                : title += letter;
        }
        return this.capitalizeFirstLetter(title.trim());
    }

    private isUpperCase(letter: string) {
        return /[A-Z]/.test(letter);
    }

    private capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}
