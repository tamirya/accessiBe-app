import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('sales@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('123123', Validators.required),
  });

  constructor(private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      this.openSnackBar('please fill in the missing information');
      return;
    }

    const navigateTo = this.form.controls['email'].value;

    if (navigateTo === 'sales@gmail.com') {
      this.router.navigate(['sales']);
    }

    if (navigateTo === 'logistics@gmail.com') {
      this.router.navigate(['logistics']);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 2000 });
  }

  getErrorMessage() {
    const emailError = this.form.controls['email'].hasError('email');
    return emailError ? 'Not a valid email' : 'You must enter a value';
  }

}
