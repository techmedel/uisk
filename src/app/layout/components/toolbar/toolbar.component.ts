import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public items: any[]

  constructor(public router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd ){
        this.items = val.url.split("/")
      }
    });
  }

  ngOnInit(): void {
    
  }

}
