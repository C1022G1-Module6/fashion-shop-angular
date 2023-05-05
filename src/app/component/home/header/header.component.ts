import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
  toggle = true;
  status = "Enable";

  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? "Enable" : "Disable";
  }
}
