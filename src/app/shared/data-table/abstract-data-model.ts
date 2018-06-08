import { Observable } from "rxjs";

export abstract class AbstractDataModel<T> {

    private rowCount: number;

    abstract load(page: number, rows: number): Observable<T>;

    abstract getRowCount(): Observable<number>;
    
    setRowCount(rows: number) {
        this.rowCount = rows;
    }
}
