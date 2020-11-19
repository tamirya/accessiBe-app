import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../http.service';
import * as XLSX from 'xlsx';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-logistics',
  templateUrl: './logistics.component.html',
  styleUrls: ['./logistics.component.scss']
})
export class LogisticsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'guid', 'qty', 'available'];
  dataSource;
  @ViewChild('TABLE') table: ElementRef;

  constructor(private httpService: HttpService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.httpService.getItems().subscribe(
      (data: []) => {
        this.dataSource = new MatTableDataSource(data.filter((item) => item['available'] === false));
      }
    );
  }

  updateItem(isAvailable: boolean, el: any) {
    el['available'] = isAvailable;

    if (isAvailable) {
      el['missing'] = false;
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
    XLSX.writeFile(wb, 'report_logistics.csv');
  }


}
