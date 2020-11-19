import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import * as XLSX from 'xlsx';
import { MatDialog } from '@angular/material/dialog';
import { OrderItemDialogComponent } from '../order-item-dialog/order-item-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  name: string;
  guid: string;
  missing: boolean;
  qty: string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'guid', 'qty', 'missing'];
  dataSource;
  @ViewChild('TABLE') table: ElementRef;

  constructor(private httpService: HttpService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.httpService.getItems().subscribe(
      (data: []) => {
        this.dataSource = new MatTableDataSource(data.filter((item) => item['available'] === true));
      }
    );
  }

  updateItem(isMissing: boolean, el: any) {
    el['missing'] = isMissing;

    if (isMissing) {
      el['available'] = false;
      const data = [...this.dataSource.data.filter((item) => el['_id'] !== item['_id'])];
      this.dataSource = new MatTableDataSource(data);
    }

    this.httpService.updateItem(el).subscribe(
      (result: string) => {
        this.openSnackBar(result);
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000 });
  }

  report() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'report_sales.csv');
  }

  addItem() {
    const dialogRef = this.dialog.open(OrderItemDialogComponent, { width: '550px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const data = [...this.dataSource.data, result];
        this.dataSource = new MatTableDataSource(data);
        this.openSnackBar("Item Added");
      }
    });
  }

}
