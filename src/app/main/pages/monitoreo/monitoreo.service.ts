import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})

export class MonitoreoService {

    public info_pc: any[];

    constructor(public afdb: AngularFireDatabase) {
        this.afdb.list<any>('info_pc').valueChanges().subscribe(data => {


            data.forEach(element => {

                element.InfoProsses.forEach(_element => {
                    _element.Usodememoria=  _element.Usodememoria.replace(",", "").replace(" KB", "")
                });
                element.InfoProsses.sort((a, b) => parseFloat(a.Usodememoria) - parseFloat(b.Usodememoria));
                element.InfoProsses.reverse();
                var aux = element.InfoProsses.filter(word => word.Ttulodeventana != "N/D")
                element.toprosses = aux.slice(1, 5)
                
                
                

                var core_persent = 0

                element.Cores.forEach((core) => {
                    core_persent = core_persent + parseFloat(core.CPUUsedPercentage)
                });
                core_persent = core_persent / element.Cores.length;

                element.chartCpu = {
                    barChartType: "polarArea",
                    barChartLabels: ["%cpu", "%memoria", "%disco"],
                    barChartData: [
                        {
                            data: [core_persent, element.PercentageUsedMemory, element.PercentageDiskSpaceUsage],
                        }
                    ],
                    barChartOptions: {
                        responsive: true,
                        scale: {
                            ticks: {
                                min: 0,
                                max: 100,
                                stepSize: 25
                            }
                        },
                        animation: {
                            duration: 0
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
