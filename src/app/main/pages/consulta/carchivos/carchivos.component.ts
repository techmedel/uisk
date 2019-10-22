import { Component, OnInit } from '@angular/core';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-carchivos',
  templateUrl: './carchivos.component.html',
  styleUrls: ['./carchivos.component.scss']
})
export class CarchivosComponent implements OnInit {
  displayedColumns: string[] = ['creator', 'date', 'title','h'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(public cs: ConsultaService) { 
    console.log(this.cs.biva_docs);
  }

  ngOnInit() {
  }

}
