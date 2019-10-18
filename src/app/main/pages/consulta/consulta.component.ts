import { Component, OnInit } from '@angular/core';
import { ConsultaService } from './consulta.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  displayedColumns: string[] = ['creator', 'date', 'title','h'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  constructor(public cs: ConsultaService) { 
    console.log(this.cs.biva_docs);
  }

  ngOnInit() {
    
  }

}
