import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-order-item-dialog',
  templateUrl: './order-item-dialog.component.html',
  styleUrls: ['./order-item-dialog.component.scss']
})
export class OrderItemDialogComponent implements OnInit {

  formItem: FormGroup = new FormGroup({
    name: new FormControl('Item test 1', [Validators.required]),
    guid: new FormControl('123467910', [Validators.required]),
    qty: new FormControl('20', [Validators.required])
  });

  constructor(
    private httpService: HttpService,
    private dialogRef: MatDialogRef<OrderItemDialogComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.formItem.invalid) {
      this.openSnackBar('please fill in the missing information');
      return;
    }

    const item = this.formItem.value;
    item['available'] = true;
    item['missing'] = false;
    this.httpService.addNewItem(item).subscribe(
      (result) => {
        this.dialogRef.close(result);
      }
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000 });
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

}
