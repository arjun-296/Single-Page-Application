import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  result: boolean = false;
  switch() {
    this.result = !this.result;
  }

  result1: boolean = false;
  switchtolivform() {
    this.result1 = !this.result1;
  }
}
