import { Component, OnInit } from '@angular/core';
import { Api } from './app.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'material';

  constructor(public api: Api){
   
  }
  
  ngOnInit(){
    this.api.getStatusSession();
  }
}
