import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-cnoticias',
  templateUrl: './cnoticias.component.html',
  styleUrls: ['./cnoticias.component.scss']
})
export class CnoticiasComponent implements OnInit {
  public items:any;

  constructor(private afdb: AngularFireDatabase) { 
    this.afdb.list<any[]>('noticias').valueChanges().subscribe(data => {
      this.items = data
      console.log(data);
      
  })
  }

  ngOnInit() {
  }

}
