import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  eventList = new Array<string>();
  ActiveID = 1
  routerName;
  constructor(private router:Router) { 

  }

  ngOnInit() {
    let elment: HTMLElement = document.getElementById('myModala') as HTMLElement
    elment.click()
  }
}
