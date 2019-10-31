import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-mresumen',
  templateUrl: './mresumen.component.html',
  styleUrls: ['./mresumen.component.scss']
})
export class MresumenComponent implements OnInit {
  public items: any[];

  constructor(public afdb: AngularFireDatabase) { 
    this.afdb.list<any>('data_metricas_clean').valueChanges().subscribe(data => {
      this.items = data;
    })
  }

  ngOnInit() {

  }

}
