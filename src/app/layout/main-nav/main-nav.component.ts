import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  menuWeb = false;
  faBars = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuExpand():void{
    this.menuWeb = !this.menuWeb;
    this.faBars = !this.faBars;
  }


}
