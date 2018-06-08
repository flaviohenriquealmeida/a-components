import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'mco-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

    @Output() onInteration = new EventEmitter()

    maxRowsPerPage: number = 5;
    rowCount: number = 0;
    numberOfRowsOption: number[] = [
        5, 10, 20, 30
    ];

    private currentPage: number = 1;

    setRowCount(rowCount: number) {
        this.rowCount = rowCount;
    }

    getRowCount() {
        return this.rowCount;
    }

    setCurrentPage(page) {
        this.currentPage = page;
        this.onInteration.emit(null);
    }

    getMaxRowsPerPage() {
        return this.maxRowsPerPage;
    }

    getCurrentPage() {
        return this.currentPage;
    }

    getNumberOfPages() {        
        return Math.ceil(this.rowCount / this.maxRowsPerPage);
    }

    chageRowsPerPage(event) {
        this.maxRowsPerPage = event.target.value;
        this.currentPage = 1;
        this.onInteration.emit(null);
    }

    nextPage() {
        
        if(this.currentPage + 1 <= this.getNumberOfPages()) {
            this.currentPage++;
            this.onInteration.emit(null);
        } 
    }

    previowsPage() {
        
        if(this.currentPage - 1 >= 1) {
            this.currentPage--;
            this.onInteration.emit(null);
        }
    }
}