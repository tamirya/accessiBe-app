import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() name: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.router.navigate(['login']);
  }

}
