import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { MonitoreoService } from './monitoreo.service';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  public showTopProsses_data: any;

  constructor(public ms: MonitoreoService) {
  }

  ngOnInit() {
  }
  showTopProsses(data) {
    this.showTopProsses_data = data

    console.log(this.showTopProsses_data);

  }
}
