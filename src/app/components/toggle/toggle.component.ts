import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  isOnline = false;

  constructor() { }
  toggle() {
    this.isOnline = !this.isOnline;
  }
  get message() {
    return this.isOnline ? 'Welcome back' : 'Please Log in';
  }
  ngOnInit() {
  }

}
