import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
    providedIn: 'root'
})

export class MonitoreoService {

    public info_pc: any[];

    constructor(public afdb: AngularFireDatabase) {
        this.afdb.list<any>('info_pc').valueChanges().subscribe(data => {
            
            data.forEach(element => {

                var barChartLabels = []
                var data = []

                element.Cores.forEach((core, index) => {
                    barChartLabels.push(index.toString())
                    data.push(parseFloat(core.CPUUsedPercentage))
                });

                element.chartCpu = {
                    barChartType: "bar",
                    barChartLabels: barChartLabels,
                    barChartData: [
                        {
                            data: data,
                            label: 'Porsentaje utilizado / core'
                        }
                    ],
                    barChartOptions: {
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
            
            this.info_pc = data;


        })


    }

    generateCpuChart() {

    }

}
