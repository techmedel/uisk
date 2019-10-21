import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { MonitoreoService } from './monitoreo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  public showTopProsses_data: any;

  constructor(public ms: MonitoreoService,public router: Router) {
  }

  ngOnInit() {
  }

  showDetails(data) {
    this.showTopProsses_data = data
    console.log(this.router.url); 
    console.log(this.showTopProsses_data);
    this.router.navigate([`${this.router.url}/${data.HostIDUiid}`]);
  }
}
