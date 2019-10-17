import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ChartsModule, Label } from 'ng2-charts';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-monitoreo',
  templateUrl: './monitoreo.component.html',
  styleUrls: ['./monitoreo.component.scss']
})
export class MonitoreoComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          max: 100,
        }
      }]
    }
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  public items: any;

  constructor(public db: AngularFireDatabase) {
    this.db.list('info_pc').valueChanges().subscribe(data => {
      this.items = data;
      this.items.forEach(element => {

        var barChartLabels = []
        var data = []
        element.Cores.forEach((core, index) => {
          barChartLabels.push(index.toString())
          data.push(parseFloat(core.CPUUsedPercentage))
        });

        element.chartCpu = {
          barChartLabels: barChartLabels,
          barChartData: [
            {
              data: data,
              label: 'Porsentaje utilizado / core'
            }
          ],
          barChartOptions:{
            responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 100,
                }
              }]
            }
          }
        }
        
      });
      console.log(this.items);


    })
  }

  ngOnInit() {
  }

}
