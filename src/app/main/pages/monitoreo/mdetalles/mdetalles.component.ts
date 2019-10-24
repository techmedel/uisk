import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MonitoreoService } from '../monitoreo.service';

@Component({
  selector: 'app-mdetalles',
  templateUrl: './mdetalles.component.html',
  styleUrls: ['./mdetalles.component.scss'],

})
export class MdetallesComponent implements OnInit {
  public item: any;

  constructor(
    public router: ActivatedRoute,
    public ms: MonitoreoService) {
    var id = this.router.snapshot.paramMap.get('HostIDUiid')
    if (id != "") {
      this.ms.getInfoPc(id);
    } else {
    }
  }

  ngOnInit() {
  }

}
